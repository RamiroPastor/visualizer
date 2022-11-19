import Head from "next/head"

import '../styles/globals.css'
import "styles/index.scss"

function MyApp({ Component, pageProps }) {

  return(
    <div className="App">

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Estudio Cactus</title>
        <meta name="description" content="Visualizador Estudio Cactus"/>
      </Head>

      <Component {...pageProps} />
    </div>
  )

}

export default MyApp
