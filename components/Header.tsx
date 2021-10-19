import Image from "next/image"
import {
  Box,
  Container,
  Heading,
  HStack,
  Menu,
  MenuButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import {useMediaQuery} from "react-responsive"
import {HamburgerIcon} from "@chakra-ui/icons"
import {motion} from "framer-motion"
import React from "react"
import * as Scroll from "react-scroll"

import tt from "../public/Tabletennis.png"
import logo from "../public/logo.png"

const Header: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const [show, setShow] = React.useState<boolean>(false)

  const goTo = () => {
    Scroll.scroller.scrollTo("elemento1", {
      duration: 1500,
      delay: 50,
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
      <Container maxW="8xl">
        <Stack
          direction={show ? "column" : "row"}
          justify="space-between"
          mt={1}
          px={0}
          py={4}
          w="100%"
        >
          <HStack justify="space-between" w="100%">
            <Image alt="logo abtm" src={logo} />
            {isPortrait && (
              <Menu onClose={() => setShow(false)} onOpen={() => setShow(true)}>
                <MenuButton aria-label="Options">
                  <HamburgerIcon />
                </MenuButton>
              </Menu>
            )}
            {!isPortrait && (
              <motion.div
                animate={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -10}}
                style={{
                  height: "100%",
                }}
                transition={{duration: 0.5}}
              >
                <HStack h="100%" m="auto">
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{backgroundColor: "#315caa"}}
                        as="button"
                        borderRadius="md"
                        px={[0, 1, 2, 4]}
                      >
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          letterSpacing="wide"
                          lineHeight="taller"
                        >
                          Torneos
                        </Text>
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent _focus={{border: "none"}} w="100%">
                      <PopoverArrow />
                      <PopoverBody>
                        <Text>Como participar</Text>
                        <Text>Calendario</Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{backgroundColor: "#315caa"}}
                        as="button"
                        borderRadius="md"
                        px={[0, 1, 2, 4]}
                      >
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          letterSpacing="wide"
                          lineHeight="taller"
                        >
                          Ranking
                        </Text>
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent _focus={{border: "none"}} w="100%">
                      <PopoverArrow />
                      <PopoverBody>
                        <Text>Rating general</Text>
                        <Text>Categorias</Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{backgroundColor: "#315caa"}}
                        as="button"
                        borderRadius="md"
                        px={[0, 1, 2, 4]}
                      >
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          letterSpacing="wide"
                          lineHeight="taller"
                        >
                          Circuito ABTM
                        </Text>
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent _focus={{border: "none"}} w="100%">
                      <PopoverArrow />
                      <PopoverBody>
                        <Text>Autoridades</Text>
                        <Text>Sistema de puntaje</Text>
                        <Text>Puntaje rating</Text>
                        <Text>Categorias rating</Text>
                        <Text>Donde jugar</Text>
                        <Text>Contacto</Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{backgroundColor: "#315caa"}}
                        as="button"
                        borderRadius="md"
                        px={[0, 1, 2, 4]}
                      >
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          letterSpacing="wide"
                          lineHeight="taller"
                        >
                          Tenis de mesa
                        </Text>
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent _focus={{border: "none"}} w="100%">
                      <PopoverArrow />
                      <PopoverBody>
                        <Text>Reglamento</Text>
                        <Text>Historia</Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{backgroundColor: "#315caa"}}
                        as="button"
                        borderRadius="md"
                        px={[0, 1, 2, 4]}
                      >
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          letterSpacing="wide"
                          lineHeight="taller"
                        >
                          Reglamentos
                        </Text>
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent _focus={{border: "none"}} w="100%">
                      <PopoverArrow />
                      <PopoverBody>
                        <Text>Gomas aprobadas</Text>
                        <Text>Declaracion jurada</Text>
                        <Text>Protocola covid</Text>
                        <Text>Anexo protocolo covid</Text>
                        <Text>DDJJ Covid</Text>
                        <Text>Reglamento tecnico</Text>
                        <Text>Tribunal disciplina</Text>
                        <Text>Reglamento ABTM</Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{backgroundColor: "#315caa"}}
                        as="button"
                        borderRadius="md"
                        px={[0, 1, 2, 4]}
                      >
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          letterSpacing="wide"
                          lineHeight="taller"
                        >
                          Inscripcion
                        </Text>
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent _focus={{border: "none"}} w="100%">
                      <PopoverArrow />
                      <PopoverBody>
                        <Text>Inscribirse</Text>
                        <Text>Ver inscriptos</Text>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </HStack>
              </motion.div>
            )}
          </HStack>
          {show && isPortrait && (
            <motion.div
              animate={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: -10}}
              transition={{duration: 0.5}}
            >
              <Box bg="blue.200" color="white">
                <Text>Torneos</Text>
                <Text>Ranking</Text>
                <Text>Circuito ABTM</Text>
                <Text>Tenis de mesa</Text>
                <Text>Reglamentos</Text>
                <Text>Inscripcion</Text>
              </Box>
            </motion.div>
          )}
        </Stack>
      </Container>
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
          <Heading
            as="h1"
            color="white"
            fontSize={["4xl", "4xl", null, "5xl"]}
            py={[4, null, 0]}
            textAlign="center"
            w={["100%", null, "40%"]}
          >
            Asociacion Bahiense {!isPortrait && <br />} de Tenis de Mesa
          </Heading>
          <Box align="center" w={["100%", null, "60%"]}>
            <Image alt="gif" height={480} src={tt} width={980} />
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
