import axios from "axios"
import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Container, Table, Tbody, Td, Text, Th, Thead, Tr, VStack} from "@chakra-ui/react"
import React from "react"

import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import {Ranking} from "../../types/types"

interface Props {
  ranking: Ranking[]
  cat: string | undefined
}

interface Params extends Record<string, any> {
  categoria: string
}

const URL = "https://strapi-abtm.herokuapp.com"

const rankingCategoria: NextPage<Props, Params> = ({ranking, cat}, {categoria}) => {
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
          <Text as="h2" fontSize="6xl" fontWeight="bold">
            Ranking {cat}
          </Text>
          <Table colorScheme="facebook" paddingTop={30} variant="simple">
            <Thead bg="#3c6fcd88">
              <Tr>
                <Th textAlign="center">Posicion</Th>
                <Th textAlign="center">Jugador</Th>
                <Th textAlign="center">Puntos</Th>
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
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
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
  }
}

export default rankingCategoria
