import React from 'react';
import {shallow} from 'enzyme';
import StatusSection from './status-section';


describe('<StatusSection />', ()=>{
    it('Renders without crashing', () => {
        shallow(<StatusSection guesses={[1, 2, 3, 4, 5]} auralStatus="foo"/>);
    })
})