import type {AppProps} from "next/app"
import {ChakraProvider, ThemeConfig, ColorModeScript, extendTheme} from "@chakra-ui/react"
import "../css/global.css"
import Head from "next/head"
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
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <meta content="Asociación Bahiense de Tenis de Mesa" name="copyright" />
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
