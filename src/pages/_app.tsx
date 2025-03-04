import "@styles/globals.css";
import ScrollToTop from "components/ScrollToTop";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop />  
    </>
  );
}

export default MyApp;
