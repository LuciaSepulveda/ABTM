import {Box, Container, Table, Text, Tbody, Td, Th, Thead, VStack, Spinner} from "@chakra-ui/react"
import axios from "axios"
import React from "react"
import {motion} from "framer-motion"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Head from "../components/Head"
import {useChangePage, usePage} from "../context/hooks"
import {Inscripto, Page} from "../types/types"

const MotionText = motion(Text)
const MotionTable = motion(Table)
const MotionTh = motion(Th)
const MotionThead = motion(Thead)
const MotionTd = motion(Td)
const MotionTbody = motion(Tbody)

const Inscriptos: React.FC = () => {
  const [status, setStatus] = React.useState<boolean>(false)
  const [inscriptos, setInscriptos] = React.useState<Inscripto[]>([])
  const changePage = useChangePage()
  const page = usePage()

  const animationChildren = {
    hidden: {opacity: 0, y: 10},
    show: {opacity: 1, y: 0, transition: {duration: 0.5}},
  }

  const animationDatos = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 0.5}},
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

  React.useEffect(() => {
    if (page !== Page.Inscripcion) changePage(Page.Inscripcion)
  }, [page, changePage])

  React.useEffect(() => {
    if (!status) {
      axios.get("https://strapi-abtm.herokuapp.com/inscriptos").then((res) => {
        setInscriptos(res.data)
        setStatus(true)
      })
    }
  }, [status])

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
          <VStack minH="100vh" overflow="hidden" p={2} spacing={10}>
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
            {!status && <Spinner />}
            {status && (
              <Box
                overflowX={["scroll", null, "hidden"]}
                overflowY="hidden"
                w={["100%", "90%", null, "80%"]}
              >
                <MotionTable
                  colorScheme="facebook"
                  initial={{opacity: 0, y: 20}}
                  p={[0, null, 4]}
                  transition={{duration: 0.5}}
                  variant="simple"
                  viewport={{once: true}}
                  whileInView={{opacity: 1, y: 0}}
                >
                  <MotionThead
                    bg="#3c6fcd88"
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
                  </MotionThead>
                  {inscriptos.map((inscripto) => (
                    <MotionTbody
                      key={inscripto.id}
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
                    </MotionTbody>
                  ))}
                </MotionTable>
              </Box>
            )}
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export default Inscriptos
