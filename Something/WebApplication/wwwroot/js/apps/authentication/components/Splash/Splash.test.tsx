import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { Splash } from "./Splash";
import { PageTypes } from '../../../common/PageTypeEnum';

describe("<Splash />", () => {
    it("should render correctly", () => {
        const props = { pageType: PageTypes.LOGIN };
        const wrapper = shallow(<Splash {...props} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});