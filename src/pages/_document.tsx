import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="stylesheet" href="./starter-code/assets/scss/style.css" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
