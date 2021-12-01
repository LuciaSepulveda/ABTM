import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Box, Container, Divider, Text, VStack} from "@chakra-ui/react"
import {motion} from "framer-motion"
import React from "react"
import Image from "next/image"
import {PrismaClient, articulos} from "@prisma/client"
import ReactHtmlParse from "react-html-parser"

import Menu from "../../components/Menu"
import Footer from "../../components/Footer"
import Head from "../../components/Head"
import {Page} from "../../types/types"
import {useChangePage, usePage} from "../../context/hooks"
import styles from "../../css/noticias.module.scss"

interface Props {
  newElement: articulos[]
}

interface Params extends Record<string, any> {
  id: string
}

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
        description={`${newElement[0].resumen}`}
        siteTitle="ABTM"
        title={`${newElement[0].titulo}`}
      />
      <VStack
        bg="#FBFBFB"
        color="#242424"
        minHeight="100vh"
        overflowX="hidden"
        spacing="0px"
        w="100%"
      >
        <Menu />
        <Container
          className={styles.noticia}
          maxW="8xl"
          minH="100vh"
          paddingBottom={[20, null, 10]}
          paddingTop={[8, null, 24]}
        >
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
              {newElement[0].titulo}
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
              {newElement[0].fecha?.toString().substring(0, 10)}
            </MotionText>
            {newElement[0].url_imagen && (
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
                  alt={`Foto de ${newElement[0].titulo}`}
                  blurDataURL={`${newElement[0].url_imagen}`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src={newElement[0].url_imagen}
                />
              </MotionBox>
            )}
            <Divider w="90%" />
            {newElement[0].contenido && (
              <Box overflowX={["scroll", "scroll", null, "hidden"]} w="100%">
                {ReactHtmlParse(newElement[0].contenido)}
              </Box>
            )}
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const prisma = new PrismaClient()
  const news: articulos[] = await prisma.articulos.findMany()

  return {
    paths: news.map((n) => ({
      params: {
        id: JSON.parse(JSON.stringify(n.id.toString())),
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

  const prisma = new PrismaClient()

  if (!isNaN(parseInt(params?.id))) {
    const res: articulos[] = await prisma.articulos.findMany({
      where: {
        id: parseInt(params?.id),
      },
    })

    const newElement = JSON.parse(
      JSON.stringify(res, (key, value) => (typeof value === "bigint" ? value.toString() : value)),
    )

    if (!res || !newElement) {
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
  } else {
    return {
      notFound: true,
    }
  }
}

export default Noticia
