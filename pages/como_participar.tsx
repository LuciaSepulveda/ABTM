import {Center, Container, Stack, Text, VStack} from "@chakra-ui/react"
import React from "react"
import {motion} from "framer-motion"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Head from "../components/Head"
import {useChangePage, usePage} from "../context/hooks"
import {Page} from "../types/types"

const MotionStack = motion(Stack)
const MotionText = motion(Text)

interface Card {
  num: number
  title: string
  description: string
}

const cards: Card[] = [
  {
    num: 1,
    title: "¿Quiénes pueden jugar?",
    description: `En los torneos pueden participar jugadores desde el nivel inicial (que nunca jugaron
                un torneo y/o que sólo juegan en su casa o con amigos) hasta jugadores federados.
                Por supuesto, cada uno en su categoría correspondiente. No importa si sos hombre o
                mujer o si tenés 6 años o 90 años... Todos pueden participar!`,
  },
  {
    num: 2,
    title: "¿Cómo me inscribo?",
    description: `El horario de cierre de inscripciones a los torneos para todas las categorías
                puntables, está especificado en el mail de invitación que les llega previo a cada
                torneo o en los afiches publicados en la Web y redes sociales. La inscripción se
                realiza de manera ONLINE únicamente en nuestra web`,
  },
  {
    num: 3,
    title: "¿En qué categoría juego?",
    description: `Si no estas ranqueado, en el primer torneo en el que participes tenemos que decidir
                cual es la categoría en la que podés jugar.`,
  },
]

const ComoParticipar: React.FC = () => {
  const changePage = useChangePage()
  const page = usePage()

  const animationChildren = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0, transition: {duration: 0.5}},
  }

  const container = {
    hidden: {opacity: 0, y: 20},
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  }

  React.useEffect(() => {
    if (page !== Page.Torneos) changePage(Page.Torneos)
  }, [page, changePage])

  return (
    <>
      <Head
        description="Cómo participar en los torneos"
        siteTitle="ABTM"
        tags="tenis de mesa, asociación, Bahía Blanca, torneo"
        title="Cómo participar"
      />
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
            <MotionText
              as="h2"
              fontSize="6xl"
              fontWeight="bold"
              initial={{opacity: 0, y: 20}}
              textAlign="center"
              transition={{duration: 0.5}}
              viewport={{once: true}}
              whileInView={{opacity: 1, y: 0}}
            >
              ¿Cómo participar?
            </MotionText>
            {cards.map((card) => (
              <MotionStack
                key={card.num}
                alignContent="center"
                alignItems="center"
                bg="#89D6AE"
                borderRadius="10px"
                direction={["column", "row", null, "row"]}
                h={[400, 240, null, 200]}
                initial="hidden"
                justify="center"
                m="auto"
                p={2}
                variants={container}
                viewport={{once: true}}
                w={["100%", null, "90%"]}
                whileInView="show"
              >
                <MotionStack
                  alignContent="center"
                  alignItems="center"
                  direction={["column", null, "row"]}
                  justify="start"
                  variants={animationChildren}
                  viewport={{once: true}}
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
                    {card.num}
                  </Center>
                  <Text
                    fontSize={["2xl", null, "4xl"]}
                    fontWeight="bold"
                    m="auto"
                    textAlign="center"
                  >
                    {card.title}
                  </Text>
                </MotionStack>
                <MotionText
                  fontSize={["md", null, "lg"]}
                  textAlign="center"
                  variants={animationChildren}
                  viewport={{once: true}}
                  w={["100%", "50%", null, "50%"]}
                >
                  {card.description}
                </MotionText>
              </MotionStack>
            ))}
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export default ComoParticipar
