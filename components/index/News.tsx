import {Box, Center, Container, Text, VStack} from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {useMediaQuery} from "react-responsive"
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {New} from "../../types/types"

interface Props {
  news: New[]
}

const News: React.FC<Props> = ({news}) => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <VStack minH="100vh" p={isPortrait ? 0 : 2} paddingTop={10} w="100%">
      <Container h="100%" maxW="8xl">
        <VStack m="auto" mb={20} spacing={24} w="100%">
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
        </VStack>
        <Slider
          dots
          infinite
          nextArrow={
            isPortrait ? (
              <Text>{`<`}</Text>
            ) : (
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
            )
          }
          prevArrow={
            isPortrait ? (
              <Text>{`<`}</Text>
            ) : (
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
            )
          }
          slidesToScroll={1}
          slidesToShow={isPortrait ? 1 : 3}
          speed={500}
        >
          {news.map((n) => (
            <Box key={n.id} p={4}>
              <VStack
                border="2px solid #EBEAED"
                borderRadius="10px"
                h={500}
                justify="center"
                spacing={0}
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
                  <Text color="rgba(21, 20, 57, 1)" fontSize="14px" ml={4} textAlign="left">
                    {n.date}
                  </Text>
                </Box>
                <Box
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
                </Box>
                <Box
                  borderTop="1px solid rgba(21, 20, 57, 0.2)"
                  h={48}
                  overflowY="hidden"
                  p={0.5}
                  w="100%"
                >
                  <Text color="rgba(21, 20, 57, 0.6)" textAlign="center">
                    {n.short_description}
                  </Text>
                </Box>
              </VStack>
            </Box>
          ))}
        </Slider>
      </Container>
    </VStack>
  )
}

export default News
