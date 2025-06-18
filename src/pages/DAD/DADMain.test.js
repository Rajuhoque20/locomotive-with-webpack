import React from "react";
import { render, screen } from "@testing-library/react";
import DADmain from "./main";

jest.mock("./auxiliaryDisplay/auxiliaryDisplay", ()=>()=><div>Auxiliary Display</div>);
jest.mock("./cautionOrder/cautionOrder", ()=>()=><div>Caution Order</div>);
jest.mock('./EOTT/EOTT', ()=>()=><div>EOTT</div>);
jest.mock('./store', ()=>({
    useDADStore:jest.fn()
}));

describe("Testing DAD Main",()=>{
    it("Renders AuxiliaryDisplay when screen is main", ()=>{
        require('./store').useDADStore.mockReturnValue({screen:"main"})
        render(<DADmain/>);
        expect(screen.getByText("Auxiliary Display")).toBeInTheDocument();
    });
    it("Renders CautionOrder when screen is caution order",()=>{
        require('./store').useDADStore.mockReturnValue({screen:"caution_order"});
        render(<DADmain/>);
        expect(screen.getByText("Caution Order")).toBeInTheDocument();
    });
    it("Renders EOTT when screen is EOTT",()=>{
        require('./store').useDADStore.mockReturnValue({screen:"EOTT"});
        render(<DADmain/>)
        expect(screen.getByText("EOTT")).toBeInTheDocument();
    })
})
