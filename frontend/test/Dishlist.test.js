import React from 'react';
import { shallow } from 'enzyme';

import Dishlist, { Dish } from "../components/Dishlist";

describe("Dishlist", () => {

    const mockArray = [
        {
            name: 'dish-1',
            image: 'image-1',
            servings: 'serve-1',
            time: {
                cook: 'cook-1'
            }
        },
        {
            name: 'dish-2',
            image: 'image-2',
            servings: 'serve-2',
            time: {
                cook: 'cook-2'
            }
        },
        {
            name: 'dish-3',
            image: 'image-3',
            servings: 'serve-3',
            time: {
                cook: 'cook-3'
            }
        }
    ]

    test("Component renders", () => {
        const wrapper = shallow(<Dishlist dishes={mockArray}/>);
        expect(wrapper.find('.dish-list')).toHaveLength(1);
        expect(wrapper.find('.dish-list__item')).toHaveLength(2);
        expect(wrapper.find(Dish)).toHaveLength(2);
    });

    test('it passes correct props to Dish components', () => {
        const wrapper = shallow(<Dishlist dishes={mockArray}/>);

        const Dishes = wrapper.find(Dish);
        expect(Dishes.get(0).props).toEqual({
            name: mockArray[0].name,
            image: mockArray[0].image,
            servings: mockArray[0].servings,
            cookTime: mockArray[0].time.cook
        });
        expect(Dishes.get(1).props).toEqual({
            name: mockArray[1].name,
            image: mockArray[1].image,
            servings: mockArray[1].servings,
            cookTime: mockArray[1].time.cook
        });

    });


})

describe('Dish', () => {
    
    test('Component renders', () => {
        const wrapper = shallow(<Dish />);
        expect(wrapper.find('.dish')).toHaveLength(1);
        expect(wrapper.find('.dish__image')).toHaveLength(1);
        expect(wrapper.find('.dish__info')).toHaveLength(1);
    });

    test('should set the name properly', () => {
        const dummyName = "name";
        const wrapper = shallow(<Dish name={dummyName}/>);
        expect(wrapper.find('[data-test-prop="name"]').text()).toEqual(dummyName);
    });

    test('should set the image src properly', () => {
        const dummyImage = "image name";
        const wrapper = shallow(<Dish image={dummyImage}/>);
        expect(wrapper.find('.dish__image').prop('src')).toEqual(dummyImage);
    });
    
    test('should set the servings properly', () => {
        const dummyServings = "servings";
        const wrapper = shallow(<Dish servings={dummyServings}/>);
        expect(wrapper.find('[data-test-prop="servings"]').text()).toEqual(dummyServings);
    });

    test('should set the cook Time properly', () => {
        const dummyTime = "time";
        const wrapper = shallow(<Dish cookTime={dummyTime}/>);
        expect(wrapper.find('[data-test-prop="cookTime"]').text()).toEqual(dummyTime);
    });

});