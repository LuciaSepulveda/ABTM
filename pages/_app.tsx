import type {AppProps} from "next/app"
import {ChakraProvider, ThemeConfig, ColorModeScript, extendTheme} from "@chakra-ui/react"
import Head from "next/head"
import "../css/global.css"
import React from "react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({config})

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>ABTM</title>
        <meta content="ABTM page" name="description" />
      </Head>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
export default App
