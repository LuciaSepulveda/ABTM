import type {NextPage} from "next"
import {Box, Center, VStack} from "@chakra-ui/react"
import React from "react"
import {Element} from "react-scroll"

import Header from "../components/Header"

const Home: NextPage = () => {
  return (
    <VStack bg="white" minHeight="100vh" overflowX="hidden" spacing="0px" w="100%">
      <Header />
      <Element name="elemento1" style={{height: "100vh", marginTop: "-10px", width: "100%"}}>
        <Box>
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L40,64C80,64,160,64,240,85.3C320,107,400,149,480,165.3C560,181,640,171,720,149.3C800,128,880,96,960,112C1040,128,1120,192,1200,202.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              fill="#3C6ECD"
              fillOpacity="1"
            />
          </svg>
        </Box>
      </Element>
    </VStack>
  )
}

export default Home
