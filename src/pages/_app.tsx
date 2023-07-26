import Layout from "@/components/layout";
import "@/styles/globals.css";
import NiceModal from "@ebay/nice-modal-react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NiceModal.Provider>
        <Component {...pageProps} />
      </NiceModal.Provider>
    </Layout>
  );
}
