import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);

    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 2000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    loading && (
      <div className=" flex items-center justify-center h-screen bg-gray-900">
        <div className=" relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-red-300 via-red-400 to-red-500">
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 bg-gray-900 rounded-full"></div>
        </div>
      </div>
    )
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
