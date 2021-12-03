import {Box, Container, Table, Text, Tbody, Td, Th, Tr, Thead, VStack} from "@chakra-ui/react"
import React from "react"
import {motion} from "framer-motion"
import {PrismaClient, inscripcion} from "@prisma/client"
import {GetServerSideProps} from "next"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Head from "../components/Head"
import {useChangePage, usePage} from "../context/hooks"
import {Page} from "../types/types"

interface Props {
  inscriptos: inscripcion[]
}

const MotionText = motion(Text)
const MotionTable = motion(Table)
const MotionTh = motion(Th)
const MotionThead = motion(Thead)
const MotionTd = motion(Td)
const MotionTr = motion(Tr)

const Inscriptos: React.FC<Props> = ({inscriptos}) => {
  const changePage = useChangePage()
  const page = usePage()

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
        ease: "linear",
      },
    },
  }

  const categorias = ["SD", "Primera", "Segunda", "Tercera", "Cuarta", "Quinta"]

  React.useEffect(() => {
    if (page !== Page.Inscripcion) changePage(Page.Inscripcion)
  }, [page, changePage])

  return (
    <>
      <Head
        description="Inscriptos en el último torneo a realizarse"
        siteTitle="ABTM"
        title="Inscriptos"
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
          <VStack minH="100vh" overflow="hidden" p={[0, null, 2]} spacing={8}>
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
              Inscriptos
            </MotionText>
            <Box
              overflowX={["scroll", null, "hidden"]}
              overflowY="hidden"
              w={["100%", "90%", null, "80%"]}
            >
              {categorias.map((cat) => (
                <VStack key={cat} my={14} spacing={14} w="100%">
                  <MotionText
                    as="h3"
                    fontSize="3xl"
                    fontWeight="bold"
                    initial={{opacity: 0, y: 20}}
                    textAlign="left"
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    w="100%"
                    whileInView={{opacity: 1, y: 0}}
                  >
                    Ranking {cat}
                  </MotionText>
                  <MotionTable
                    colorScheme="facebook"
                    initial={{opacity: 0, y: 20}}
                    p={[0, null, 4]}
                    transition={{duration: 0.5}}
                    variant="striped"
                    viewport={{once: true}}
                    whileInView={{opacity: 1, y: 0}}
                  >
                    <MotionThead bg="#3c6fcd88">
                      <MotionTr
                        initial="hidden"
                        variants={container}
                        viewport={{once: true}}
                        whileInView="show"
                      >
                        <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                          Nombre
                        </MotionTh>
                        <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                          Apellido
                        </MotionTh>
                        <MotionTh color="#242424" textAlign="center" variants={animationChildren}>
                          Categoria
                        </MotionTh>
                      </MotionTr>
                    </MotionThead>
                    <Tbody>
                      {inscriptos
                        .filter((ins) => ins.categoria === cat)
                        .map((inscripto) => (
                          <MotionTr
                            key={inscripto.id.toString()}
                            initial="hidden"
                            variants={container}
                            viewport={{once: true}}
                            whileInView="show"
                          >
                            <MotionTd textAlign="center" variants={animationDatos}>
                              {inscripto.nombre}
                            </MotionTd>
                            <MotionTd textAlign="center" variants={animationDatos}>
                              {inscripto.apellido}
                            </MotionTd>
                            <MotionTd textAlign="center" variants={animationDatos}>
                              {inscripto.categoria}
                            </MotionTd>
                          </MotionTr>
                        ))}
                    </Tbody>
                  </MotionTable>
                </VStack>
              ))}
            </Box>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props, never> = async () => {
  const prisma = new PrismaClient()
  const res = await prisma.inscripcion.findMany()

  if (!res) {
    return {
      notFound: true,
    }
  }

  const inscriptos = JSON.parse(
    JSON.stringify(res, (key, value) => (typeof value === "bigint" ? value.toString() : value)),
  )

  return {
    props: {
      inscriptos: inscriptos,
    },
  }
}

export default Inscriptos
