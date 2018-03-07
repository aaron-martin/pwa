/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { logger } from '@shopgate/pwa-core/helpers';
import SimpleInput from './SimpleInput';

/**
 * A component that takes care of rendering and validation of input fields.
 * This component has no styling and should not be used directly.
 * You may want to use an appropriate form field component from the template instead.
 */
class MultiLineInput extends SimpleInput {
  /**
   * Creates a new input component.
   * @param {Object} props The component properties.
   */
  constructor(props) {
    super(props);
    this.baseHeight = null;
    // First render must be empty.
    const sanitizedValue = this.props.onSanitize('');
    this.state = {
      value: sanitizedValue,
      isValid: this.props.onValidate(sanitizedValue, true),
      isFocused: false,
    };
  }

  /**
   * Additional function to make avoid .setState use in componentDidMount
   * usage violation.
   */
  doComponentDidMount() {
    const sanitizedValue = this.props.onSanitize(this.props.value || '');
    this.props.onChange(sanitizedValue);
    this.setState({
      value: sanitizedValue,
      isValid: this.props.onValidate(sanitizedValue, true),
      isFocused: false,
    });
  }

  /**
   * Set real value and trigger second render.
   * Initially trigger onChange() to set the initial value.
   */
  componentDidMount() {
    // No super, would have to sanitize anyway.
    this.doComponentDidMount();
  }

  /**
   * Adjusts the element height.
   */
  componentDidUpdate() {
    if (!(this.ref instanceof HTMLElement)) {
      logger.error('Ref is not an HTMLElement');
      return;
    }

    this.ref.style.height = `${this.baseHeight}px`;
    this.ref.style.height = `${this.ref.scrollHeight}px`;
  }

  /**
   * Sets an initial height of the multiline HTMLElement.
   */
  setBaseHeight = () => {
    if (this.baseHeight !== null) {
      return;
    }
    this.baseHeight = this.ref.clientHeight;
  };

  /**
   * Handles reference passing to callback and assignation.
   * @param {HTMLElement} ref The element
   */
  handleRef(ref) {
    super.handleRef(ref);
    this.setBaseHeight();
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    const { className, password } = this.props;
    const type = password ? 'password' : this.props.type;
    const { value } = this.state;

    return (
      <textarea
        id={this.props.id}
        name={this.props.name}
        ref={ref => this.handleRef(ref)}
        className={className}
        type={type}
        value={value}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        disabled={this.props.disabled}
      />
    );
  }
}

export default MultiLineInput;
