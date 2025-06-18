import React from 'react';
import Footer from './footer';
import { cleanup, render, screen } from '@testing-library/react';
import websocket from "../../../services/Websocket";
import { topics } from "../../../constant/topic";

afterEach(cleanup);
const imgSources=[
    "footer_icon3",
    "footer_icon4"
]

jest.mock('../../../services/Websocket',()=>({
    subscribe: jest.fn(),
    unsubscribeTopic: jest.fn(),
    publish: jest.fn(),
}));

jest.mock('#framework',()=>({
    Icons:{
        DADIcons:{
            footer_icon3:"footer_icon3",
            footer_icon4:"footer_icon4"
        }
    }
}))

describe("Footer Component",()=>{
    beforeEach(()=>{
        // websocket.subscribe.mockClear();

    })
    it('should render on four footer texts',()=>{
        render(<Footer/>);
        expect(screen.getAllByText(/All Right/)).toHaveLength(2);
        expect(screen.getAllByText(/Stop/)).toHaveLength(2);
    });
    it('should render all the icons width correct sources',()=>{
        render(<Footer/>);
        const images=screen.getAllByRole('img');
        for( let src of imgSources){
            expect(images.some(image=>image.src.includes(src))).toBeTruthy();
        }

    });

    it("Should subscribe and unsubscribe to websocket topic",()=>{
        const {unmount}=render(<Footer/>);
        expect(websocket.subscribe).toHaveBeenCalledWith(topics.DAD_FOOTER, expect.any(Function));
        unmount();
        expect(websocket.unsubscribeTopic).toHaveBeenCalledWith(topics.DAD_FOOTER);
    })

})
