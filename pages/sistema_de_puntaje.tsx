import {Box, Container, Table, Tbody, Td, Th, Thead, Tr, Text, VStack} from "@chakra-ui/react"
import React from "react"
import {motion} from "framer-motion"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Head from "../components/Head"
import {useChangePage, usePage} from "../context/hooks"
import {sistemaDePuntaje} from "../data/data"
import {Page} from "../types/types"

const MotionText = motion(Text)
const MotionTable = motion(Table)
const MotionTh = motion(Th)
const MotionTr = motion(Tr)
const MotionTd = motion(Td)

const SistemaDePuntaje: React.FC = () => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Circuito) changePage(Page.Circuito)
  }, [page, changePage])

  const animationChildren = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "linear"}},
  }

  const animationDatos = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 0.5, ease: "linear"}},
  }

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  }

  return (
    <>
      <Head
        description="Sistema de puntaje para los torneos"
        siteTitle="ABTM"
        title="Sistema de puntaje"
      />
      <VStack
        bg="#FBFBFB"
        color="#242424"
        minHeight="100vh"
        overflow="hidden"
        spacing="0px"
        w="100%"
      >
        <Menu />
        <Container maxW="8xl" paddingBottom={10} paddingTop={[8, null, 24]}>
          <VStack minH="100vh" p={2} spacing={10}>
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
              Sistema de puntaje
            </MotionText>
            <Box
              overflowX={["scroll", "scroll", "scroll", "hidden", "hidden"]}
              overflowY="hidden"
              w={["100%", null, "80%"]}
            >
              <MotionTable
                colorScheme="facebook"
                initial={{opacity: 0, y: 20}}
                p={[0, null, 4]}
                transition={{duration: 0.5, delay: 0.1}}
                variant="striped"
                viewport={{once: true}}
                whileInView={{opacity: 1, y: 0}}
              >
                <Thead bg="#3c6fcd88">
                  <MotionTr
                    initial="hidden"
                    variants={container}
                    viewport={{once: true}}
                    whileInView="show"
                  >
                    <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                      Posicion
                    </MotionTh>
                    <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                      Quinta
                    </MotionTh>
                    <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                      Cuarta
                    </MotionTh>
                    <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                      Tercera
                    </MotionTh>
                    <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                      Segunda
                    </MotionTh>
                    <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                      Primera
                    </MotionTh>
                    <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                      SD
                    </MotionTh>
                  </MotionTr>
                </Thead>
                <Tbody>
                  {sistemaDePuntaje.map((elem) => (
                    <MotionTr
                      key={elem.posicion}
                      initial="hidden"
                      variants={container}
                      viewport={{once: true}}
                      whileInView="show"
                    >
                      <MotionTd textAlign="center" variants={animationDatos}>
                        {elem.posicion}
                      </MotionTd>
                      <MotionTd textAlign="center" variants={animationDatos}>
                        {elem.quinta}
                      </MotionTd>
                      <MotionTd textAlign="center" variants={animationDatos}>
                        {elem.cuarta}
                      </MotionTd>
                      <MotionTd textAlign="center" variants={animationDatos}>
                        {elem.tercera}
                      </MotionTd>
                      <MotionTd textAlign="center" variants={animationDatos}>
                        {elem.segunda}
                      </MotionTd>
                      <MotionTd textAlign="center" variants={animationDatos}>
                        {elem.primera}
                      </MotionTd>
                      <MotionTd textAlign="center" variants={animationDatos}>
                        {elem.SD}
                      </MotionTd>
                    </MotionTr>
                  ))}
                </Tbody>
              </MotionTable>
            </Box>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export default SistemaDePuntaje
