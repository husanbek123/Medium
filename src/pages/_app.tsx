import Layout from "@/components/layout";
import "@/styles/globals.css";
import NiceModal from "@ebay/nice-modal-react";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider} from '@react-oauth/google'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID as string}>
      <Layout>
        <NiceModal.Provider>
          <Component {...pageProps} />
        </NiceModal.Provider>
      </Layout>
    </GoogleOAuthProvider>
  );
}
