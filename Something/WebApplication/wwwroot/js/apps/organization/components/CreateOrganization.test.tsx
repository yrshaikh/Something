import "jest";
import * as React from "react";
import { shallow } from "enzyme";
import enzymeToJson from "enzyme-to-json";

import { CreateOrganization } from "./CreateOrganization";

describe("<CreateOrganization />", () => {
    it("should render correctly", () => {
        const wrapper = shallow(<CreateOrganization isOnboarding={true} onCreateCallback={null} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });

    it("should enable button when text is entered", () => {
        const wrapper = shallow(<CreateOrganization isOnboarding={true} onCreateCallback={null} />);
        expect(wrapper.find('.ant-btn--disabled').length).toBe(1);
        wrapper.setState({ organizationName: 'howdy' });
        expect(wrapper.find('.ant-btn--disabled').length).toBe(0);
    });
});
