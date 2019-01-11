import React from 'react';
import {shallow} from 'enzyme';
import {GuessList} from './guess-list';


describe('<GuessList />', ()=>{
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[1, 2, 3, 4, 5]} />);
    });

    it('Renders all items from the list', () => {
        const values = [1, 10, 20 , 35];
        const wrapper = shallow(<GuessList guesses={values}/>);
        const listItems = wrapper.find('li');
        listItems.forEach((item, index) => {
            const listVal = parseInt(item.text(), 10);
            expect(listVal).toEqual(values[index]);
        })
        
    });

})