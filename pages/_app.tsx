import type {AppProps} from "next/app"
import {ChakraProvider, ThemeConfig, ColorModeScript, extendTheme} from "@chakra-ui/react"
import Head from "next/head"
import "../css/global.css"
import React from "react"

import {Provider as UserProvider} from "../context/context"

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
        <meta content="Página web de la Asociación Bahiense de Tenis de Mesa" name="description" />
        <meta content="website" property="og:type" />
        <meta content="Asociación Bahiense de Tenis de Mesa" property="og:title" />
        <meta
          content="Página web de la Asociación Bahiense de Tenis de Mesa"
          property="og:description"
        />
        <meta content="ABTM" property="og:site_name" />
        <link href="logo.png" rel="icon" />
      </Head>
      <ChakraProvider>
        <UserProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
    </>
  )
}
export default App
