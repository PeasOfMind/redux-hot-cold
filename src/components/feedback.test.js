import React from 'react';
import {shallow} from 'enzyme';
import {Feedback} from './feedback';


describe('<Feedback/>', ()=>{
    it('Renders without crashing', () => {
        shallow(<Feedback feedback="foo" guessCount="3"/>);
    })

    it('Renders the appropriate props', ()=> {
        const feedback="foo";
        const guessCount="3";
        const wrapper = shallow(<Feedback feedback={feedback} guessCount={guessCount}/>);
        expect(wrapper.text()).toEqual(`${feedback} Guess again!`);
    })
})