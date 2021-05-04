import React from 'react';
import { Button } from 'reactstrap';
import { dark } from '../Constants/Constants';

// eslint-disable-next-line react/prop-types
const ThemeToggler = ({ theme, handleChangeTheme }) => {
  return (
    <div>
      <Button
          /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
        color={theme === dark ? 'primary' : 'secondary'}
          /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
        onClick={handleChangeTheme}
      >
        Switch theme
      </Button>
    </div>
  );
};

export default ThemeToggler;
