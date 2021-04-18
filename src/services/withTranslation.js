import React, { Component } from "react";
import getTranslation from "./getTranslation"

const withTranslation = (componentName)=>(WrappedComponent)=> {
    return class extends Component {
        render() {
            const translation = getTranslation("en", componentName)
            return (
                <WrappedComponent
                    translation={translation}
                    {...this.props}
                />
            );
        }
    };
}
export default withTranslation;