import {Box, Center, Container, Grid, GridItem, Heading, VStack} from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import {Fade} from "react-awesome-reveal"
import {useMediaQuery} from "react-responsive"

import foto from "../../public/cuarto2021.jpeg"

const Photos: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <Box minH="100vh" paddingTop={[40, null, 20]} w="100%">
      <Container h="100%" maxW="8xl">
        <VStack spacing={8} w="100%">
          <Fade style={{width: isPortrait ? "100%" : "86%"}}>
            <Heading as="h2" color="#3C6ECD" fontSize="4xl" m="auto" p={4} textAlign="center">
              Fotos recientes
            </Heading>
            <Grid
              gap={[2, null, 4]}
              h="100%"
              m="auto"
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(8, 1fr)",
                "repeat(8, 1fr)",
                "repeat(8, 1fr)",
              ]}
              w="100%"
            >
              <GridItem colSpan={[1, 1, 4, 4, 4]} rowSpan={[1, 1, 4, 4, 4]}>
                <Center
                  h={[300, 300, 400, 480, 560]}
                  m="auto"
                  overflow="hidden"
                  position="relative"
                  w="100%"
                >
                  <Image
                    alt=""
                    blurDataURL={`${foto}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    src={foto}
                  />
                </Center>
              </GridItem>
              <GridItem colSpan={[1, null, 2]} rowSpan={[1, null, 2]}>
                <Center
                  h={[300, 300, "100%", "100%", "100%"]}
                  overflow="hidden"
                  position="relative"
                  w="100%"
                >
                  <Image
                    alt=""
                    blurDataURL={`${foto}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    src={foto}
                  />
                </Center>
              </GridItem>
              <GridItem colSpan={[1, null, 2]} rowSpan={[1, null, 2]}>
                <Center
                  h={[300, 300, "100%", "100%", "100%"]}
                  overflow="hidden"
                  position="relative"
                  w="100%"
                >
                  <Image
                    alt=""
                    blurDataURL={`${foto}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    src={foto}
                  />
                </Center>
              </GridItem>
              <GridItem colSpan={[1, null, 2]} rowSpan={[1, null, 2]}>
                <Center
                  h={[300, 300, "100%", "100%", "100%"]}
                  overflow="hidden"
                  position="relative"
                  w="100%"
                >
                  <Image
                    alt=""
                    blurDataURL={`${foto}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    src={foto}
                  />
                </Center>
              </GridItem>
              <GridItem colSpan={[1, null, 2]} rowSpan={[1, null, 2]}>
                <Center
                  h={[300, 300, "100%", "100%", "100%"]}
                  overflow="hidden"
                  position="relative"
                  w="100%"
                >
                  <Image
                    alt=""
                    blurDataURL={`${foto}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    src={foto}
                  />
                </Center>
              </GridItem>
            </Grid>
          </Fade>
        </VStack>
      </Container>
    </Box>
  )
}

export default Photos
