import {Box, Container, Text, VStack} from "@chakra-ui/react"
import axios from "axios"
import {GetStaticProps} from "next"
import React from "react"
import {motion} from "framer-motion"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Head from "../components/Head"
import {useChangePage, usePage} from "../context/hooks"
import {Pdf, Page} from "../types/types"

interface Props {
  pdfs: Pdf[]
}

const URL = "https://strapi-abtm.herokuapp.com"

const MotionText = motion(Text)
const MotionBox = motion(Box)

const Rating: React.FC<Props> = ({pdfs}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Circuito) changePage(Page.Circuito)
  }, [page, changePage])

  return (
    <>
      <Head
        description="Sistema de puntaje rating"
        siteTitle="ABTM"
        tags="tenis de mesa, asociación, Bahía Blanca, categorias rating"
        title="Categorias rating"
      />
      <VStack
        bg="#FBFBFB"
        color="#242424"
        minHeight="100vh"
        overflow="hidden"
        spacing="0px"
        w="100%"
      >
        <Menu />
        <Container maxW="8xl" paddingBottom={10} paddingTop={[8, null, 24]}>
          <VStack p={2} spacing={10}>
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
              Categorias rating
            </MotionText>
            <MotionBox
              h={[500, null, 800]}
              initial={{opacity: 0, y: 20}}
              m="auto"
              mt={[20, 40, null, 40]}
              p={2}
              transition={{duration: 0.5, delay: 0.1}}
              viewport={{once: true}}
              w={["100%", "100%", "90%", "70%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <iframe height="100%" src={pdfs[0]?.file.url} width="100%" />
            </MotionBox>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props, never> = async () => {
  const res = await axios.get<Pdf[]>(URL + "/pdfs?name=Categorias rating")

  const pdfs = res.data

  return {
    props: {
      pdfs: pdfs,
    },
    revalidate: 1,
  }
}

export default Rating
