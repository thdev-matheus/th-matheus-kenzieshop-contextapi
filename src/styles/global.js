import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;

        border: none;
        outline: none;

        box-shadow: 0 0 0 0;
        box-sizing: border-box;
    }

    :root {
        --black: #2c3e50;
        --white: #ecf0f1;
        --gray: #95a5a6;
        --silver: #bdc3c7;
        --purple: #9b59b6;
        --alice-blue: #f0f8fe;
        --red: #ff3030;
    }

    body, input, button {
        font-family: "Ubuntu";
        color: var(--black);
    }

    body {
        background: var(--black);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`;
