import Image from "next/image"
import Link from "next/link"
import {
  Box,
  Center,
  Container,
  HStack,
  AccordionIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
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

import {Page} from "../../types/types"
import logo from "../../public/logo.png"
import {usePage, useChangePage} from "../../context/hooks"

const MotionHStack = motion(HStack)

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
              <>
                <Box aria-label="Options" onClick={() => setShow(!show)}>
                  <HamburgerIcon />
                </Box>
              </>
            )}
            {!isPortrait && (
              <Center h="100%">
                <MotionHStack
                  h="100%"
                  initial={{y: -20, opacity: 0}}
                  m="auto"
                  transition={{duration: 0.5}}
                  viewport={{once: true}}
                  whileInView={{y: 0, opacity: 1}}
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{
                          backgroundColor: page === Page.Torneos ? "#0b3177" : "#315caa",
                        }}
                        as="button"
                        bg={page === Page.Torneos ? "#315caa" : "transparent"}
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
                    <PopoverContent _focus={{border: "none"}} bg="#315caa" w="100%">
                      <PopoverArrow bg="#315caa" />
                      <PopoverBody bg="#315caa" borderRadius="xl" p={2}>
                        <Link passHref href={"/como_participar"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                cursor="pointer"
                                fontSize="lg"
                                w="100%"
                                onClick={() => changePage(Page.Torneos)}
                              >
                                Como participar
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/calendario"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Torneos)}
                              >
                                Calendario
                              </Text>
                            </Center>
                          </a>
                        </Link>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{
                          backgroundColor: page === Page.Ranking ? "#0b3177" : "#315caa",
                        }}
                        as="button"
                        bg={page === Page.Ranking ? "#315caa" : "transparent"}
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
                    <PopoverContent _focus={{border: "none"}} bg="#315caa" w="100%">
                      <PopoverArrow bg="#315caa" />
                      <PopoverBody>
                        <Link passHref href="/rating">
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Ranking)}
                              >
                                Rating general
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Popover placement="right">
                          <PopoverTrigger>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                w="100%"
                              >
                                Categorias
                              </Text>
                            </Center>
                          </PopoverTrigger>
                          <PopoverContent _focus={{border: "none"}} bg="#315caa" w="100%">
                            <PopoverArrow bg="#315caa" />
                            <PopoverBody>
                              <Link passHref href={"/categorias/sd"}>
                                <a>
                                  <Center
                                    _hover={{
                                      backgroundColor: "#5586e0",
                                    }}
                                    borderRadius="lg"
                                    h={10}
                                    p={2}
                                  >
                                    <Text
                                      alignItems="center"
                                      cursor="pointer"
                                      fontSize="lg"
                                      textAlign="center"
                                      onClick={() => changePage(Page.Ranking)}
                                    >
                                      SD
                                    </Text>
                                  </Center>
                                </a>
                              </Link>
                              <Link passHref href={"/categorias/primera"}>
                                <a>
                                  <Center
                                    _hover={{
                                      backgroundColor: "#5586e0",
                                    }}
                                    borderRadius="lg"
                                    h={10}
                                    p={2}
                                  >
                                    <Text
                                      alignItems="center"
                                      cursor="pointer"
                                      fontSize="lg"
                                      textAlign="center"
                                      onClick={() => changePage(Page.Ranking)}
                                    >
                                      Primera
                                    </Text>
                                  </Center>
                                </a>
                              </Link>
                              <Link passHref href={"/categorias/segunda"}>
                                <a>
                                  <Center
                                    _hover={{
                                      backgroundColor: "#5586e0",
                                    }}
                                    borderRadius="lg"
                                    h={10}
                                    p={2}
                                  >
                                    <Text
                                      alignItems="center"
                                      cursor="pointer"
                                      fontSize="lg"
                                      textAlign="center"
                                      onClick={() => changePage(Page.Ranking)}
                                    >
                                      Segunda
                                    </Text>
                                  </Center>
                                </a>
                              </Link>
                              <Link passHref href={"/categorias/tercera"}>
                                <a>
                                  <Center
                                    _hover={{
                                      backgroundColor: "#5586e0",
                                    }}
                                    borderRadius="lg"
                                    h={10}
                                    p={2}
                                  >
                                    <Text
                                      alignItems="center"
                                      cursor="pointer"
                                      fontSize="lg"
                                      textAlign="center"
                                      onClick={() => changePage(Page.Ranking)}
                                    >
                                      Tercera
                                    </Text>
                                  </Center>
                                </a>
                              </Link>
                              <Link passHref href={"/categorias/cuarta"}>
                                <a>
                                  <Center
                                    _hover={{
                                      backgroundColor: "#5586e0",
                                    }}
                                    borderRadius="lg"
                                    h={10}
                                    p={2}
                                  >
                                    <Text
                                      alignItems="center"
                                      cursor="pointer"
                                      fontSize="lg"
                                      textAlign="center"
                                      onClick={() => changePage(Page.Ranking)}
                                    >
                                      Cuarta
                                    </Text>
                                  </Center>
                                </a>
                              </Link>
                              <Link passHref href={"/categorias/quinta"}>
                                <a>
                                  <Center
                                    _hover={{
                                      backgroundColor: "#5586e0",
                                    }}
                                    borderRadius="lg"
                                    h={10}
                                    p={2}
                                  >
                                    <Text
                                      alignItems="center"
                                      cursor="pointer"
                                      fontSize="lg"
                                      textAlign="center"
                                      onClick={() => changePage(Page.Ranking)}
                                    >
                                      Quinta
                                    </Text>
                                  </Center>
                                </a>
                              </Link>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{
                          backgroundColor: page === Page.Circuito ? "#0b3177" : "#315caa",
                        }}
                        as="button"
                        bg={page === Page.Circuito ? "#315caa" : "transparent"}
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
                    <PopoverContent _focus={{border: "none"}} bg="#315caa" w="100%">
                      <PopoverArrow bg="#315caa" />
                      <PopoverBody>
                        <Link passHref href="/autoridades">
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Circuito)}
                              >
                                Autoridades
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href="/sistema_de_puntaje">
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Circuito)}
                              >
                                Sistema de puntaje
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href="/puntaje_rating">
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Circuito)}
                              >
                                Puntaje rating
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href="/categorias_rating">
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Circuito)}
                              >
                                Categorias rating
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href="/donde_jugar">
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Circuito)}
                              >
                                Dónde jugar
                              </Text>
                            </Center>
                          </a>
                        </Link>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{
                          backgroundColor: page === Page.TenisDeMesa ? "#0b3177" : "#315caa",
                        }}
                        as="button"
                        bg={page === Page.TenisDeMesa ? "#315caa" : "transparent"}
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
                    <PopoverContent _focus={{border: "none"}} bg="#315caa" w="100%">
                      <PopoverArrow bg="#315caa" />
                      <PopoverBody>
                        <Link passHref href={"/historia"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.TenisDeMesa)}
                              >
                                Historia
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/reglamento"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.TenisDeMesa)}
                              >
                                Reglamento
                              </Text>
                            </Center>
                          </a>
                        </Link>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{
                          backgroundColor: page === Page.Reglamentos ? "#0b3177" : "#315caa",
                        }}
                        as="button"
                        bg={page === Page.Reglamentos ? "#315caa" : "transparent"}
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
                    <PopoverContent _focus={{border: "none"}} bg="#315caa" w="100%">
                      <PopoverArrow bg="#315caa" />
                      <PopoverBody bg="#315caa" borderRadius="xl" p={2}>
                        <Link passHref href={"/reglamentos/Gomas aprobadas"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Reglamentos)}
                              >
                                Gomas aprobadas
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/reglamentos/Declaracion jurada"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Reglamentos)}
                              >
                                Declaración jurada
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/reglamentos/Protocolo covid"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Reglamentos)}
                              >
                                Protocolo covid
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/reglamentos/Anexo protocolo covid"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Reglamentos)}
                              >
                                Anexo protocolo covid
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/reglamentos/DDJJ covid"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Reglamentos)}
                              >
                                DDJJ Covid
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/reglamentos/Reglamento tecnico"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Reglamentos)}
                              >
                                Reglamento técnico
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/reglamentos/Tribunal disciplina"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Reglamentos)}
                              >
                                Tribunal disciplina
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/reglamentos/Reglamento ABTM"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Reglamentos)}
                              >
                                Reglamento ABTM
                              </Text>
                            </Center>
                          </a>
                        </Link>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={{
                          backgroundColor: page === Page.Inscripcion ? "#0b3177" : "#315caa",
                        }}
                        as="button"
                        bg={page === Page.Inscripcion ? "#315caa" : "transparent"}
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
                    <PopoverContent _focus={{border: "none"}} bg="#315caa" w="100%">
                      <PopoverArrow bg="#315caa" />
                      <PopoverBody>
                        <Link passHref href={"/inscribirse"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Inscripcion)}
                              >
                                Inscribirse
                              </Text>
                            </Center>
                          </a>
                        </Link>
                        <Link passHref href={"/inscriptos"}>
                          <a>
                            <Center
                              _hover={{
                                backgroundColor: "#5586e0",
                              }}
                              borderRadius="lg"
                              h={10}
                              p={2}
                            >
                              <Text
                                alignItems="center"
                                cursor="pointer"
                                fontSize="lg"
                                textAlign="center"
                                onClick={() => changePage(Page.Inscripcion)}
                              >
                                Ver inscriptos
                              </Text>
                            </Center>
                          </a>
                        </Link>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </MotionHStack>
              </Center>
            )}
          </HStack>
          {show && isPortrait && (
            <motion.div
              animate={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: -10}}
              transition={{duration: 0.5}}
            >
              <Box bg="#3C6ECD" color="white">
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton _expanded={{backgroundColor: "#5586e0"}}>
                      <HStack justify="space-between" w="100%">
                        <Text fontSize="lg">Torneos</Text>
                        <AccordionIcon />
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel>
                      <Link passHref href={"/como_participar"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Torneos), setShow(false)
                              }}
                            >
                              Como participar
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/calendario"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Torneos), setShow(false)
                              }}
                            >
                              Calendario
                            </Text>
                          </Center>
                        </a>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton _expanded={{backgroundColor: "#5586e0"}}>
                      <HStack justify="space-between" w="100%">
                        <Text fontSize="lg">Ranking</Text>
                        <AccordionIcon />
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel>
                      <Link passHref href={"/rating"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Ranking), setShow(false)
                              }}
                            >
                              Rating general
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Accordion allowToggle>
                        <AccordionItem>
                          <AccordionButton _expanded={{backgroundColor: "#5586e0"}}>
                            <HStack justify="space-between" w="100%">
                              <Text fontSize="lg">Categorias</Text>
                              <AccordionIcon />
                            </HStack>
                          </AccordionButton>
                          <AccordionPanel>
                            <Link passHref href={"/categorias/sd"}>
                              <a>
                                <Center
                                  _hover={{
                                    backgroundColor: "#5586e0",
                                  }}
                                  borderRadius="lg"
                                  h={10}
                                  p={2}
                                >
                                  <Text
                                    cursor="pointer"
                                    fontSize="lg"
                                    w="100%"
                                    onClick={() => {
                                      changePage(Page.Ranking), setShow(false)
                                    }}
                                  >
                                    SD
                                  </Text>
                                </Center>
                              </a>
                            </Link>
                            <Link passHref href={"/categorias/primera"}>
                              <a>
                                <Center
                                  _hover={{
                                    backgroundColor: "#5586e0",
                                  }}
                                  borderRadius="lg"
                                  h={10}
                                  p={2}
                                >
                                  <Text
                                    cursor="pointer"
                                    fontSize="lg"
                                    w="100%"
                                    onClick={() => {
                                      changePage(Page.Ranking), setShow(false)
                                    }}
                                  >
                                    Primera
                                  </Text>
                                </Center>
                              </a>
                            </Link>
                            <Link passHref href={"/categorias/segunda"}>
                              <a>
                                <Center
                                  _hover={{
                                    backgroundColor: "#5586e0",
                                  }}
                                  borderRadius="lg"
                                  h={10}
                                  p={2}
                                >
                                  <Text
                                    cursor="pointer"
                                    fontSize="lg"
                                    w="100%"
                                    onClick={() => {
                                      changePage(Page.Ranking), setShow(false)
                                    }}
                                  >
                                    Segunda
                                  </Text>
                                </Center>
                              </a>
                            </Link>
                            <Link passHref href={"/categorias/tercera"}>
                              <a>
                                <Center
                                  _hover={{
                                    backgroundColor: "#5586e0",
                                  }}
                                  borderRadius="lg"
                                  h={10}
                                  p={2}
                                >
                                  <Text
                                    cursor="pointer"
                                    fontSize="lg"
                                    w="100%"
                                    onClick={() => {
                                      changePage(Page.Ranking), setShow(false)
                                    }}
                                  >
                                    Tercera
                                  </Text>
                                </Center>
                              </a>
                            </Link>
                            <Link passHref href={"/categorias/cuarta"}>
                              <a>
                                <Center
                                  _hover={{
                                    backgroundColor: "#5586e0",
                                  }}
                                  borderRadius="lg"
                                  h={10}
                                  p={2}
                                >
                                  <Text
                                    cursor="pointer"
                                    fontSize="lg"
                                    w="100%"
                                    onClick={() => {
                                      changePage(Page.Ranking), setShow(false)
                                    }}
                                  >
                                    Cuarta
                                  </Text>
                                </Center>
                              </a>
                            </Link>
                            <Link passHref href={"/categorias/quinta"}>
                              <a>
                                <Center
                                  _hover={{
                                    backgroundColor: "#5586e0",
                                  }}
                                  borderRadius="lg"
                                  h={10}
                                  p={2}
                                >
                                  <Text
                                    cursor="pointer"
                                    fontSize="lg"
                                    w="100%"
                                    onClick={() => {
                                      changePage(Page.Ranking), setShow(false)
                                    }}
                                  >
                                    Quinta
                                  </Text>
                                </Center>
                              </a>
                            </Link>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton _expanded={{backgroundColor: "#5586e0"}}>
                      <HStack justify="space-between" w="100%">
                        <Text fontSize="lg">Circuito ABTM</Text>
                        <AccordionIcon />
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel>
                      <Link passHref href={"/autoridades"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Circuito), setShow(false)
                              }}
                            >
                              Autoridades
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/sistema_de_puntaje"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Circuito), setShow(false)
                              }}
                            >
                              Sistema de puntaje
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/puntaje_rating"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Circuito), setShow(false)
                              }}
                            >
                              Puntaje rating
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/categorias_rating"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Circuito), setShow(false)
                              }}
                            >
                              Categorias rating
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/donde_jugar"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Circuito), setShow(false)
                              }}
                            >
                              Donde jugar
                            </Text>
                          </Center>
                        </a>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton _expanded={{backgroundColor: "#5586e0"}}>
                      <HStack justify="space-between" w="100%">
                        <Text fontSize="lg">Tenis de mesa</Text>
                        <AccordionIcon />
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel>
                      <Link passHref href={"/historia"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.TenisDeMesa), setShow(false)
                              }}
                            >
                              Historia
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/reglamento"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.TenisDeMesa), setShow(false)
                              }}
                            >
                              Reglamento
                            </Text>
                          </Center>
                        </a>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton _expanded={{backgroundColor: "#5586e0"}}>
                      <HStack justify="space-between" w="100%">
                        <Text fontSize="lg">Reglamentos</Text>
                        <AccordionIcon />
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel>
                      <Link passHref href={"/reglamentos/Gomas aprobadas"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Reglamentos), setShow(false)
                              }}
                            >
                              Gomas aprobadas
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/reglamentos/Declaracion jurada"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Reglamentos), setShow(false)
                              }}
                            >
                              Calendario
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/reglamentos/Protocolo covid"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Reglamentos), setShow(false)
                              }}
                            >
                              Protocolo covid
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/reglamentos/Anexo protocolo covid"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Reglamentos), setShow(false)
                              }}
                            >
                              Anexo protocolo covid
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/reglamentos/DDJJ covid"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Reglamentos), setShow(false)
                              }}
                            >
                              DDJJ covid
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/reglamentos/Reglamento tecnico"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Reglamentos), setShow(false)
                              }}
                            >
                              Reglamento técnico
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/reglamentos/Tribunal disciplina"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Reglamentos), setShow(false)
                              }}
                            >
                              Tribunal disciplina
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/reglamentos/Reglamento ABTM"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Reglamentos), setShow(false)
                              }}
                            >
                              Reglamento ABTM
                            </Text>
                          </Center>
                        </a>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton _expanded={{backgroundColor: "#5586e0"}}>
                      <HStack justify="space-between" w="100%">
                        <Text fontSize="lg">Inscripción</Text>
                        <AccordionIcon />
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel>
                      <Link passHref href={"/inscribirse"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Inscripcion), setShow(false)
                              }}
                            >
                              Inscribirse
                            </Text>
                          </Center>
                        </a>
                      </Link>
                      <Link passHref href={"/inscriptos"}>
                        <a>
                          <Center
                            _hover={{
                              backgroundColor: "#5586e0",
                            }}
                            borderRadius="lg"
                            h={10}
                            p={2}
                          >
                            <Text
                              cursor="pointer"
                              fontSize="lg"
                              w="100%"
                              onClick={() => {
                                changePage(Page.Inscripcion), setShow(false)
                              }}
                            >
                              Inscriptos
                            </Text>
                          </Center>
                        </a>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </motion.div>
          )}
        </Stack>
      </Container>
    </VStack>
  )
}

export default MenuHeader
