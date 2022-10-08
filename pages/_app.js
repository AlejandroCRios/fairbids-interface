import Layout from "../components/UILayout";
import "../styles/globals.css";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import { Main } from "./main";

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Main>
  );
}

export default MyApp;
