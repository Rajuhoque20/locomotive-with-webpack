import React from "react";
const { render, screen, act, cleanup } = require("@testing-library/react")
const { default: EOTT } = require("./EOTT");
import websocket from "../../../services/Websocket";

const iconSrc=[
  "icon1.png",
  "icon2.png",
  "icon3.png",
  "icon4.png"
];

beforeEach(()=>{
  jest.useFakeTimers();
});

afterEach(()=>{
  cleanup();
  jest.clearAllTimers();
  jest.resetAllMocks();
})

jest.mock("../../../constant/topic",()=>({
  topics:{EOTT:"eott_topic"},
}));

jest.mock("../../../services/Websocket",()=>({
  subscribe:jest.fn(),
  unsubscribeTopic:jest.fn(),
}));

jest.mock('#framework', ()=>({
  Icons:{
    DADIcons:{
      eott_icon:"icon1.png", 
      eott_speedometer_icon:"icon2.png",
      eott_icon2:"icon3.png",
      eott_icon3:"icon4.png",
    }
}
}));

jest.mock("../auxiliaryDisplay/DADNav", ()=>({
  DADNav:()=><div data-testid="dad-nav">DAD Nav</div>
}));

describe("Testing EOTT Component",()=>{
  it("Should subcribe or unsubscribe on component mount and unmout", ()=>{
    const {unmount}=render(<EOTT/>);
   expect(websocket.subscribe).toHaveBeenCalledWith("eott_topic", expect.any(Function));
   unmount();
   expect(websocket.unsubscribeTopic).toHaveBeenCalledWith("eott_topic",)
  });

  it("Should render image icons with correct sources",()=>{
    render(<EOTT/>)
    const imgs=screen.getAllByRole("img");
    for (let x of iconSrc ){
      expect(imgs.some(img=>img.src.includes(x))).toBeTruthy()
    }
  });

  it('Should render DAD Nav', ()=>{
    render(<EOTT/>);
    expect(screen.getByTestId('dad-nav')).toBeInTheDocument();
  });

  it("Should render static labels and placeholder",()=>{
    render(<EOTT/>);
    expect(screen.getByText(/ARMED/i)).toBeInTheDocument();
    expect(screen.getByText(/Pressure Kpa/i)).toBeInTheDocument();
    expect(screen.getAllByText(/CU/i).length).toBe(2);
    expect(screen.getAllByText(/km/i).length).toBe(2);
    expect(screen.getAllByText(/RU/i).length).toBe(2);
    expect(screen.getAllByText(/v/i).length).toBe(2);
    expect(screen.getByText(/Distance/i)).toBeInTheDocument();
    expect(screen.getByText(/ID : 39995/i)).toBeInTheDocument();
  })

  it("Should render empty string or fallback if data is missing",()=>{
    render(<EOTT/>);
    expect(screen.queryByText(/undefined/)).not.toBeInTheDocument();
  })

  it("Should render dynamic data correctly",()=>{
    render(
      <EOTT/>
    );

    const sampleData={
      pressure:20,
      f:true,
      condition:"GOOD",
      x:true,
      speed_of_train:60,
      speed_of_eott:50,
      voltage:24.5,
      battery_time:3,
      time:"12:40:15",
    };
    const callback=websocket.subscribe.mock.calls[0][1];

    act(()=>{
      callback(sampleData);
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText(20)).toBeInTheDocument();
    expect(screen.getByText('GOOD')).toBeInTheDocument();
    expect(screen.getByText("12:40:15")).toBeInTheDocument();
    expect(screen.getByText(24.5)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(60)).toBeInTheDocument();
    expect(screen.getByText(50)).toBeInTheDocument();
    expect(screen.getByText('F')).toBeInTheDocument();
    expect(screen.getByText('s')).toBeInTheDocument();
  });
})



