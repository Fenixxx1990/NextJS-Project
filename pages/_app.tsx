import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { type JSX } from "react";
import { Noto_Sans } from "next/font/google";
import { YMInitializer } from "react-yandex-metrika";
import ym from "react-yandex-metrika";

Router.events.on("routeChangeComplete", (url: string) => {
  if (typeof window !== "undefined") {
    ym("hit", url);
  }
});

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"], // Подмножества символов
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Начертания
  variable: "--font-noto-sans", // CSS‑переменная
  display: "swap", // Стратегия отображения
});

export default function App({
  Component,
  pageProps,
  router,
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link key={1} rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:locale" content="ru_Ru" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <div className={notoSans.variable}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
