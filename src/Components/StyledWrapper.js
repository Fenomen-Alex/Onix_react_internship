import React from 'react';
import ThemeContext from '../context/themeContext';

const StyledTheme = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <ThemeContext.Consumer>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {(theme) => <WrappedComponent {...this.props} theme={theme} />}
        </ThemeContext.Consumer>
      );
    }
  };
};

export default StyledTheme;
