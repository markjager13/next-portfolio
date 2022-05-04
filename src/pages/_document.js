import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <Html id="#top">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Source+Sans+Pro:wght@300;600;900&display=swap" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

/* WAS EXPERIENCING FLASH OF UNSTYLED CONTENT ON MOBILE
...above fixed it but feels a little slower?
...honestly not sure...sometimes it feels slower...sometimes it doesn't
...maybe above fix is not an issue...
...it seems to happen after i visit errored project detail page and go back home...
...idk...maybe its not a problem.

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html id="#top">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Source+Sans+Pro:wght@300;600;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>

    </Html>
  )
}
*/
