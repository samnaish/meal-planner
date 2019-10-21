import React from 'react';
import { shallow } from 'enzyme';

import Login from '../components/Login';

describe("Login", () => {

    test("should render correctly", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('.login-box__input')).toHaveLength(2);
        expect(wrapper.find('.login-box__login-button')).toHaveLength(1);
        expect(wrapper.find('.login-box__footer')).toHaveLength(1);
        expect(wrapper.find('.login-box__caption')).toHaveLength(1);
        expect(wrapper.find('.login-box__create-account')).toHaveLength(1);
    })
})