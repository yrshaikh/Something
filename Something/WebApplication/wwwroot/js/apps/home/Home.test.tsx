import "jest";
import * as React from "react";
import { shallow } from "enzyme";
import enzymeToJson from "enzyme-to-json";

import { Home } from "./Home";

describe("<Home />", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<Home />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it("has expected contents on it", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('.Home').length).toBe(1);
        expect(wrapper.find('.Home').find('h1').length).toBe(1);
        expect(wrapper.find('.Home').find('p').length).toBe(1);
        
        const buttonWrapper = wrapper.find('.Home').find('.Home__btns');
        expect(buttonWrapper.length).toBe(1);
        const loginLink = buttonWrapper.find('.Home__btns--default').at(0);
        const registerLink = buttonWrapper.find('.Home__btns--default').at(1);
        expect(loginLink.prop('href')).toBe('/account/login');
        expect(registerLink.prop('href')).toBe('/account/register');
        
        const galleryWrapper = wrapper.find('.Home').find('.Home__gallery');
        expect(buttonWrapper.length).toBe(1);
        expect(galleryWrapper.find('img').length).toBe(1);
    });
});
