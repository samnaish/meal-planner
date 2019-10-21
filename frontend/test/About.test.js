import React from 'react';
import { shallow } from 'enzyme';

import About from '../components/About';

describe("About", () => {

    test("should render correctly", () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('.about')).toHaveLength(1);
        expect(wrapper.find('.about__content')).toHaveLength(1);
        expect(wrapper.find('.about__logo')).toHaveLength(1);
        expect(wrapper.find('.about__text')).toHaveLength(1);
    })

    test("renders an image with src correctly", () => {
        const wrapper = shallow(<About scr="../static/images/logos/logo.png"/>);
        expect(wrapper.find('.about__logo')).toHaveLength(1);
    })
})