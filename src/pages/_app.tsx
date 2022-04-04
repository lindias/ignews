import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
