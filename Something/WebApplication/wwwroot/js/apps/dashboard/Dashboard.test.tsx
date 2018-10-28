import "jest";
import * as React from "react";
import { shallow } from "enzyme";
import enzymeToJson from "enzyme-to-json";

import { Dashboard } from "./Dashboard";

describe("<Dashboard />", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<Dashboard />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it("has expected contents on it", () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find('.Dashboard').length).toBe(1);
        expect(wrapper.find('.Dashboard').text()).toBe('Nothing here. Yet.');
    });
});
