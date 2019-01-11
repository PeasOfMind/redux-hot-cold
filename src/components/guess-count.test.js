import React from 'react';
import {shallow} from 'enzyme';
import {GuessCount} from './guess-count';


describe('<GuessCount />', ()=>{
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the appropriate props', ()=> {
        const guessCount = "3";
        const wrapper = shallow(<GuessCount guessCount={guessCount}/>);
        // expect(wrapper.html()).to.include(guessNoun);
        expect(wrapper.find('span').text()).toEqual(guessCount);

    });
})