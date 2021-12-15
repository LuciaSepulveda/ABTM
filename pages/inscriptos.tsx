import {
  Box,
  Container,
  Table,
  Text,
  Tbody,
  Td,
  Th,
  Tr,
  Thead,
  VStack,
  Spinner,
  Button,
  Center,
} from "@chakra-ui/react"
import React from "react"
import {GetStaticProps} from "next"
import {motion} from "framer-motion"
import {inscripcion} from "@prisma/client"
import useSWR from "swr"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import axios from "axios"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Head from "../components/Head"
import {useChangePage, usePage} from "../context/hooks"
import {Page, Open} from "../types/types"

const MotionText = motion(Text)
const MotionTable = motion(Table)
const MotionTh = motion(Th)
const MotionThead = motion(Thead)
const MotionTd = motion(Td)
const MotionTr = motion(Tr)
const MotionButton = motion(Button)

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const URL = "https://strapi-abtm.herokuapp.com"

interface Props {
  open: Open[]
}

const Inscriptos: React.FC<Props> = ({open}) => {
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

  const generatePdf = (name: string) => {
    const doc = new jsPDF()

    autoTable(doc, {html: `#${name}`})
    doc.save(`Inscriptos-${name}.pdf`)
  }

  React.useEffect(() => {
    if (page !== Page.Inscripcion) changePage(Page.Inscripcion)
  }, [page, changePage])

  const categorias = ["SD", "Primera", "Segunda", "Tercera", "Cuarta", "Quinta"]

  const {data, error} = useSWR("/api/getInscriptos", fetcher)

  if (error) return <Spinner />

  return (
    <>
      <Head
        description="Inscriptos en el último torneo a realizarse"
        siteTitle="ABTM"
        tags="tenis de mesa, asociación, Bahía Blanca, inscriptos, torneo"
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
        <Container maxW="8xl" minH="100vh" paddingBottom={14} paddingTop={[8, null, 24]}>
          <VStack minH="100vh" overflow="hidden" p={[0, null, 2]} spacing={8}>
            <>
              {!open[0].Abierta && (
                <Center minH="50vh" w={["100%", "100%", "100%", 400, 500]}>
                  <MotionText
                    fontSize="5xl"
                    fontWeight="medium"
                    initial={{opacity: 0, y: 20}}
                    textAlign="center"
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    whileInView={{opacity: 1, y: 0}}
                  >
                    La inscripción <br />
                    se encuentra cerrada
                  </MotionText>
                </Center>
              )}
              {open[0].Abierta && (
                <>
                  {!data && <Spinner />}
                  {data && (
                    <>
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
                              Categoria {cat}
                            </MotionText>
                            <MotionTable
                              colorScheme="facebook"
                              id={cat}
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
                                  <MotionTh
                                    color="#242424"
                                    textAlign="center"
                                    variants={animationChildren}
                                  >
                                    Nombre
                                  </MotionTh>
                                  <MotionTh
                                    color="#242424"
                                    textAlign="center"
                                    variants={animationChildren}
                                  >
                                    Apellido
                                  </MotionTh>
                                  <MotionTh
                                    color="#242424"
                                    textAlign="center"
                                    variants={animationChildren}
                                  >
                                    Categoria
                                  </MotionTh>
                                </MotionTr>
                              </MotionThead>
                              <Tbody>
                                {data
                                  .filter((ins: inscripcion) => ins.categoria === cat)
                                  .map((inscripto: inscripcion) => (
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
                            <MotionButton
                              colorScheme="blue"
                              initial={{opacity: 0}}
                              transition={{duration: 0.5}}
                              variant="outline"
                              viewport={{once: true}}
                              whileInView={{opacity: 1}}
                              onClick={() => generatePdf(cat)}
                            >
                              Descargar inscriptos
                            </MotionButton>
                          </VStack>
                        ))}
                      </Box>
                    </>
                  )}
                </>
              )}
            </>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props, never> = async () => {
  const res = await axios.get<Open[]>(URL + "/inscripcions")

  const open = res.data

  return {
    props: {
      open: open,
    },
    revalidate: 60,
  }
}

export default Inscriptos
