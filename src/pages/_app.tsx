import Main from '@/components/Layout/Main';
import '@/styles/globals.css';
import '@fontsource/recursive/400.css';
import '@fontsource/recursive/500.css';
import '@fontsource/recursive/600.css';
import '@fontsource/recursive/700.css';
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
