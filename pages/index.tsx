import type {GetStaticProps, NextPage} from "next"
import {VStack} from "@chakra-ui/react"
import React from "react"
import axios from "axios"
import Head from "next/head"

import Header from "../components/index/Header"
import About from "../components/index/About"
import Footer from "../components/Footer"
import Photos from "../components/index/Photos"
import Motivation from "../components/index/Motivation"
import {New, Photo, Page} from "../types/types"
import News from "../components/index/News"
import {useChangePage, usePage} from "../context/hooks"

interface Props {
  news: New[]
  photos: Photo[]
}

const Home: NextPage<Props> = ({news, photos}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Index) changePage(Page.Index)
  }, [page, changePage])

  return (
    <>
      <Head>
        <title>ABTM</title>
        <meta content="Página web de la Asociación Bahiense de Tenis de Mesa" name="description" />
        <meta content="website" property="og:type" />
        <meta content="Asociación Bahiense de Tenis de Mesa" property="og:title" />
        <meta
          content="Página web de la Asociación Bahiense de Tenis de Mesa"
          property="og:description"
        />
        <meta content="ABTM" property="og:site_name" />
      </Head>
      <VStack bg="#FBFBFB" minHeight="100vh" overflowX="hidden" spacing="0px" w="100%">
        <Header />
        <About />
        <News news={news} />
        <Motivation />
        <Photos photos={photos} />
        <Footer />
      </VStack>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props, never> = async () => {
  const res = await axios.get<New[]>("https://strapi-abtm.herokuapp.com/noticias")
  const res1 = await axios.get<Photo[]>("https://strapi-abtm.herokuapp.com/fotos")

  const news = res.data
  const photos = res1.data

  if (!news) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      news: news,
      photos: photos,
    },
    revalidate: 1,
  }
}

export default Home
