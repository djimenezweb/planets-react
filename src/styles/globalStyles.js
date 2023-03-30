import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
box-sizing: border-box;
outline: 0px dashed rgba(255 0 0 / 0.4);
}

body {
margin: 0;
background-image: url('/assets/images/background-stars.svg');
background-color: ${COLORS.almostBlack};
color: white;
font-family: 'League Spartan', sans-serif;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.78;

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

h1, h2 {
font-family: 'Antonio', sans-serif;
font-weight: 500;
text-transform: uppercase;
}

h1 {
    font-size: 5rem;
    line-height: 1.2875;
}

h2 {
    font-size: 2.5rem;
    line-height: 1.3;
    letter-spacing: -1.5px;
}

h3 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 2;
    letter-spacing: 2.6px;
}

h4 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.6875rem;
    line-height: 2.27;
    letter-spacing: 1px;
}

`;

export { GlobalStyles };
