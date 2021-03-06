import React from 'react';
import { mount } from 'enzyme';

export function makeGetEnzymeWrapper(Component, defaultProps = {}) {
    return function getEnzymeWrapper(props = {}, depth = mount) {
        const mergedProps = { ...defaultProps, ...props };
        return depth(<Component {...mergedProps} />);
    };
}
