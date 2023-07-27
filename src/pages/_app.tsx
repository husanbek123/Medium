import React from "react";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import NiceModal from "@ebay/nice-modal-react";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import { CookiesProvider, useCookies } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = React.useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["registered","data"]);
  React.useEffect(() => {
    if (domLoaded === false) {
      setDomLoaded(true);
    }

    if (!cookies.data) {
      setCookie("registered", false);
    } else {
      setCookie("registered", true);
    }
  }, []);
  return (
    domLoaded && (
      <CookiesProvider>
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_CLIENT_ID as string}
        >
          <Layout>
            <NiceModal.Provider>
              <Component {...pageProps} />
              <Toaster position="top-right" reverseOrder={true} />
            </NiceModal.Provider>
          </Layout>
        </GoogleOAuthProvider>
      </CookiesProvider>
    )
  );
}
