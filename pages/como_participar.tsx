import {Center, Container, HStack, Stack, Text, VStack} from "@chakra-ui/react"
import React from "react"
import {motion} from "framer-motion"

import Footer from "../components/Footer"
import Menu from "../components/Menu"

const MotionStack = motion(Stack)

const ComoParticipar: React.FC = () => {
  return (
    <VStack
      bg="#FBFBFB"
      color="#242424"
      minHeight="100vh"
      overflowX="hidden"
      spacing="0px"
      w="100%"
    >
      <Menu />
      <Container maxW="8xl" minH="100vh" paddingBottom={10} paddingTop={[8, null, 24]}>
        <VStack justify="space-evenly" minH="100vh" spacing={[10, null, 20]}>
          <Text as="h2" fontSize="6xl" fontWeight="bold">
            ¿Cómo participar?
          </Text>
          <MotionStack
            alignContent="center"
            alignItems="center"
            bg="#89D6AE"
            direction={["column", "row", null, "row"]}
            h={[400, 240, null, 200]}
            initial={{opacity: 0}}
            justify="center"
            m="auto"
            p={2}
            transition={{duration: 0.5}}
            w={["100%", null, "90%"]}
            whileInView={{opacity: 1}}
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
            <Text fontSize={["md", null, "lg"]} textAlign="center" w={["100%", "50%", null, "50%"]}>
              En los torneos pueden participar jugadores desde el nivel inicial (que nunca jugaron
              un torneo y/o que sólo juegan en su casa o con amigos) hasta jugadores federados. Por
              supuesto, cada uno en su categoría correspondiente. No importa si sos hombre o mujer o
              si tenés 6 años o 90 años... Todos pueden participar!
            </Text>
          </MotionStack>
          <MotionStack
            alignContent="center"
            alignItems="center"
            bg="#89D6AE"
            direction={["column", "row", null, "row"]}
            h={[400, 240, null, 200]}
            initial={{opacity: 0}}
            justify="center"
            m="auto"
            p={2}
            transition={{duration: 0.5}}
            w={["100%", null, "90%"]}
            whileInView={{opacity: 1}}
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
            <Text fontSize={["md", null, "lg"]} textAlign="center" w={["100%", "50%", null, "50%"]}>
              El horario de cierre de inscripciones a los torneos para todas las categorías
              puntables, está especificado en el mail de invitación que les llega previo a cada
              torneo o en los afiches publicados en la Web y redes sociales. La inscripción se
              realiza de manera ONLINE únicamente en nuestra web
            </Text>
          </MotionStack>
          <MotionStack
            alignContent="center"
            alignItems="center"
            bg="#89D6AE"
            direction={["column", "row", null, "row"]}
            h={[400, 240, null, 200]}
            initial={{opacity: 0}}
            justify="center"
            m="auto"
            p={2}
            transition={{duration: 0.5}}
            w={["100%", null, "90%"]}
            whileInView={{opacity: 1}}
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
            <Text fontSize={["md", null, "lg"]} textAlign="center" w={["100%", "50%", null, "50%"]}>
              Si no estas ranqueado, en el primer torneo en el que participes tenemos que decidir
              cual es la categoría en la que podés jugar.
            </Text>
          </MotionStack>
        </VStack>
      </Container>
      <Footer />
    </VStack>
  )
}

export default ComoParticipar
