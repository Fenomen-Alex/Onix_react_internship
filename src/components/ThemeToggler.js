/* eslint-disable react/prop-types,quotes */
import React from 'react';
import { Button } from 'reactstrap';
import { dark } from '../Constants/Constants';

const ThemeToggler = ({
  theme,
  handleChangeTheme
}) => {
  const darkUrl = 'https://static.thenounproject.com/png/2853798-200.png';
  const lightUrl = 'https://cdn2.iconfinder.com/data/icons/canoopi-mobile-contact-apps/32/Light_Theme-512.png';

  return (
    <div>
      <Button
        outline
        color={theme === dark ? "primary" : "secondary"}
        onClick={handleChangeTheme}
      >
        <img
          className="themeSwitcher"
          src={theme === dark ? lightUrl : darkUrl}
          alt="theme"
        />
      </Button>
    </div>
  );
};

export default ThemeToggler;
