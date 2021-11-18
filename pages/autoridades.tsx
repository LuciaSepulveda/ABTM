import {Container, Grid, GridItem, Text, VStack} from "@chakra-ui/react"
import axios from "axios"
import {GetStaticProps} from "next"
import React from "react"
import {motion} from "framer-motion"

import Card from "../components/autoridades/Card"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import {Autoridad, Page} from "../types/types"
import {useChangePage, usePage} from "../context/hooks"

interface Props {
  autoridades: Autoridad[]
}

const MotionGridItem = motion(GridItem)

const URL = "https://strapi-abtm.herokuapp.com"

const Autoridades: React.FC<Props> = ({autoridades}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Circuito) changePage(Page.Circuito)
  }, [page, changePage])

  return (
    <VStack bg="#FBFBFB" color="#242424" minHeight="100vh" overflow="hidden" spacing="0px" w="100%">
      <Menu />
      <Container maxW="8xl" minH="100vh" paddingBottom={10} paddingTop={[8, null, 24]}>
        <VStack p={2} spacing={10}>
          <Text as="h2" fontSize="6xl" fontWeight="bold" textAlign="center">
            Autoridades
          </Text>
          <Grid
            gap={10}
            m="auto"
            p={2}
            paddingTop={20}
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            w={["70%", "80%", "80%", "60%"]}
          >
            {autoridades.map((autoridad) => (
              <MotionGridItem
                key={autoridad.id}
                initial={{opacity: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                whileInView={{opacity: 1}}
              >
                <Card autoridad={autoridad} />
              </MotionGridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
      <Footer />
    </VStack>
  )
}

export const getStaticProps: GetStaticProps<Props, never> = async () => {
  const res = await axios.get<Autoridad[]>(URL + "/autoridades")

  const autoridades = res.data

  return {
    props: {
      autoridades: autoridades,
    },
    revalidate: 60,
  }
}

export default Autoridades
