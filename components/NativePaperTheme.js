import {DefaultTheme} from 'react-native-paper';

export const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#28419e',
    background: '#fff',
    text: '#000',
  },
  Text: {
    ...DefaultTheme.Text,
    color: '#000',
  },
};
