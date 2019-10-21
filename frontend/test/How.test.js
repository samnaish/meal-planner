import React from 'react';
import { shallow } from 'enzyme';

import How from '../components/How';

describe("How", () => {

    test("Component renders", () => {
        const wrapper = shallow(<How />);
        expect(wrapper.find('.how__subtitle')).toHaveLength(1);
        expect(wrapper.find('.how__img')).toHaveLength(1);
        expect(wrapper.find('.how__caption')).toHaveLength(1);
    })

    test("should set the subtitle properly", () => {
        const dummySub = 'subTitle';
        const wrapper = shallow(<How subtitle={dummySub}/>);
        const subElement = wrapper.find('.how__subtitle');
        expect(subElement.text()).toEqual(dummySub);
    })
})