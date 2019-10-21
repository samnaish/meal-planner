import React from 'react';
import { shallow } from 'enzyme';

import Footer from "../components/Footer";

describe("Footer", () => {

    test("should render correctly", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.footer')).toHaveLength(1);
        expect(wrapper.find('.footer__caption')).toHaveLength(1);
    })
})