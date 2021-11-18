import axios from "axios"
import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Container, Table, Tbody, Td, Text, Th, Thead, Tr, VStack} from "@chakra-ui/react"
import React from "react"

import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
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

const RankingCategoria: NextPage<Props> = ({ranking, cat}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Ranking) changePage(Page.Ranking)
  }, [page, changePage])

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
      <Container maxW="8xl" paddingBottom={10} paddingTop={[8, null, 24]}>
        <VStack minH="100vh" p={2} spacing={10} w="100%">
          <Text as="h2" fontSize="6xl" fontWeight="bold" textAlign="center">
            Ranking {cat}
          </Text>
          <Table colorScheme="facebook" paddingTop={30} variant="simple">
            <Thead bg="#3c6fcd88">
              <Tr>
                <Th color="#242424" textAlign="center">
                  Posicion
                </Th>
                <Th color="#242424" textAlign="center">
                  Jugador
                </Th>
                <Th color="#242424" textAlign="center">
                  Puntos
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {ranking.map((elem) => (
                <Tr key={elem.id}>
                  <Td textAlign="center">{elem.position}</Td>
                  <Td textAlign="center">{elem.name}</Td>
                  <Td textAlign="center">{elem.points}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>
      </Container>
      <Footer />
    </VStack>
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
    revalidate: 60,
  }
}

export default RankingCategoria
