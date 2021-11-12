import {Box, Center, Container, Text, VStack} from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {useMediaQuery} from "react-responsive"
import {Carousel} from "@trendyol-js/react-carousel"
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"
import {motion} from "framer-motion"

import {New} from "../../types/types"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface Props {
  news: New[]
}

const MotionVStack = motion(VStack)

const News2: React.FC<Props> = ({news}) => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <Center minH="100vh" p={isPortrait ? 0 : 2} paddingTop={10} position="relative" w="100%">
      <Container maxW="8xl">
        <MotionVStack
          initial={{opacity: 0}}
          m="auto"
          spacing={24}
          transition={{duration: 0.5}}
          w={["100%", null, "100%"]}
          whileInView={{opacity: 1}}
        >
          <Text
            color="#3C6ECD"
            fontSize="6xl"
            fontWeight="bold"
            lineHeight="52px"
            textAlign="center"
            w="100%"
          >
            Noticias
          </Text>
          <Carousel
            leftArrow={
              <Center
                style={{
                  width: isPortrait ? "30px" : "50px",
                  height: "100%",
                }}
              >
                <Box
                  _hover={{backgroundColor: "#3C6ECD", color: "white"}}
                  as="button"
                  border="1px solid #3C6ECD"
                  borderRadius="12px"
                  color="#3C6ECD"
                  fontSize="16px"
                  fontWeight="bold"
                  h="30px"
                  paddingX={2}
                  paddingY={0}
                  transition="all ease-in 0.2s"
                >
                  <MdKeyboardArrowLeft />
                </Box>
              </Center>
            }
            rightArrow={
              <Center
                style={{
                  width: isPortrait ? "30px" : "50px",
                  height: "100%",
                }}
              >
                <Box
                  _hover={{backgroundColor: "#3C6ECD", color: "white"}}
                  as="button"
                  border="1px solid #3C6ECD"
                  borderRadius="12px"
                  color="#3C6ECD"
                  fontSize="16px"
                  fontWeight="bold"
                  h="30px"
                  paddingX={2}
                  paddingY={0}
                  transition="all ease-in 0.2s"
                >
                  <MdKeyboardArrowRight />
                </Box>
              </Center>
            }
            show={isPortrait ? 1 : 3}
            slide={1}
            swiping={true}
          >
            {news.map((n) => (
              <VStack
                key={n.id}
                border="2px solid #EBEAED"
                borderRadius="10px"
                h={500}
                justify="center"
                w={[300, null, 400]}
              >
                <Box h="100%" overflow="hidden" position="relative" w="100%">
                  <Box
                    _hover={{transform: "scale(1.4)"}}
                    borderTopRadius="10px"
                    h="100%"
                    overflow="hidden"
                    position="relative"
                    transition="all ease-in 0.3s"
                    w="100%"
                  >
                    <Image
                      alt={"Foto de " + n.title}
                      layout="fill"
                      objectFit="cover"
                      src={n.photo.url}
                    />
                  </Box>
                </Box>
                <Box h={14} overflowY="hidden" p={1} w="100%">
                  <Text color="rgba(21, 20, 57, 1)" fontSize="14px" ml={4} textAlign="left">
                    {n.date}
                  </Text>
                </Box>
                <Box
                  borderTop="1px solid rgba(21, 20, 57, 0.2)"
                  h={14}
                  overflowY="hidden"
                  p={0.5}
                  w="100%"
                >
                  <Text color="rgba(30, 14, 98, 1)" fontWeight="bold" m="auto" textAlign="center">
                    {n.title}
                  </Text>
                </Box>
                <Box
                  borderTop="1px solid rgba(21, 20, 57, 0.2)"
                  h={48}
                  overflowY="hidden"
                  p={0.5}
                  w="100%"
                >
                  <Text color="rgba(21, 20, 57, 0.6)" textAlign="center">
                    {n.short_description + "Hola no se que mas [poner para probnar"}
                  </Text>
                </Box>
              </VStack>
            ))}
          </Carousel>
        </MotionVStack>
      </Container>
    </Center>
  )
}

export default News2
