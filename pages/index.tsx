import type {NextPage} from "next"
import {VStack} from "@chakra-ui/react"
import React from "react"

import Header from "../components/Header"
import About from "../components/About"
import News from "../components/News"
import Motivation from "../components/Motivation"

const Home: NextPage = () => {
  return (
    <VStack bg="white" minHeight="100vh" overflowX="hidden" spacing="0px" w="100%">
      <Header />
      <About />
      <News />
      <Motivation />
    </VStack>
  )
}

export default Home
