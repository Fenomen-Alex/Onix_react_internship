import React from 'react';
import { ThemeContext } from "../App";

const StyledTheme = (WrappedComponent)=> {
    return class extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {theme => <WrappedComponent {...this.props} theme={theme} />}
                </ThemeContext.Consumer>
            );
        }
    };
}

export default StyledTheme;
