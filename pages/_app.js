// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
=======
// import 'bootstrap/dist/js/bootstrap.bundle';
>>>>>>> b4c9bba6a980501a996c922cf336b9e04f650fc2
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
