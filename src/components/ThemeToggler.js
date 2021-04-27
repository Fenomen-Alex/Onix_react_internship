import React from 'react';
import { Button } from 'reactstrap';

const ThemeToggler = (props) => {
  return (
    <div>
      <Button
          /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
        color={props.theme === 'dark' ? 'primary' : 'secondary'}
          /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
        onClick={props.handleChangeTheme}
      >
        Switch theme
      </Button>
    </div>
  );
};

export default ThemeToggler;
