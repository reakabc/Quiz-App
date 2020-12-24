import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyles from './theme/GlobalStyles';

const root = document.getElementById("root");

ReactDOM.render(
<ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
</ThemeProvider>
, root);