import axios from "axios"
import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Container, Table, Tbody, Td, Text, Th, Thead, Tr, VStack} from "@chakra-ui/react"
import React from "react"
import {motion} from "framer-motion"

import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import Head from "../../components/Head"
import {Ranking, Page} from "../../types/types"
import {useChangePage, usePage} from "../../context/hooks"

interface Props {
  ranking: Ranking[]
  cat: string | undefined
}

interface Params extends Record<string, any> {
  categoria: string
}

const URL = "https://strapi-abtm.herokuapp.com"

const MotionText = motion(Text)
const MotionTable = motion(Table)
const MotionTh = motion(Th)
const MotionTr = motion(Tr)
const MotionTd = motion(Td)

const RankingCategoria: NextPage<Props> = ({ranking, cat}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Ranking) changePage(Page.Ranking)
  }, [page, changePage])

  const animationChildren = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0, transition: {duration: 0.5}},
  }

  const animationDatos = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 0.5}},
  }

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  }

  return (
    <>
      <Head description={`Ranking para la categoria ${cat}`} siteTitle="ABTM" title={`${cat}`} />
      <VStack
        bg="#FBFBFB"
        color="#242424"
        minHeight="100vh"
        overflowX="hidden"
        spacing="0px"
        w="100%"
      >
        <Menu />
        <Container maxW="8xl" paddingBottom={10} paddingTop={[8, null, 24]}>
          <VStack minH="100vh" p={2} spacing={10} w="100%">
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
              Ranking {cat}
            </MotionText>
            <MotionTable
              colorScheme="facebook"
              initial={{opacity: 0, y: 20}}
              paddingTop={30}
              transition={{duration: 0.5, delay: 0.1}}
              variant="simple"
              viewport={{once: true}}
              whileInView={{opacity: 1, y: 0}}
            >
              <Thead bg="#3c6fcd88">
                <MotionTr initial="hidden" variants={container} whileInView="show">
                  <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                    Posicion
                  </MotionTh>
                  <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                    Jugador
                  </MotionTh>
                  <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                    Puntos
                  </MotionTh>
                </MotionTr>
              </Thead>
              <Tbody>
                {ranking.map((elem) => (
                  <MotionTr
                    key={elem.id}
                    initial="hidden"
                    variants={container}
                    viewport={{once: true}}
                    whileInView="show"
                  >
                    <MotionTd textAlign="center" variants={animationDatos}>
                      {elem.position}
                    </MotionTd>
                    <MotionTd textAlign="center" variants={animationDatos}>
                      {elem.name}
                    </MotionTd>
                    <MotionTd textAlign="center" variants={animationDatos}>
                      {elem.points}
                    </MotionTd>
                  </MotionTr>
                ))}
              </Tbody>
            </MotionTable>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const categorias = ["sd", "primera", "segunda", "tercera", "cuarta", "quinta"]

  return {
    paths: categorias.map((cat) => ({
      params: {
        categoria: cat,
      },
    })),
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  if (!params?.categoria) {
    return {
      notFound: true,
    }
  }

  const res = await axios.get<Ranking[]>(URL + `/ranking-${params?.categoria}s`)

  const ranking = res.data

  if (!ranking) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ranking: ranking,
      cat: params?.categoria,
    },
    revalidate: 1,
  }
}

export default RankingCategoria
