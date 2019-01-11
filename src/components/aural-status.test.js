import React from 'react';
import {shallow} from 'enzyme';
import {AuralStatus} from './aural-status';


describe('<AuralStatus />', ()=>{
    it('Renders without crashing', () => {
        shallow(<AuralStatus />);
    });

    it('Renders the aural status as the text', ()=>{
        const status = "Foo";
        const wrapper = shallow(<AuralStatus auralStatus ={status}/>);
        expect(wrapper.text()).toEqual(status);
    });
})