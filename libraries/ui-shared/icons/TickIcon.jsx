import React from 'react';
import Icon from '@shopgate/pwa-common/components/Icon';

// SVG Content
const content = '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>';

/**
 * The tick icon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const Tick = props => <Icon content={content} {...props} />;

export default Tick;
