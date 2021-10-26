import Image from "next/image"
import {Box, Center, Container, Heading, HStack, Stack, VStack} from "@chakra-ui/react"
import {useMediaQuery} from "react-responsive"
import {motion} from "framer-motion"
import React from "react"
import * as Scroll from "react-scroll"
import {Fade} from "react-awesome-reveal"

import MenuHeader from "../Menu"
import tt from "../../public/Tabletennis.png"

const Header: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  const goTo = () => {
    Scroll.scroller.scrollTo("elemento1", {
      duration: 1100,
      delay: 40,
      smooth: true,
    })
  }

  return (
    <VStack
      as="header"
      bg="#3C6ECD"
      color="white"
      justify="space-between"
      minHeight="100vh"
      overflow="hidden"
      w="100%"
    >
      <MenuHeader />
      <Container maxW="8xl">
        <Stack
          align="center"
          direction={["column", "column", "row"]}
          justify="space-evenly"
          m="auto"
          p={2}
          paddingBottom={[10, null, 40]}
          paddingTop={[0, null, 24]}
        >
          <Center m="auto" textAlign="center" w={["100%", null, "40%"]}>
            <Fade direction={isPortrait ? "down" : "up"}>
              <Heading
                as="h1"
                color="white"
                fontSize={["4xl", "4xl", null, "5xl"]}
                py={[4, null, 0]}
                textAlign="center"
                w="100%"
              >
                Asociación Bahiense {!isPortrait && <br />} de Tenis de Mesa
              </Heading>
            </Fade>
          </Center>
          <Box align="center" w={["100%", null, "60%"]}>
            <Fade direction={isPortrait ? "up" : "down"}>
              <Image priority alt="Tenis de mesa" height={480} src={tt} width={980} />
            </Fade>
          </Box>
        </Stack>
      </Container>
      <motion.div
        animate={{y: [0, 30, 0]}}
        initial={{y: 0}}
        style={{height: "50px"}}
        transition={{duration: 1, repeat: Infinity, repeatDelay: 2}}
      >
        <HStack as="button" mt={["-30px", null, "-60px"]} onClick={() => goTo()}>
          <Box
            bg="white"
            borderRadius="md"
            h={["30px", null, "46px"]}
            mr={["-1px", null, "8px"]}
            style={{transform: "rotateZ(-45deg)"}}
            w="10px"
          />
          <Box
            bg="white"
            borderRadius="md"
            h={["30px", null, "46px"]}
            style={{transform: "rotateZ(45deg)"}}
            w="10px"
          />
        </HStack>
      </motion.div>
    </VStack>
  )
}

export default Header
