import React from 'react';
import { shallow } from 'enzyme';

import Signup from '../components/Signup';

describe("Signup", () => {

        const wrapper = shallow(<Signup />);
        expect(wrapper.find('.signin__form')).toHaveLength(1);
        expect(wrapper.find('.signin__input')).toHaveLength(5);
        expect(wrapper.find('.signin__button')).toHaveLength(1);
        expect(wrapper.find('.signin__footer')).toHaveLength(1);
        expect(wrapper.find('.signin__caption')).toHaveLength(1);
        expect(wrapper.find('.signin__create')).toHaveLength(1);
    })
})