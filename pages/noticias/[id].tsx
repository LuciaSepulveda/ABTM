import axios from "axios"
import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Box, Container, Divider, Text, VStack} from "@chakra-ui/react"
import {motion} from "framer-motion"
import React from "react"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import Head from "../../components/Head"
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

const MotionText = motion(Text)
const MotionBox = motion(Box)

const Noticia: NextPage<Props> = ({newElement}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Index) changePage(Page.Index)
  }, [page, changePage])

  return (
    <>
      <Head
        description={`${newElement[0].short_description}`}
        siteTitle="ABTM"
        title={`${newElement[0].title}`}
      />
      <VStack
        bg="#FBFBFB"
        className={styles.noticia}
        color="#242424"
        minHeight="100vh"
        overflowX="hidden"
        spacing="0px"
        w="100%"
      >
        <Menu />
        <Container maxW="8xl" minH="100vh" paddingBottom={10} paddingTop={[8, null, 24]}>
          <VStack minH="100vh" overflow="hidden" p={2} spacing={10}>
            <MotionText
              as="h2"
              fontSize={["3xl", null, "5xl"]}
              fontWeight="bold"
              initial={{opacity: 0, y: 20}}
              textAlign="center"
              transition={{duration: 0.5}}
              viewport={{once: true}}
              whileInView={{opacity: 1, y: 0}}
            >
              {newElement[0].title}
            </MotionText>
            <Divider w="90%" />
            <MotionText
              color="#242424a9"
              initial={{opacity: 0, y: 20}}
              textAlign="center"
              transition={{duration: 0.5, delay: 0.1}}
              viewport={{once: true}}
              whileInView={{opacity: 1, y: 0}}
            >
              {newElement[0].date}
            </MotionText>
            <MotionBox
              h={[300, null, 500]}
              initial={{opacity: 0, y: 20}}
              position="relative"
              transition={{duration: 0.5, delay: 0.2}}
              viewport={{once: true}}
              w={[300, null, 600]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Image
                alt={`Foto de ${newElement[0].title}`}
                layout="fill"
                objectFit="cover"
                src={newElement[0].photo.url}
              />
            </MotionBox>
            <Divider w="90%" />
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{newElement[0].description}</ReactMarkdown>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
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
    revalidate: 1,
  }
}

export default Noticia
