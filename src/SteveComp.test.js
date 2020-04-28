import React from 'react';
import { fireEvent, render, screen, act } from "@testing-library/react";
import SteveComp from "./SteveComp";
//render that comes with testing framework and React are different
//will cause errors if not importing proper


test('test the basic PersonForm', async () => {
    // console.log('Does this work');

    const myCountFunc = jest.fn();

    render(<SteveComp countFunc={myCountFunc}></SteveComp>);
    // screen.debug();
    // fireEvent.click(
    //     screen.getByText('Steve')
    // );

    // const el = screen.getByText(/Steve's Component/i);
    click(/steve/i);
    click(/steve/i);
    click(/steve/i);
    
    console.log(myCountFunc.mock.calls.length);
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}