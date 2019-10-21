import React from 'react';
import { shallow } from 'enzyme';

import Update from "../components/Update";

describe("Update", () => {

    test("should render correctly", () => {
        const wrapper = shallow(<Update />);
        expect(wrapper.find('.user-post__image')).toHaveLength(1);
        expect(wrapper.find('.user-post__content')).toHaveLength(1);
        expect(wrapper.find('.user-post__name')).toHaveLength(1);
        expect(wrapper.find('.user-post__passage')).toHaveLength(1);
    });

    test("should set the name properly", () => {
        const dummyName = 'Sam';
        const wrapper = shallow(<Update name={dummyName} />);
        const nameElement = wrapper.find('.user-post__name');
        expect(nameElement.text()).toEqual(dummyName);
    });

    test("should set the passage properly", () => {
        const dummyPassage = "text";
        const wrapper = shallow(<Update passage={dummyPassage}/>);
        const passageElement = wrapper.find(".user-post__passage");
        expect(passageElement.text()).toEqual(dummyPassage);
    });
})

