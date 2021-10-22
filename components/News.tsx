import {Box, Center, Container, Grid, GridItem, HStack, Text, VStack} from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {useMediaQuery} from "react-responsive"
import Slider from "react-slick"
import {Fade} from "react-awesome-reveal"

import {New} from "../types/types"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const news: New[] = [
  {
    title: "Cuarta fecha del circuito anual ABTM 2021",
    date: "Fecha 2021",
    description:
      "La ABTM te invita a participar de la cuarta fecha del circuito anual, a realizarse en el polideportivo norte, el proximo",
    photo: "http://abtm.ar/images/articulos/cuarto2021.jpeg",
  },
  {
    title: "Tercera fecha del circuito anual ABTM 2021",
    date: "Fecha 2021",
    description:
      "La ABTM te invita a participar de la cuarta fecha del circuito anual, a realizarse en el polideportivo norte, el proximo",
    photo: "http://abtm.ar/images/articulos/cuarto2021.jpeg",
  },
  {
    title: "Segunda fecha del circuito anual ABTM 2021",
    date: "Fecha 2021",
    description:
      "La ABTM te invita a participar de la cuarta fecha del circuito anual, a realizarse en el polideportivo norte, el proximo",
    photo: "http://abtm.ar/images/articulos/cuarto2021.jpeg",
  },
  {
    title: "Primera fecha del circuito anual ABTM 2021",
    date: "Fecha 2021",
    description:
      "La ABTM te invita a participar de la cuarta fecha del circuito anual, a realizarse en el polideportivo norte, el proximo",
    photo: "http://abtm.ar/images/articulos/cuarto2021.jpeg",
  },
  {
    title: "Suspencion fecha del circuito anual ABTM 2021",
    date: "Fecha 2021",
    description:
      "La ABTM te invita a participar de la cuarta fecha del circuito anual, a realizarse en el polideportivo norte, el proximo",
    photo: "http://abtm.ar/images/articulos/cuarto2021.jpeg",
  },
  {
    title: "Cuarta fecha del circuito anual ABTM 2021",
    date: "Fecha 2021",
    description:
      "La ABTM te invita a participar de la cuarta fecha del circuito anual, a realizarse en el polideportivo norte, el proximo",
    photo: "http://abtm.ar/images/articulos/cuarto2021.jpeg",
  },
]
const News: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <Box minH="100vh" p={isPortrait ? 0 : 2} paddingTop={10} position="relative" w="100%">
      <Container maxW="8xl">
        <Fade>
          <Grid
            gap={[2, null, 6]}
            m="auto"
            templateColumns="repeat(3, 1fr)"
            w={["100%", null, "80%"]}
          >
            <GridItem colSpan={3} w="90%">
              <Text color="#3C6ECD" fontSize="6xl" fontWeight="bold">
                Noticias
              </Text>
            </GridItem>
            <GridItem colSpan={3} p={2}>
              <HStack justify="space-between" zIndex={1}>
                <Center
                  borderRadius="2xl"
                  height={[240, 260, null, 340]}
                  overflow="hidden"
                  position="relative"
                  w="70%"
                >
                  <Image
                    alt=""
                    blurDataURL={news[0].photo}
                    height="100%"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    src={news[0].photo}
                  />
                </Center>
                <VStack
                  height={[240, 260, null, 340]}
                  justify="space-between"
                  overflowY="hidden"
                  w="60%"
                  zIndex={1}
                >
                  <Text align="left" color="#AEB0B4" fontSize={["md", null, "lg"]} w="100%">
                    Fecha 2021
                  </Text>
                  <Text
                    as="h2"
                    color="#242424"
                    fontSize={["xl", "2xl", "3xl", null, "5xl"]}
                    fontWeight="bold"
                    textAlign="left"
                    w="100%"
                  >
                    Cuarta fecha del <br /> circuito anual ABTM 2021
                  </Text>
                  <Text color="#808080" fontSize="md" overflow="hidden" textAlign="left" w="100%">
                    La ABTM te invita a participar de la cuarta fecha del circuito anual, a
                    realizarse en el polideportivo norte, el proximo 2 de Octubre a las 9:00 hs.
                  </Text>
                </VStack>
              </HStack>
            </GridItem>
            <GridItem colSpan={3} p={2}>
              <Slider
                accessibility
                infinite
                slidesToScroll={isPortrait ? 1 : 3}
                slidesToShow={isPortrait ? 2 : 3}
                speed={500}
              >
                {news
                  .filter((elem) => elem.title !== news[0].title)
                  .map((e) => (
                    <VStack key={e.title} justify="space-around" paddingX={2} paddingY={10}>
                      <Center
                        borderRadius="2xl"
                        height={[180, null, 300]}
                        overflow="hidden"
                        position="relative"
                        w="100%"
                      >
                        <Image
                          alt={e.title}
                          blurDataURL={e.photo}
                          height="100%"
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          placeholder="blur"
                          src={e.photo}
                        />
                      </Center>
                      <Text color="#AEB0B4" fontSize={["md", null, "lg"]} w="100%">
                        {e.date}
                      </Text>
                      <Text
                        color="#121416"
                        fontSize={["xl", null, "2xl"]}
                        fontWeight="bold"
                        w="100%"
                      >
                        {e.title}
                      </Text>
                      <Text color="#808080" h="30px" overflowY="hidden" w="100%">
                        {e.description}
                      </Text>
                    </VStack>
                  ))}
              </Slider>
            </GridItem>
          </Grid>
        </Fade>
      </Container>
    </Box>
  )
}

export default News
