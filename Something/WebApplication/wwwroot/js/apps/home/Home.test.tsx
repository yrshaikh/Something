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
        
        const buttonWrapper = wrapper.find('.Home').find('.Home__btnHolder');
        expect(buttonWrapper.length).toBe(1);

        const buttons = buttonWrapper.find('Button');
        expect(buttons.length).toBe(2);

        const loginButton = buttons.at(0);
        const registerButton = buttons.at(1);
        
        expect(loginButton.prop('href')).toBe('/account/login');
        expect(registerButton.prop('href')).toBe('/account/register');
    });
});
