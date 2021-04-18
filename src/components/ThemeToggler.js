import React from 'react';
import {Button} from "reactstrap";

const ThemeToggler = (props) => {
    console.log(props)
    return (
        <div>
            <Button
                color={props.theme === "dark" ? "primary" : "secondary"}
                onClick={props.handleChangeTheme}
            >
                Switch theme
            </Button>
        </div>
    );
};

export default ThemeToggler;