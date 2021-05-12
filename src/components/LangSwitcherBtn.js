import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import lang from '../assets/images/lang512.png';

// eslint-disable-next-line import/prefer-default-export
export const LangSwitcherBtn = () => {
  const { i18n } = useTranslation('translations');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="primary">
        <img className="langLogo" src={lang} alt="set-lang" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => changeLanguage('ru')}>Ru</DropdownItem>
        <DropdownItem onClick={() => changeLanguage('en')}>En</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};
