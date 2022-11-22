import Head from "next/head"

import { LayerContextProvider } from "frontend/contexts/LayerContext";
import '../styles/globals.css'
import "styles/index.scss"



function MyApp({ Component, pageProps }) {

  return(
    <div className="App grow flex w-full h-full bg-gray-300">

      <LayerContextProvider>

        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>Estudio Cactus</title>
          <meta name="description" content="Visualizador Estudio Cactus"/>
        </Head>

        <Component {...pageProps} />

      </LayerContextProvider>

    </div>
  )

}

export default MyApp
