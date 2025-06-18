import React from 'react';
const { render, screen, fireEvent } = require("@testing-library/react")
 import {DADNav} from './DADNav';
import { useDADStore } from '../store';
import classes from './DADNav.module.css';

 jest.mock("../store",()=>({
    useDADStore:jest.fn()
 }));

 afterEach(()=>{
    jest.clearAllMocks();
 })
   const setScreen=jest.fn();

test("Renders navigation buttons and SVG arrows",()=>{
     useDADStore.mockReturnValue({screen:"EOTT", setScreen});
    render(<DADNav/>);
    expect(screen.getByText("EOTT")).toBeInTheDocument();
    expect(screen.getByText("DAD")).toBeInTheDocument();
    expect(screen.getAllByTestId('arrow')).toHaveLength(2);
})

describe("Testing Click event",()=>{
    it('calls setState with "mian" when DAD is clicked ',()=>{
        useDADStore.mockReturnValue({screen:"EOTT", setScreen});
        render(<DADNav/>);
        fireEvent.click(screen.getByText("DAD"));
        expect(setScreen).toHaveBeenCalledWith("main");
    });
     it('calls setState with "EOTT" when DAD is clicked ',()=>{
        useDADStore.mockReturnValue({screen:"main", setScreen});
        render(<DADNav/>);
        fireEvent.click(screen.getByText("EOTT"));
        expect(setScreen).toHaveBeenCalledWith("EOTT");
    })
});

test ("Applies navActive class to active screen button",()=>{
    useDADStore.mockReturnValue({screen:"main", setScreen});
    const {container}=render(<DADNav/>);
    expect(container.querySelectorAll(`.${classes.navActive}`)).toHaveLength(1);
    expect(screen.getByText("DAD")).toHaveClass(classes.navActive);
    expect(screen.getByText("EOTT")).not.toHaveClass(classes.navActive);
})