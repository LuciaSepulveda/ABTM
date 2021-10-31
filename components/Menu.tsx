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

import {Page} from "../types/types"
import logo from "../public/logo.png"
import {usePage, useChangePage} from "../context/hooks"

const MenuHeader: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const [show, setShow] = React.useState<boolean>(false)
  const changePage = useChangePage()
  const page = usePage()

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
              <Box as="a" cursor="pointer" onClick={() => changePage(Page.Index)}>
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
                          <Link passHref href={"/como_participar"}>
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Torneos)}>
                                Como participar
                              </Text>
                            </a>
                          </Link>
                          <Link passHref href={"/calendario"}>
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Torneos)}>
                                Calendario
                              </Text>
                            </a>
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
                          <a>
                            <Text
                              fontSize="lg"
                              fontWeight="bold"
                              letterSpacing="wide"
                              lineHeight="taller"
                            >
                              Ranking
                            </Text>
                          </a>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent _focus={{border: "none"}} w="100%">
                        <PopoverArrow />
                        <PopoverBody>
                          <Link
                            passHref
                            href={page !== "ranking" ? "/ranking/#ratingGeneral" : "#ratingGeneral"}
                          >
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Ranking)}>
                                Rating general
                              </Text>
                            </a>
                          </Link>
                          <Link
                            passHref
                            href={page !== "ranking" ? "/ranking/#categorias" : "#categorias"}
                          >
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Ranking)}>
                                Categorias
                              </Text>
                            </a>
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
                            Circuito ABTM
                          </Text>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent _focus={{border: "none"}} w="100%">
                        <PopoverArrow />
                        <PopoverBody>
                          <Link
                            passHref
                            href={
                              page !== "circuito" ? "/circuitoABTM/#autoridades" : "#autoridades"
                            }
                          >
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Circuito)}>
                                Autoridades
                              </Text>
                            </a>
                          </Link>
                          <Link
                            passHref
                            href={
                              page !== "circuito"
                                ? "/circuitoABTM/#sistemaPuntaje"
                                : "#sistemaPuntaje"
                            }
                          >
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Circuito)}>
                                Sistema de puntaje
                              </Text>
                            </a>
                          </Link>
                          <Link
                            passHref
                            href={
                              page !== "circuito"
                                ? "/circuitoABTM/#puntajeRating"
                                : "#puntajeRating"
                            }
                          >
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Circuito)}>
                                Puntaje rating
                              </Text>
                            </a>
                          </Link>
                          <Link
                            passHref
                            href={
                              page !== "circuito"
                                ? "/circuitoABTM/#categoriasRating"
                                : "#categoriasRating"
                            }
                          >
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Circuito)}>
                                Categorias rating
                              </Text>
                            </a>
                          </Link>
                          <Link
                            passHref
                            href={page !== "circuito" ? "/circuitoABTM/#dondeJugar" : "#dondeJugar"}
                          >
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Circuito)}>
                                Donde jugar
                              </Text>
                            </a>
                          </Link>
                          <Link
                            passHref
                            href={page !== "circuito" ? "/circuitoABTM/#contacto" : "#contacto"}
                          >
                            <a>
                              <Text cursor="pointer" onClick={() => changePage(Page.Circuito)}>
                                Contacto
                              </Text>
                            </a>
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
                            Tenis de mesa
                          </Text>
                        </Box>
                      </PopoverTrigger>
                      <PopoverContent _focus={{border: "none"}} w="100%">
                        <PopoverArrow />
                        <PopoverBody>
                          <a>
                            <Text>Reglamento</Text>
                          </a>
                          <a>
                            <Text>Historia</Text>
                          </a>
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
