import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import { GeoReactContainer } from './GeoReactContainer';
import { GeoReactContainerProps } from '../types/components/GeoReactContainerProps';

describe('<GeoReactContainer />', () => {
    it('should render correctly', () => {
        const props: GeoReactContainerProps = {
            dealContainer: {
                sections: [],
                isMobile: false,
                isConsistentCarouselDesign: false,
            },
        };

        const wrapper = shallow(<GeoReactContainer {...props} />);
        expect(enzymeToJson(wrapper)).toMatchSnapshot();
    });
});