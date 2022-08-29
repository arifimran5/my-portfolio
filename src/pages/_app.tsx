import Main from '@/components/Layout/Main';
import '@/styles/globals.css';
import '@fontsource/recursive';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;
