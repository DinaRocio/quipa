// styles/GlobalStyles.tsx
import { css, Global } from "@emotion/react";

const globalStyles = css`
  body {
    margin: 0;
    background: #f7f7f8;
    color: #1b2a4e;
    font-family: "Poppins", system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #0a6ee0;
    text-decoration: none;
  }
  a:hover {
    color: #f2685c;
  }

  button {
    font-family: inherit;
  }

  :root {
    --clr-blue: #0a6ee0;
    --clr-blue-hover: #0959b4;
    --clr-coral: #f2685c;
    --clr-coral-hover: #dd5145;
    --clr-green: #25d366;
    --clr-green-hover: #1fb857;
    --clr-navy: #1b2a4e;
    --clr-muted: #5b6374;
    --clr-faint: #9aa2b3;
    --clr-border: #e9eaee;
    --clr-border-soft: #e6e7ec;
    --clr-surface: #fff;
    --clr-bg: #f7f7f8;
    --clr-placeholder: #eceef2;

    --font-hand: "Caveat", "Segoe Script", cursive;

    --bp-mobile: 375px;
    --bp-desktop: 1440px;
    --transition-time: 0.5s;
  }

  @keyframes qpulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55);
    }
    70% {
      box-shadow: 0 0 0 9px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }
  @keyframes qup {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes qfade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
