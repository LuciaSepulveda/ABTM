import {
  Box,
  Center,
  Container,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react"
import {NextPage} from "next"
import Image from "next/image"
import React from "react"
import {Fade, Bounce} from "react-awesome-reveal"

import styles from "../css/torneos.module.scss"
import Menu from "../components/Menu"
import {Calendar} from "../types/types"
import foto from "../public/cuarto2021.jpeg"

const calendar: Calendar[] = [
  {
    title: "Torneo preparatorio",
    date: "20 de marzo 2021",
    description:
      "Lugar: Polideportivo Municipal Vieytes 2700 Horario: desde las 9hs. Categorías: SD, 1ra, 2da, 3ra, 4ta",
    photo: "http://abtm.ar/assets/images/torneo1.jpg",
  },
  {
    title: "Torneo preparatorio",
    date: "20 de marzo 2021",
    description:
      "Lugar: Polideportivo Municipal Vieytes 2700 Horario: desde las 9hs. Categorías: SD, 1ra, 2da, 3ra, 4ta",
    photo: "http://abtm.ar/assets/images/torneo1.jpg",
  },
  {
    title: "Torneo preparatorio",
    date: "20 de marzo 2021",
    description:
      "Lugar: Polideportivo Municipal Vieytes 2700 Horario: desde las 9hs. Categorías: SD, 1ra, 2da, 3ra, 4ta",
    photo: "http://abtm.ar/assets/images/torneo1.jpg",
  },
]

const Torneos: NextPage = () => {
  return (
    <VStack
      bg="#FBFBFB"
      color="#242424"
      minHeight="100vh"
      overflowX="hidden"
      spacing="0px"
      w="100%"
    >
      <Box
        position="absolute"
        style={{filter: "drop-shadow(0px 5px 2px #2c4c88)"}}
        top="80px"
        w="100%"
      >
        <svg
          id="wave"
          style={{
            transform: "rotate(180deg)",
            transition: "0.3s",
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
      </Box>
      <Menu />
      <Container maxW="8xl">
        <Fade>
          <VStack
            id="comoParticipar"
            justify="space-evenly"
            minH="100vh"
            mt={[20, 40, null, 40]}
            spacing={[10, null, 20]}
          >
            <Text as="h2" color="#2c4c88" fontSize="6xl">
              ¿Cómo participar?
            </Text>
            <Stack
              alignContent="center"
              alignItems="center"
              bg="#89D6AE"
              direction={["column", "row", null, "row"]}
              h={[400, 240, null, 200]}
              justify="center"
              m="auto"
              p={2}
              w={["100%", null, "90%"]}
            >
              <HStack
                alignContent="center"
                alignItems="center"
                justify="start"
                w={["100%", "40%", null, "40%"]}
              >
                <Center
                  border="2px solid black"
                  borderRadius="50%"
                  color="black"
                  fontSize={["2xl", null, "3xl"]}
                  h={[10, 8, null, 10]}
                  w={10}
                >
                  1
                </Center>
                <Text fontSize={["2xl", null, "4xl"]} fontWeight="bold" m="auto" textAlign="center">
                  ¿Quiénes pueden jugar?
                </Text>
              </HStack>
              <Text
                fontSize={["md", null, "lg"]}
                textAlign="center"
                w={["100%", "50%", null, "50%"]}
              >
                En los torneos pueden participar jugadores desde el nivel inicial (que nunca jugaron
                un torneo y/o que sólo juegan en su casa o con amigos) hasta jugadores federados.
                Por supuesto, cada uno en su categoría correspondiente. No importa si sos hombre o
                mujer o si tenés 6 años o 90 años... Todos pueden participar!
              </Text>
            </Stack>
            <Stack
              alignContent="center"
              alignItems="center"
              bg="#89D6AE"
              direction={["column", "row", null, "row"]}
              h={[350, 240, null, 200]}
              justify="center"
              m="auto"
              p={2}
              w={["100%", null, "90%"]}
            >
              <HStack
                alignContent="center"
                alignItems="center"
                justify="start"
                w={["100%", "40%", null, "40%"]}
              >
                <Center
                  border="2px solid black"
                  borderRadius="50%"
                  color="black"
                  fontSize={["2xl", null, "3xl"]}
                  h={[10, 8, null, 10]}
                  w={10}
                >
                  2
                </Center>
                <Text fontSize={["2xl", null, "4xl"]} fontWeight="bold" m="auto" textAlign="center">
                  ¿Cómo me inscribo?
                </Text>
              </HStack>
              <Text
                fontSize={["md", null, "lg"]}
                textAlign="center"
                w={["100%", "50%", null, "50%"]}
              >
                El horario de cierre de inscripciones a los torneos para todas las categorías
                puntables, está especificado en el mail de invitación que les llega previo a cada
                torneo o en los afiches publicados en la Web y redes sociales. La inscripción se
                realiza de manera ONLINE únicamente en nuestra web
              </Text>
            </Stack>
            <Stack
              alignContent="center"
              alignItems="center"
              bg="#89D6AE"
              direction={["column", "row", null, "row"]}
              h={[280, 240, null, 200]}
              justify="center"
              m="auto"
              p={2}
              w={["100%", null, "90%"]}
            >
              <HStack
                alignContent="center"
                alignItems="center"
                justify="start"
                w={["100%", "40%", null, "40%"]}
              >
                <Center
                  border="2px solid black"
                  borderRadius="50%"
                  color="black"
                  fontSize={["2xl", null, "3xl"]}
                  h={[10, 8, null, 10]}
                  w={10}
                >
                  3
                </Center>
                <Text fontSize={["2xl", null, "4xl"]} fontWeight="bold" m="auto" textAlign="center">
                  ¿En qué categoría juego?
                </Text>
              </HStack>
              <Text
                fontSize={["md", null, "lg"]}
                textAlign="center"
                w={["100%", "50%", null, "50%"]}
              >
                Si no estas ranqueado, en el primer torneo en el que participes tenemos que decidir
                cual es la categoría en la que podés jugar.
              </Text>
            </Stack>
          </VStack>
        </Fade>
        <VStack
          id="calendario"
          minH="100vh"
          mt={20}
          overflow="hidden"
          p={2}
          paddingBottom={10}
          paddingTop={20}
        >
          <Text as="h2" className={styles.textCalendario} fontSize="6xl" fontWeight="bold">
            Calendario
          </Text>
          <Box className={styles.timeline}>
            <UnorderedList>
              {calendar.map((elem) => {
                return (
                  <ListItem
                    key={elem.title}
                    _after={{
                      content: '""',
                      position: "absolute",
                      left: "50%",
                      bottom: 0,
                      transform: "translateX(-50%)",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "inherit",
                    }}
                    backgroundColor="#242424"
                    color="white"
                    margin="0 auto"
                    paddingTop="50px"
                    position="relative"
                    style={{listStyleType: "none"}}
                    w="6px"
                  >
                    <Bounce delay={100}>
                      <VStack
                        _before={{
                          content: '""',
                          position: "absolute",
                          bottom: "7px",
                          width: 0,
                          height: 0,
                          borderStyle: "solid",
                        }}
                        alignContent="center"
                        background="#FF725E"
                        bottom={0}
                        boxShadow="xl"
                        h={400}
                        padding="15px"
                        position="relative"
                        width={["250px", "250px", null, "400px"]}
                      >
                        <Text fontSize="md">{elem.date}</Text>
                        <Text fontSize="xl" fontWeight="bold">
                          {elem.title}
                        </Text>
                        <Box
                          className={styles.imagen}
                          h={200}
                          overflow="hidden"
                          position="relative"
                          w="100%"
                        >
                          <Image
                            alt={elem.title}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            src={foto}
                          />
                        </Box>
                        <Text fontSize="md">{elem.description}</Text>
                      </VStack>
                    </Bounce>
                  </ListItem>
                )
              })}
            </UnorderedList>
          </Box>
        </VStack>
      </Container>
    </VStack>
  )
}

export default Torneos
