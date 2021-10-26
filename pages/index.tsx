import type {NextPage} from "next"
import {VStack} from "@chakra-ui/react"
import React from "react"

import Header from "../components/index/Header"
import About from "../components/index/About"
import News from "../components/index/News"
import Footer from "../components/Footer"
import Photos from "../components/index/Photos"
import Motivation from "../components/index/Motivation"

const Home: NextPage = () => {
  return (
    <VStack bg="#FBFBFB" minHeight="100vh" overflowX="hidden" spacing="0px" w="100%">
      <Header />
      <About />
      <News />
      <Motivation />
      <Photos />
      <Footer />
    </VStack>
  )
}

export default Home
