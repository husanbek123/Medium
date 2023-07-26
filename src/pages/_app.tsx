import Layout from "@/components/layout";
import "@/styles/globals.css";
import NiceModal from "@ebay/nice-modal-react";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID as string}>
      <Layout>
        <NiceModal.Provider>
          <Component {...pageProps} />
          <Toaster position="top-right" reverseOrder={true} />
        </NiceModal.Provider>
      </Layout>
    </GoogleOAuthProvider>
  );
}
