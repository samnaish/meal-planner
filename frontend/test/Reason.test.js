import React from 'react';
import { shallow } from 'enzyme';

import Reason from "../components/Reason";

describe("Reason", () => {

    test("should render correctly", () => {
        const wrapper = shallow(<Reason />);
        expect(wrapper.find('.reason__title')).toHaveLength(1);
        expect(wrapper.find('.reason__caption')).toHaveLength(1);
        expect(wrapper.find('.reason__img')).toHaveLength(1);
    })

    test("should set the title properly", () => {
        const dummyTitle = "title";
        const wrapper = shallow(<Reason title={dummyTitle} />);
        const titleElement = wrapper.find('.reason__title');
        expect(titleElement.text()).toEqual(dummyTitle);
    })

    test("should set the caption properly", () => {
        const dummyCaption = "Caption";
        const wrapper = shallow(<Reason caption={dummyCaption} />);
        const CaptionElement = wrapper.find('.reason__caption');
        expect(CaptionElement.text()).toEqual(dummyCaption);
    })

    xtest("should set the Image properly", () => {
        const dummyImageName = 'lol Cats';
        const wrapper = shallow(<Reason src={`/static/images/${dummyImageName}`}/>);
        const ImgElement = wrapper.find('.reason__img');
        expect(ImgElement.text()).toEqual(dummyImageName);
    })

})