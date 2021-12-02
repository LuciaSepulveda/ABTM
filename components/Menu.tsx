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

import {Page} from "../types/types"
import logo from "../public/logo.png"
import {usePage, useChangePage} from "../context/hooks"

const reglamentos = [
  "Anexo protocolo covid",
  "DDJJ covid",
  "Declaracion jurada",
  "Gomas aprobadas",
  "Protocolo covid",
  "Reglamento ABTM",
  "Reglamento tecnico",
  "Tribunal disciplina",
]

const categorias = ["SD", "Primera", "Segunda", "Tercera", "Cuarta", "Quinta"]

const MotionHStack = motion(HStack)
const MotionBox = motion(Box)

const MenuHeader: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const isBigScreen = useMediaQuery({query: "(min-width: 1824px)"})
  const [show, setShow] = React.useState<boolean>(false)
  const changePage = useChangePage()
  const page = usePage()

  return (
    <>
      <VStack
        bg="#3C6ECD"
        color="white"
        justify="space-between"
        spacing={0}
        w="100%"
        zIndex="sticky"
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
              <Link passHref href={"/"}>
                <MotionBox
                  as="a"
                  cursor="pointer"
                  initial={{opacity: 0, y: -20}}
                  transition={{duration: 0.5}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, y: 0}}
                  onClick={() => changePage(Page.Index)}
                >
                  <Image alt="logo abtm" src={logo} />
                </MotionBox>
              </Link>
              {isPortrait && (
                <>
                  <Box aria-label="Options" onClick={() => setShow(!show)}>
                    <HamburgerIcon />
                  </Box>
                </>
              )}
              {!isPortrait && (
                <Center h="100%" overflow="hidden">
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
                                {categorias.map((cat) => (
                                  <Link
                                    key={cat}
                                    passHref
                                    href={`/categorias/${cat.toLowerCase()}`}
                                  >
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
                                          {cat}
                                        </Text>
                                      </Center>
                                    </a>
                                  </Link>
                                ))}
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
                          {reglamentos.map((reg) => (
                            <Link key={reg} passHref href={`/reglamentos/${reg}`}>
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
                                    {reg}
                                  </Text>
                                </Center>
                              </a>
                            </Link>
                          ))}
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
                              {categorias.map((cat) => (
                                <Link key={cat} passHref href={`/categorias/${cat.toLowerCase()}`}>
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
                                        {cat}
                                      </Text>
                                    </Center>
                                  </a>
                                </Link>
                              ))}
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
                        {reglamentos.map((reg) => (
                          <Link key={reg} passHref href={`/reglamentos/${reg}`}>
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
                                  {reg}
                                </Text>
                              </Center>
                            </a>
                          </Link>
                        ))}
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
      <svg
        id="wave"
        style={{
          transform: "rotate(180deg)",
          transition: "0.3s",
          filter: "drop-shadow(0px -8px 4px #2e2e2e5e)",
          marginTop: isPortrait ? "-12px" : isBigScreen ? "-60px" : "-30px",
        }}
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50L40,43.3C80,37,160,23,240,16.7C320,10,400,10,480,23.3C560,37,640,63,720,63.3C800,63,880,37,960,35C1040,33,1120,57,1200,61.7C1280,67,1360,53,1440,53.3C1520,53,1600,67,1680,68.3C1760,70,1840,60,1920,61.7C2000,63,2080,77,2160,73.3C2240,70,2320,50,2400,36.7C2480,23,2560,17,2640,20C2720,23,2800,37,2880,45C2960,53,3040,57,3120,60C3200,63,3280,67,3360,58.3C3440,50,3520,30,3600,33.3C3680,37,3760,63,3840,71.7C3920,80,4000,70,4080,63.3C4160,57,4240,53,4320,51.7C4400,50,4480,50,4560,46.7C4640,43,4720,37,4800,38.3C4880,40,4960,50,5040,53.3C5120,57,5200,53,5280,55C5360,57,5440,63,5520,60C5600,57,5680,43,5720,36.7L5760,30L5760,100L5720,100C5680,100,5600,100,5520,100C5440,100,5360,100,5280,100C5200,100,5120,100,5040,100C4960,100,4880,100,4800,100C4720,100,4640,100,4560,100C4480,100,4400,100,4320,100C4240,100,4160,100,4080,100C4000,100,3920,100,3840,100C3760,100,3680,100,3600,100C3520,100,3440,100,3360,100C3280,100,3200,100,3120,100C3040,100,2960,100,2880,100C2800,100,2720,100,2640,100C2560,100,2480,100,2400,100C2320,100,2240,100,2160,100C2080,100,2000,100,1920,100C1840,100,1760,100,1680,100C1600,100,1520,100,1440,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"
          fill="#3C6ECD"
          style={{
            transform: "translate(0, 0px)",
            opacity: 1,
          }}
        />
      </svg>
    </>
  )
}

export default MenuHeader
