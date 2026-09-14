import GlobalStyles from "@/styles/globals";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
