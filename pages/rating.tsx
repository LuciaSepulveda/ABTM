import {Box, Container, Text, VStack} from "@chakra-ui/react"
import axios from "axios"
import {GetStaticProps} from "next"
import React from "react"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import {Pdf} from "../types/types"

interface Props {
  pdfs: Pdf[]
}

const URL = "https://strapi-abtm.herokuapp.com"

const Rating: React.FC<Props> = ({pdfs}) => {
  return (
    <VStack bg="#FBFBFB" color="#242424" minHeight="100vh" overflow="hidden" spacing="0px" w="100%">
      <Menu />
      <Container maxW="8xl" paddingBottom={10} paddingTop={[8, null, 24]}>
        <VStack p={2} spacing={10}>
          <Text as="h2" fontSize="6xl" fontWeight="bold">
            Rating General
          </Text>
          <Box
            h={[500, null, 800]}
            m="auto"
            mt={[20, 40, null, 40]}
            p={2}
            w={["100%", "100%", "90%", "70%"]}
          >
            <iframe height="100%" src={pdfs[0]?.file.url} width="100%" />
          </Box>
        </VStack>
      </Container>
      <Footer />
    </VStack>
  )
}

export const getStaticProps: GetStaticProps<Props, never> = async () => {
  const res = await axios.get<Pdf[]>(URL + "/pdfs?name=Rating%20general")

  const pdfs = res.data

  return {
    props: {
      pdfs: pdfs,
    },
  }
}

export default Rating