import React, { Component } from 'react';
import getTranslation from '../../services/getTranslation';

const withTranslation = (componentName) => (WrappedComponent) => {
  return class extends Component {
    render() {
      const translation = getTranslation('en', componentName);
      return (
        <WrappedComponent
          translation={translation}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...this.props}
        />
      );
    }
  };
};
export default withTranslation;
