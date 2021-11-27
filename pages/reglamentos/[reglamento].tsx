import axios from "axios"
import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Box, Container, VStack, Text} from "@chakra-ui/react"
import React from "react"
import {motion} from "framer-motion"

import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import Head from "../../components/Head"
import {Pdf, Page} from "../../types/types"
import {useChangePage, usePage} from "../../context/hooks"

interface Props {
  reglamentos: Pdf[]
  name: string | undefined
}

interface Params extends Record<string, any> {
  reglamento: string
}

const MotionText = motion(Text)
const MotionBox = motion(Box)

const URL = "https://strapi-abtm.herokuapp.com"

const Reglamentos: NextPage<Props> = ({reglamentos, name}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Reglamentos) changePage(Page.Reglamentos)
  }, [page, changePage])

  return (
    <>
      <Head description={`PDF sobre: ${name}`} siteTitle="ABTM" title={`${name}`} />
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
            <MotionText
              as="h2"
              fontSize="6xl"
              fontWeight="bold"
              initial={{opacity: 0, y: 20}}
              textAlign="center"
              transition={{duration: 0.5}}
              viewport={{once: true}}
              whileInView={{opacity: 1, y: 0}}
            >
              {name}
            </MotionText>
            <MotionBox
              h={[500, null, 800]}
              initial={{opacity: 0, y: 20}}
              m="auto"
              mt={[20, 40, null, 40]}
              p={2}
              paddingTop={20}
              transition={{duration: 0.5, delay: 0.1}}
              viewport={{once: true}}
              w={["100%", "100%", "90%", "70%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <iframe height="100%" src={reglamentos[0]?.file.url} width="100%" />
            </MotionBox>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
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
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  if (!params?.reglamento) {
    return {
      notFound: true,
    }
  }

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
    revalidate: 1,
  }
}

export default Reglamentos
