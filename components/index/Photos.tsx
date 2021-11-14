import {Box, Center, Container, Grid, GridItem, Heading, VStack} from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import {motion} from "framer-motion"

import {Photo} from "../../types/types"

interface Props {
  photos: Photo[]
}

const MotionVStack = motion(VStack)

const Photos: React.FC<Props> = ({photos}) => {
  return (
    <Box minH="100vh" paddingTop={[40, null, 20]} w="100%">
      <Container h="100%" maxW="8xl">
        <MotionVStack
          initial={{opacity: 0}}
          m="auto"
          spacing={8}
          transition={{duration: 0.5}}
          viewport={{once: true}}
          w={["100%", null, "86%"]}
          whileInView={{opacity: 1}}
        >
          <Heading as="h2" color="#3C6ECD" fontSize="4xl" m="auto" p={4} textAlign="center">
            Fotos recientes
          </Heading>
          <Grid
            gap={[2, null, 4]}
            h="100%"
            m="auto"
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            w="100%"
          >
            {photos.map((photo) => (
              <GridItem key={photo.id}>
                <Center
                  borderRadius="10px"
                  h={300}
                  m="auto"
                  overflow="hidden"
                  position="relative"
                  transition="all ease-in 0.3s"
                  w="100%"
                >
                  <Image
                    alt=""
                    blurDataURL={`${photo.photo.url}`}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    src={photo.photo.url}
                  />
                </Center>
              </GridItem>
            ))}
          </Grid>
        </MotionVStack>
      </Container>
    </Box>
  )
}

export default Photos
