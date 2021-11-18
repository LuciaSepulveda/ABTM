import axios from "axios"
import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Box, Container, Divider, Text, VStack} from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import Linkify from "linkify-react"

import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import {New, Page} from "../../types/types"
import {useChangePage, usePage} from "../../context/hooks"
import styles from "../../css/noticias.module.scss"

interface Props {
  newElement: New[]
}

interface Params extends Record<string, any> {
  id: string
}

const URL = "https://strapi-abtm.herokuapp.com"

const Noticia: NextPage<Props> = ({newElement}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Index) changePage(Page.Index)
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
      <Container maxW="8xl" minH="100vh" paddingBottom={10} paddingTop={[8, null, 24]}>
        <VStack minH="100vh" overflow="hidden" p={2} spacing={10}>
          <Text as="h2" fontSize={["3xl", null, "5xl"]} fontWeight="bold" textAlign="center">
            {newElement[0].title}
          </Text>
          <Divider w="90%" />
          <Text color="#242424a9">{newElement[0].date}</Text>
          <Box h={[300, null, 500]} position="relative" w={[300, null, 600]}>
            <Image
              alt={`Foto de ${newElement[0].title}`}
              layout="fill"
              objectFit="cover"
              src={newElement[0].photo.url}
            />
          </Box>
          <Divider w="90%" />
          <Text
            className={styles.link}
            fontWeight="semibold"
            m="auto"
            w="90%"
            whiteSpace="pre-wrap"
          >
            <Linkify className={styles.link}>{newElement[0].description}</Linkify>
          </Text>
        </VStack>
      </Container>
      <Footer />
    </VStack>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await axios.get(URL + "/noticias")
  const news: New[] = res.data

  return {
    paths: news.map((n) => ({
      params: {
        id: n.id.toString(),
      },
    })),
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  if (!params?.id) {
    return {
      notFound: true,
    }
  }

  const res = await axios.get<New[]>(URL + `/noticias?id=${params?.id}`)

  const newElement = res.data

  if (!newElement) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      newElement: newElement,
    },
    revalidate: 60,
  }
}

export default Noticia
