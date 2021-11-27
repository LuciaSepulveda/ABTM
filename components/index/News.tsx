import {Box, Center, Container, Text, VStack} from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {motion} from "framer-motion"
import {useMediaQuery} from "react-responsive"
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {New} from "../../types/types"

const MotionVStack = motion(VStack)
const MotionText = motion(Text)

interface Props {
  news: New[]
}

const News: React.FC<Props> = ({news}) => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <VStack minH="100vh" p={isPortrait ? 0 : 2} paddingTop={10} w="100%">
      <Container h="100%" maxW={news.length < 3 && !isPortrait ? "container.md" : "8xl"}>
        <VStack m="auto" mb={20} spacing={24} w="100%">
          <MotionText
            color="#3C6ECD"
            fontSize="6xl"
            fontWeight="bold"
            initial={{opacity: 0}}
            lineHeight="52px"
            textAlign="center"
            transition={{duration: 0.5, delay: 0.1}}
            viewport={{once: true}}
            w="100%"
            whileInView={{opacity: 1}}
          >
            Noticias
          </MotionText>
        </VStack>
        <Slider
          dots
          infinite={false}
          nextArrow={
            <Center
              p={2}
              style={{
                width: isPortrait ? "100%" : "50px",
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
                marginLeft={["-28px", null, "-24px"]}
                paddingX={2}
                paddingY={0}
                transition="all ease-in 0.2s"
              >
                <MdKeyboardArrowRight />
              </Box>
            </Center>
          }
          prevArrow={
            <Center
              p={1}
              style={{
                width: isPortrait ? "100%" : "50px",
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
          slidesToScroll={1}
          slidesToShow={isPortrait ? 1 : news.length >= 3 ? 3 : news.length === 2 ? 2 : 1}
          speed={500}
        >
          {news
            .sort((a, b) => b.id - a.id)
            .map((n) => (
              <Box key={n.id} p={4}>
                <MotionVStack
                  border="2px solid #EBEAED"
                  borderRadius="10px"
                  h={500}
                  initial={{opacity: 0, y: 30}}
                  justify="center"
                  m="auto"
                  spacing={0}
                  transition={{duration: 0.5, delay: 0.1}}
                  w="100%"
                  whileInView={{opacity: 1, y: 0}}
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
                        blurDataURL={`${n.photo.formats.small.url}`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        src={n.photo.url}
                      />
                    </Box>
                  </Box>
                  <Box h={14} overflowY="hidden" p={1} w="100%">
                    <Text
                      color="rgba(21, 20, 57, 1)"
                      fontSize="14px"
                      h="100%"
                      ml={4}
                      textAlign="left"
                    >
                      {n.date}
                    </Text>
                  </Box>
                  <Center
                    borderTop="1px solid rgba(21, 20, 57, 0.2)"
                    h={[20, null, 14]}
                    overflowY="hidden"
                    p={0.5}
                    w="100%"
                  >
                    <Link passHref href={`/noticias/${n.id}`}>
                      <a>
                        <Text
                          _hover={{color: "#3C6ECD"}}
                          color="rgba(30, 14, 98, 1)"
                          fontWeight="bold"
                          m="auto"
                          textAlign="center"
                          textDecoration="underline rgba(30, 14, 98, 1)"
                        >
                          {n.title}
                        </Text>
                      </a>
                    </Link>
                  </Center>
                  <Center
                    borderTop="1px solid rgba(21, 20, 57, 0.2)"
                    h={48}
                    overflowY="hidden"
                    p={0.5}
                    w="100%"
                  >
                    <Text color="rgba(21, 20, 57, 0.6)" textAlign="center">
                      {n.short_description}
                    </Text>
                  </Center>
                </MotionVStack>
              </Box>
            ))}
          {news.length === 0 && (
            <Text fontSize="5xl" fontWeight="medium" mt={24} textAlign="center" w="100%">
              Aún no hay noticias para mostrar
            </Text>
          )}
        </Slider>
      </Container>
    </VStack>
  )
}

export default News
