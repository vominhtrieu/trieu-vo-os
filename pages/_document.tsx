import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Trieu Vo OS" />
        <meta property="og:description" content="A software engineer's portfolio presented as a simulated website, mimicking an operating system interface." />
        <meta property="og:image" content="https://trieuvo.netlify.com/Wallpaper.jpg" />
        <link href='https://fonts.googleapis.com/css?family=Outfit&display=optional' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
