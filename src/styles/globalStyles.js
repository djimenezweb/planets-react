import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
box-sizing: border-box;
}

@font-face {
    font-family: 'Spartan';
    font-weight: 400;
    src: url('/assets/fonts/spartanmb-regular-400.woff2') format('woff2'),
    url('/assets/fonts/spartanmb-regular-400.woff') format('woff')
}

@font-face {
    font-family: 'Spartan';
    font-weight: 700;
    src: url('/assets/fonts/spartanmb-bold-700.woff2') format('woff2'),
    url('/assets/fonts/spartanmb-bold-700.woff') format('woff')
}

body {
margin: 0;
background-image: url('/assets/images/background-stars.svg');
background-color: ${COLORS.almostBlack};
color: white;
font-family: 'Spartan', sans-serif;
font-weight: 400;
overflow-x: hidden;
}

img {
max-width: 100%;
display: block;
}

ul {
list-style: none;
padding-left: 0;
margin-top: 0;
margin-bottom: 0;
}

a {
text-decoration: none;
color: inherit;
}
`;

export { GlobalStyles };
