import {Box, Center, Container, Grid, GridItem, Heading, VStack} from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import {motion} from "framer-motion"
import {useMediaQuery} from "react-responsive"

import {Photo} from "../../types/types"

interface Props {
  photos: Photo[]
}

const MotionVStack = motion(VStack)
const MotionCenter = motion(Center)

const Photos: React.FC<Props> = ({photos}) => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <Box minH="100vh" paddingTop={[40, null, 20]} w="100%">
      <Container maxW="8xl" minH="100vh">
        <MotionVStack
          initial={{opacity: 0}}
          m="auto"
          spacing={8}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          w={["100%", null, "86%"]}
          whileInView={{opacity: 1}}
        >
          <Heading
            as="h2"
            color="#3C6ECD"
            fontSize="6xl"
            fontWeight="bold"
            lineHeight="52px"
            mb={20}
            textAlign="center"
            w="100%"
          >
            Fotos recientes
          </Heading>
          <Grid
            gap={[2, null, 4]}
            h="100%"
            m="auto"
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", null, "repeat(3, 1fr)"]}
            w="100%"
          >
            {photos.map((photo, i) => (
              <GridItem key={photo.id}>
                <MotionCenter
                  borderRadius="10px"
                  h={300}
                  initial={{opacity: 0, y: 50}}
                  m="auto"
                  overflow="hidden"
                  position="relative"
                  transition={{duration: 0.8, delay: i * 0.12}}
                  viewport={{once: true}}
                  w="100%"
                  whileInView={{opacity: 1, y: !isPortrait ? i * 15 : 0}}
                >
                  <Image
                    alt=""
                    blurDataURL={`${photo.photo.formats.small.url}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    src={photo.photo.url}
                  />
                </MotionCenter>
              </GridItem>
            ))}
          </Grid>
        </MotionVStack>
      </Container>
    </Box>
  )
}

export default Photos
