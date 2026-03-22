import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { type JSX } from "react";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"], // Подмножества символов
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Начертания
  variable: "--font-noto-sans", // CSS‑переменная
  display: "swap", // Стратегия отображения
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link key={1} rel="icon" href="/favicon.ico" />
      </Head>
      <div className={notoSans.variable}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
