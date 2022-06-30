import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import "./../styles/style.css";
import "./../styles/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { CookiesProvider } from "react-cookie";

const MyApp = ({ Component, pageProps }: AppProps | any) => {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </Provider>
  );
};

export default MyApp;
