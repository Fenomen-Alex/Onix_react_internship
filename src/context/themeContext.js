import React from 'react';
import { light } from '../Constants/Constants';

const theme = light;
// eslint-disable-next-line import/prefer-default-export
export const ThemeContext = React.createContext(theme);
