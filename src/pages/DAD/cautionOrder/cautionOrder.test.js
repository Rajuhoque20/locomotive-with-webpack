import React from 'react';
const { render, screen, fireEvent } = require("@testing-library/react");
import CautionOrder from './cautionOrder';
import websocket from '../../../services/Websocket';
import { useDADStore } from '../store';

const tableHeaders = [
  "S. No.",
  "Section",
  "Kilometer",
  "Speed",
  "Cause",
  "Date Imposition",
  "From",
  "To",
  "From",
  "To",
];

const mockSetScreen=jest.fn();

beforeEach(()=>{
    jest.clearAllMocks();
    useDADStore.setState({setScreen:mockSetScreen})
})

jest.mock("../../../constant/topic",()=>({
    topics:{CAUTION_ORDER:'caution_order'}
}))

jest.mock("../../../services/Websocket",()=>({
    subscribe: jest.fn(),
    unsubscribeTopic: jest.fn(),
}));

test("Render static content",()=>{
    render(<CautionOrder/>);
    expect(screen.getByText(/Form No/i)).toBeInTheDocument();
    expect(screen.getByText(/सतर्कता आदेश/i)).toBeInTheDocument();
    expect(screen.getByText(/CAUTION ORDER/i)).toBeInTheDocument();
    expect(screen.getByText('गाडी क्रं / Train No.')).toBeInTheDocument();
    expect(screen.getByText(/South Eastern Railway/i)).toBeInTheDocument();
    expect(screen.getByText('दिनांक / DATE')).toBeInTheDocument();
    expect(screen.getByText('SHARP LOOKOUT + LONG WHISTLE ON SEEING ANY MOVEMENT OF MIGRANT LABOUR ON TRACK & REPORT AT STATION AHEAD')).toBeInTheDocument();
    expect(screen.getByText(/चालक के हस्ताक्षर/i)).toBeInTheDocument();
    expect(screen.getByText(/Signature of Driver/i)).toBeInTheDocument();
    expect(screen.getByText(/गार्ड के हस्ताक्षर/i)).toBeInTheDocument();
    expect(screen.getByText(/Signature of Guard/i)).toBeInTheDocument();
    expect(screen.getByText(/उपस्टेशनमास्टर के हस्ताक्षर/i)).toBeInTheDocument();
    expect(screen.getByText(/Signature of SM & Station/i)).toBeInTheDocument();
})

test("Render table headers",()=>{
    render(<CautionOrder/>);
    tableHeaders?.forEach(item=>{
        if(item==="Section")
        {
            expect(screen.getAllByText(item).length).toBe(2);
            return;
        }
         if(item==="From")
        {
            expect(screen.getAllByText(item).length).toBe(2);
            return;
        }
         if(item==="To")
        {
            expect(screen.getAllByText(item).length).toBe(2);
            return;
        }
        expect(screen.getByText(item)).toBeInTheDocument();
    });
})

test("Should subscribe and unsubscribe on component mount/unmount",()=>{
        const {unmount}=render(<CautionOrder/>);
        expect(websocket.subscribe).toHaveBeenCalledWith('caution_order', expect.any(Function));
        unmount();
        expect(websocket.unsubscribeTopic).toHaveBeenCalledWith('caution_order');
});

test("Should call setScreen('main') on button click",()=>{
    render(<CautionOrder/>);
    fireEvent.click(screen.getByText('Close'));
    expect(mockSetScreen).toHaveBeenCalledWith('main');
});

test("Updates DOM when cautionOrder is set",()=>{
     const mockData = {
    section: "XYZ",
    form_no: "123",
    train_no: "456",
    date: "2025-06-08",
    note: "This is a test note",
    Caution_order: [
      {
        sno: 1,
        station_from: "A",
        station_to: "B",
        location_from: "KM1",
        location_to: "KM2",
        speed_limit: "50",
        cause: "Maintenance",
        date_imposition: "2025-06-07",
      },
    ],
  };
  websocket.subscribe=jest.fn((topic, cb)=>cb(mockData));
  render(<CautionOrder/>)
  expect(screen.getByText(/Maintenance/i)).toBeInTheDocument();
  expect(screen.getByText(/XYZ/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a test note/i)).toBeInTheDocument();
  expect(screen.getByText(/KM1/i)).toBeInTheDocument();
  expect(screen.getByText(/2025-06-07/i)).toBeInTheDocument();
})
