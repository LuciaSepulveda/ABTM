import {Container, Grid, GridItem, Text, VStack} from "@chakra-ui/react"
import axios from "axios"
import {GetStaticProps} from "next"
import React from "react"
import {motion} from "framer-motion"

import Head from "../components/Head"
import Card from "../components/autoridades/Card"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import {Autoridad, Page} from "../types/types"
import {useChangePage, usePage} from "../context/hooks"

interface Props {
  autoridades: Autoridad[]
}

const MotionGridItem = motion(GridItem)
const MotionText = motion(Text)

const URL = "https://strapi-abtm.herokuapp.com"

const Autoridades: React.FC<Props> = ({autoridades}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Circuito) changePage(Page.Circuito)
  }, [page, changePage])

  return (
    <>
      <Head
        description="Autoridades de la Asociación Bahiense de Tenis de Mesa"
        siteTitle="ABTM"
        title="Autoridades"
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
        <Container maxW="8xl" minH="100vh" paddingBottom={10} paddingTop={[8, null, 24]}>
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
              Autoridades
            </MotionText>
            <Grid
              gap={10}
              m="auto"
              p={2}
              paddingTop={20}
              templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
              w={["80%", "80%", "90%", "80%", "60%"]}
            >
              {autoridades.map((autoridad, i) => (
                <MotionGridItem
                  key={autoridad.id}
                  initial={{opacity: 0, y: -50}}
                  transition={{duration: 0.5, delay: i * 0.1}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, y: 0}}
                >
                  <Card autoridad={autoridad} />
                </MotionGridItem>
              ))}
            </Grid>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props, never> = async () => {
  const res = await axios.get<Autoridad[]>(URL + "/autoridades")

  const autoridades = res.data

  return {
    props: {
      autoridades: autoridades,
    },
    revalidate: 1,
  }
}

export default Autoridades
