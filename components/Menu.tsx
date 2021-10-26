import Image from "next/image"
import Link from "next/link"
import {
  Box,
  Center,
  Container,
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
import {Fade} from "react-awesome-reveal"

import logo from "../public/logo.png"

const MenuHeader: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const [show, setShow] = React.useState<boolean>(false)

  return (
    <VStack bg="#3C6ECD" color="white" justify="space-between" w="100%" zIndex="sticky">
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
            <Link passHref href={"/"}>
              <Box cursor="pointer">
                <Image alt="logo abtm" src={logo} />
              </Box>
            </Link>
            {isPortrait && (
              <Menu onClose={() => setShow(false)} onOpen={() => setShow(true)}>
                <MenuButton aria-label="Options">
                  <HamburgerIcon />
                </MenuButton>
              </Menu>
            )}
            {!isPortrait && (
              <Center h="100%">
                <Fade direction="down">
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
                          <Link passHref href={"#comoParticipar"}>
                            <Text>Como participar</Text>
                          </Link>
                          <Link passHref href={"#calendario"}>
                            <Text>Calendario</Text>
                          </Link>
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
                            Inscripción
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
                </Fade>
              </Center>
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
                <Text>Inscripción</Text>
              </Box>
            </motion.div>
          )}
        </Stack>
      </Container>
    </VStack>
  )
}

export default MenuHeader