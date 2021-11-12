import axios from "axios"
import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Box, Container, VStack, Text} from "@chakra-ui/react"
import React from "react"

import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import {Pdf} from "../../types/types"

interface Props {
  reglamentos: Pdf[]
  name: string | undefined
}

interface Params extends Record<string, any> {
  reglamento: string
}

const URL = "https://strapi-abtm.herokuapp.com"

const Reglamentos: NextPage<Props, Params> = ({reglamentos, name}, {reglamento}) => {
  return (
    <VStack
      bg="#FBFBFB"
      color="#242424"
      minHeight="100vh"
      overflowX="hidden"
      spacing="0px"
      w="100%"
    >
      <Menu />
      <Container maxW="8xl" minH="100vh" paddingBottom={10} paddingTop={[8, null, 24]}>
        <VStack minH="100vh" spacing={10} w="100%">
          <Text as="h2" fontSize="6xl" fontWeight="bold">
            {name}
          </Text>
          <Box
            h={[500, null, 800]}
            m="auto"
            mt={[20, 40, null, 40]}
            p={2}
            paddingTop={20}
            w={["100%", "100%", "90%", "70%"]}
          >
            <iframe height="100%" src={reglamentos[0]?.file.url} width="100%" />
          </Box>
        </VStack>
      </Container>
      <Footer />
    </VStack>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const string_reglamentos = [
    "Anexo protocolo covid",
    "DDJJ covid",
    "Declaracion jurada",
    "Gomas aprobadas",
    "Protocolo covid",
    "Reglamento ABTM",
    "Reglamento tecnico",
    "Tribunal disciplina",
  ]

  return {
    paths: string_reglamentos.map((reg) => ({
      params: {
        reglamento: reg,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  const res = await axios.get<Pdf[]>(URL + `/pdfs?name=${params?.reglamento}`)

  const reglamentos = res.data

  if (!reglamentos) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      reglamentos: reglamentos,
      name: params?.reglamento,
    },
  }
}

export default Reglamentos