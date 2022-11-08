import GlobalStyle from  '../styles/styledGlobal.ts';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
