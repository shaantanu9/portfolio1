import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add language tag */}
          {/* <html lang="en" /> */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          {/* Preload Adsence and analytics */}
          <script
            id="Adsense-id"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1532475473000178"
            data-ad-client="ca-pub-1532475473000178"
            async=""
            defer=""
            data-nscript="beforeInteractive"
            data-checked-head="true"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
