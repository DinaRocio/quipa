// styles/GlobalStyles.tsx
import { css, Global } from "@emotion/react";

const globalStyles = css`
  /* Import the Red Hat Display font */
  @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap");

  /* @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap"); */

  /* Add your global styles here */
  body {
    background: #fafafa;
    color: #87879d;
    line-height: 1;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.625rem;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    list-style: none;
  }

  h1 {
    color: #28283d;
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.1;
    text-align: center;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    /* Colors */

    /* Primary */
    --clr-melon: #f46454;
    --clr-light-blue: #047ce4;
    --clr-dark-blue: #04448b;
    --clr-green: #04db09;
    --clr-yellow: #eee604;

    /* Hover */
    --hover-melon: #f7887a;
    --hover-light-blue: #3394ff;
    --hover-dark-blue: #2657a7;
    --hover-green: #15e31f;
    --hover-yellow: #ffff26;

    /* Typography */

    --clr-gray-dark: #28283d;

    /* font family */
    --ff-red-hat: "Red Hat Display", sans-serif;

    /* font family */

    /* font weight */
    --fw-light: 300;
    --fw-regular: 400;

    /* Breakpoints */

    --bp-mobile: 375px;
    --bp-desktop: 1440px;
  }
  #root {
    font-family: var(--ff-red-hat);

    line-height: 1.5;

    min-height: 100vh;
    max-width: 100vw;
  }
`;

const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
