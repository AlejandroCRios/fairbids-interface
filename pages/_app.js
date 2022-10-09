import Layout from "../components/UILayout";
import "../styles/globals.css";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import Providers from "../components/providers";

export default function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}
