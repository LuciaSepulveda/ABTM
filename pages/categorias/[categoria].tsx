import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Container, Table, Tbody, Td, Text, Th, Thead, Tr, VStack} from "@chakra-ui/react"
import React from "react"
import {motion} from "framer-motion"
import {
  PrismaClient,
  ranking_sd,
  ranking_primera,
  ranking_segunda,
  ranking_tercera,
  ranking_cuarta,
  ranking_quinta,
} from "@prisma/client"

import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import Head from "../../components/Head"
import {Page} from "../../types/types"
import {useChangePage, usePage} from "../../context/hooks"

interface Props {
  ranking:
    | ranking_sd[]
    | ranking_primera[]
    | ranking_segunda[]
    | ranking_tercera[]
    | ranking_cuarta[]
    | ranking_quinta[]
  cat: string | undefined
}

interface Params extends Record<string, any> {
  categoria: string
}

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
    show: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "linear"}},
  }

  const animationDatos = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 0.5, ease: "linear"}},
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
              variant="striped"
              viewport={{once: true}}
              whileInView={{opacity: 1, y: 0}}
            >
              <Thead bg="#3c6fcd88">
                <MotionTr
                  initial="hidden"
                  variants={container}
                  viewport={{once: true}}
                  whileInView="show"
                >
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
                    key={elem.id.toString()}
                    initial="hidden"
                    variants={container}
                    viewport={{once: true}}
                    whileInView="show"
                  >
                    <MotionTd textAlign="center" variants={animationDatos}>
                      {elem.posicion}
                    </MotionTd>
                    <MotionTd textAlign="center" variants={animationDatos}>
                      {elem.jugador}
                    </MotionTd>
                    <MotionTd textAlign="center" variants={animationDatos}>
                      {elem.puntos}
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
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  if (!params?.categoria) {
    return {
      notFound: true,
    }
  }

  const prisma = new PrismaClient()
  let res

  switch (params.categoria) {
    case "sd":
      res = await prisma.ranking_sd.findMany()
      break
    case "primera":
      res = await prisma.ranking_primera.findMany()
      break
    case "segunda":
      res = await prisma.ranking_segunda.findMany()
      break
    case "tercera":
      res = await prisma.ranking_tercera.findMany()
      break
    case "cuarta":
      res = await prisma.ranking_cuarta.findMany()
      break
    case "quinta":
      res = await prisma.ranking_quinta.findMany()
      break
    default:
      break
  }

  if (!res) {
    return {
      notFound: true,
    }
  }

  const ranking = JSON.parse(
    JSON.stringify(res, (key, value) => (typeof value === "bigint" ? value.toString() : value)),
  )
  //const res = await axios.get<Ranking[]>(URL + `/ranking-${params?.categoria}s`)

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
