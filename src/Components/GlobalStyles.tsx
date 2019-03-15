import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:#F7F9FC;
        color:#4f566b; 
        font-size:16px;
    }
    a {
        color:inherit;
        text-decoration:none;

    }
    h1, h2, h3, h4, h5, h6{
        color:#210e6f;
    }
`;

export default GlobalStyles;
