import React from 'react';
import {shallow, mount} from 'enzyme';
import {TopNav} from './top-nav';
import {restartGame, generateAuralUpdate} from '../actions';

describe('<TopNav />', ()=>{
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should dispatch restartGame when New Game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<TopNav dispatch={dispatch}/>);
        const link = wrapper.find('.new');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalled();

    });

    it('Should dispatch onGenerateAuralUpdate when Hear State of Game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<TopNav dispatch={dispatch}/>);
        const link = wrapper.find('.status-link');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(generateAuralUpdate());
    });
})