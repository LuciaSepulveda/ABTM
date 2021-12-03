import {
  VStack,
  Container,
  Input,
  HStack,
  Text,
  Select,
  Checkbox,
  Center,
  Button,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  useDisclosure,
  Stack,
} from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {GetStaticProps} from "next"
import {useForm, SubmitHandler} from "react-hook-form"
import axios from "axios"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {motion, useViewportScroll, useTransform} from "framer-motion"
import {useMediaQuery} from "react-responsive"
import Link from "next/link"

import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Head from "../components/Head"
import {useChangePage, usePage} from "../context/hooks"
import {Page, Open} from "../types/types"

interface Props {
  open: Open[]
}

const URL = "https://strapi-abtm.herokuapp.com"

const MotionCenter = motion(Center)
const MotionVStack = motion(VStack)
const MotionText = motion(Text)

const provincias = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucuman",
]

type Inputs = {
  dni: string
  nombre: string
  apellido: string
  email: string
  telefono: string
  provincia: string
  ciudad: string
  categoria: string
  comentario: string
  reglamento: boolean
}

const schema = yup.object({
  dni: yup.string().required(),
  nombre: yup.string().required(),
  apellido: yup.string().required(),
  email: yup.string().email().required(),
  telefono: yup.string().required(),
  provincia: yup.string().required(),
  ciudad: yup.string().required(),
  categoria: yup.string().required(),
  comentario: yup.string(),
  reglamento: yup.boolean().required(),
})

const Inscribirse: React.FC<Props> = ({open}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  const changePage = useChangePage()
  const page = usePage()

  const {scrollY} = useViewportScroll()

  const y1 = useTransform(scrollY, [0, 500], [-260, 140])

  React.useEffect(() => {
    if (page !== Page.Inscripcion) changePage(Page.Inscripcion)
  }, [page, changePage])

  const {
    register,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await axios
      .post("/api/inscripcion", {
        dni: data.dni,
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email,
        telefono: data.telefono,
        categoria: data.categoria,
        comentario: data.comentario,
        provincia: data.provincia,
        ciudad: data.ciudad,
      })
      .then((response) => {})
      .catch((err) => {})

    onOpen()
    reset()
  }

  return (
    <>
      <Head
        description="Formulario de inscripción al próximo torneo organizado por la Asociación Bahiense de Tenis de Mesa"
        siteTitle="ABTM"
        title="Inscribirse"
      />
      <VStack bg="#FBFBFB" color="#242424" minHeight="100vh" spacing="0px" w="100%">
        <Menu />
        <Container maxW="8xl" overflowX="hidden" paddingBottom={10} paddingTop={[8, null, 14]}>
          <Stack
            alignItems="center"
            direction={["column", "column", "column", "row", "row"]}
            overflowX="visible"
            spacing={0}
            w="100%"
          >
            <VStack>
              {!open[0]?.Abierta && (
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
              {open[0]?.Abierta && (
                <VStack
                  minH="100vh"
                  overflow="hidden"
                  p={2}
                  paddingBottom={10}
                  paddingTop={[8, null, 20]}
                  spacing={[10, null, 2]}
                >
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
                    Inscribirse
                  </MotionText>
                  <Modal isCentered isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Inscripción correcta &#127955;</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>Se ha registrado correctamente. &#10004;</ModalBody>
                    </ModalContent>
                  </Modal>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <MotionVStack
                      initial={{opacity: 0, y: 20}}
                      p={6}
                      transition={{duration: 0.5, delay: 0.1}}
                      viewport={{once: true}}
                      w={["100%", null, 460]}
                      whileInView={{opacity: 1, y: 0}}
                    >
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          DNI
                        </label>
                        <HStack w="100%">
                          <Input
                            _focus={{border: "1px solid #242424"}}
                            _placeholder={{color: "#9e9e9e"}}
                            bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                            placeholder="Numero de DNI"
                            style={{
                              border: errors.dni ? "1.5px solid #EF4A3C" : "0.5px solid #BDBDBD",
                              transition: "all ease-in 0.2s",
                              backgroundColor: errors.dni ? "#FDECEA" : "",
                            }}
                            {...register("dni", {required: true})}
                          />
                          <Text color="#EF4A3C" fontWeight="bold">
                            {errors.dni ? "*" : ""}
                          </Text>
                        </HStack>
                      </VStack>
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Nombre
                        </label>
                        <HStack w="100%">
                          <Input
                            _focus={{border: "1px solid #242424"}}
                            _placeholder={{color: "#9e9e9e"}}
                            bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                            placeholder="Nombre"
                            style={{
                              border: errors.nombre ? "1.5px solid #EF4A3C" : "0.5px solid #BDBDBD",
                              transition: "all ease-in 0.2s",
                              backgroundColor: errors.nombre ? "#FDECEA" : "",
                            }}
                            {...register("nombre", {required: true})}
                          />
                          <Text color="#EF4A3C" fontWeight="bold">
                            {errors.nombre ? "*" : ""}
                          </Text>
                        </HStack>
                      </VStack>
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Apellido
                        </label>
                        <HStack w="100%">
                          <Input
                            _focus={{border: "1px solid #242424"}}
                            _placeholder={{color: "#9e9e9e"}}
                            bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                            placeholder="Apellido"
                            style={{
                              border: errors.apellido
                                ? "1.5px solid #EF4A3C"
                                : "0.5px solid #BDBDBD",
                              transition: "all ease-in 0.2s",
                              backgroundColor: errors.apellido ? "#FDECEA" : "",
                            }}
                            {...register("apellido", {required: true})}
                          />
                          <Text color="#EF4A3C" fontWeight="bold">
                            {errors.apellido ? "*" : ""}
                          </Text>
                        </HStack>
                      </VStack>
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Email
                        </label>
                        <HStack w="100%">
                          <Input
                            _focus={{border: "1px solid #242424"}}
                            _placeholder={{color: "#9e9e9e"}}
                            bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                            placeholder="Email"
                            style={{
                              border: errors.email ? "1.5px solid #EF4A3C" : "0.5px solid #BDBDBD",
                              backgroundColor: errors.email ? "#FDECEA" : "",
                              transition: "all ease-in 0.2s",
                            }}
                            {...register("email", {required: true})}
                          />
                          <Text color="#EF4A3C" fontWeight="bold">
                            {errors.email ? "*" : ""}
                          </Text>
                        </HStack>
                      </VStack>
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Telefono
                        </label>
                        <HStack spacing={0} w="100%">
                          <Input
                            _focus={{border: "1px solid #242424"}}
                            _placeholder={{color: "#9e9e9e"}}
                            bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                            placeholder="Telefono"
                            style={{
                              border: errors.telefono
                                ? "1.5px solid #EF4A3C"
                                : "0.5px solid #BDBDBD",
                              transition: "all ease-in 0.2s",
                              backgroundColor: errors.telefono ? "#FDECEA" : "",
                            }}
                            {...register("telefono", {required: true})}
                          />
                          <Text color="#EF4A3C" fontWeight="bold">
                            {errors.telefono ? "*" : ""}
                          </Text>
                        </HStack>
                      </VStack>
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Provincia
                        </label>
                        <HStack w="100%">
                          <Select
                            _focus={{border: "1px solid #242424"}}
                            _placeholder={{color: "#9e9e9e"}}
                            bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                            placeholder="Provincia"
                            style={{
                              border: errors.provincia
                                ? "1.5px solid #EF4A3C"
                                : "0.5px solid #BDBDBD",
                              transition: "all ease-in 0.2s",
                              backgroundColor: errors.provincia ? "#FDECEA" : "",
                            }}
                            {...register("provincia", {required: true})}
                          >
                            {provincias.map((provincia) => (
                              <option
                                key={provincia}
                                style={{backgroundColor: "#fbfbfb"}}
                                value={provincia}
                              >
                                {provincia}
                              </option>
                            ))}
                          </Select>
                          <Text color="#EF4A3C" fontWeight="bold">
                            {errors.provincia ? "*" : ""}
                          </Text>
                        </HStack>
                      </VStack>
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Ciudad
                        </label>
                        <HStack w="100%">
                          <Input
                            _focus={{border: "1px solid #242424"}}
                            _placeholder={{color: "rgba(189, 189, 189, 1)"}}
                            bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                            placeholder="Ciudad"
                            style={{
                              borderRadius: "8px",
                              border: errors.ciudad ? "1.5px solid #EF4A3C" : "0.5px solid #BDBDBD",
                              transition: "all ease-in 0.2s",
                              backgroundColor: errors.ciudad ? "#FDECEA" : "",
                            }}
                            {...register("ciudad", {required: true})}
                          />
                          <Text color="#EF4A3C" fontWeight="bold">
                            {errors.ciudad ? "*" : ""}
                          </Text>
                        </HStack>
                      </VStack>
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Categoria
                        </label>
                        <HStack w="100%">
                          <Select
                            _focus={{border: "1px solid #242424"}}
                            _placeholder={{color: "rgba(189, 189, 189, 1)"}}
                            bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                            placeholder="Categoria"
                            style={{
                              border: errors.categoria
                                ? "1.5px solid #EF4A3C"
                                : "0.5px solid #BDBDBD",
                              transition: "all ease-in 0.2s",
                              backgroundColor: errors.categoria ? "#FDECEA" : "",
                            }}
                            {...register("categoria", {required: true})}
                          >
                            <option style={{backgroundColor: "#fbfbfb"}} value="SD">
                              SD
                            </option>
                            <option style={{backgroundColor: "#fbfbfb"}} value="Primera">
                              Primera
                            </option>
                            <option style={{backgroundColor: "#fbfbfb"}} value="Segunda">
                              Segunda
                            </option>
                            <option style={{backgroundColor: "#fbfbfb"}} value="Tercera">
                              Tercera
                            </option>
                            <option style={{backgroundColor: "#fbfbfb"}} value="Cuarta">
                              Cuarta
                            </option>
                            <option style={{backgroundColor: "#fbfbfb"}} value="Quinta">
                              Quinta
                            </option>
                          </Select>
                          <Text color="#EF4A3C" fontWeight="bold">
                            {errors.categoria ? "*" : ""}
                          </Text>
                        </HStack>
                      </VStack>
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Comentarios adicionales
                        </label>
                        <Textarea
                          _focus={{border: "1px solid #242424"}}
                          _placeholder={{color: "rgba(189, 189, 189, 1)"}}
                          bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                          placeholder="Comentarios adicionales"
                          style={{
                            border: "0.5px solid #BDBDBD",
                          }}
                          {...register("comentario")}
                        />
                      </VStack>
                      <VStack spacing={0} w="100%">
                        <label
                          style={{
                            width: "100%",
                            color: "rgba(130, 130, 130, 1)",
                            lineHeight: "18px",
                            fontWeight: 400,
                            fontSize: "14px",
                          }}
                        >
                          Terminos
                        </label>
                        <HStack justify="space-between" w="100%">
                          <Checkbox
                            isRequired
                            bg="#f3f3f3"
                            {...register("reglamento", {required: true})}
                          />
                          <Text w="100%">
                            He leído y acepto lo expresado en{" "}
                            <Link passHref href={"/reglamentos/Protocolo%20covid"}>
                              <a
                                style={{
                                  color: "#044ace",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                              >
                                Protocolo covid
                              </a>
                            </Link>{" "}
                            y{" "}
                            <Link passHref href={"/reglamentos/Reglamento%20ABTM"}>
                              <a
                                style={{
                                  color: "#044ace",
                                  textDecoration: "underline",
                                }}
                                target="_blank"
                              >
                                Reglamento ABTM
                              </a>
                            </Link>
                          </Text>
                          <Text color="red" fontWeight="bold">
                            {errors.reglamento ? "*" : ""}
                          </Text>
                        </HStack>
                      </VStack>
                      <Button
                        _hover={{backgroundColor: "#6c8592"}}
                        bg="rgb(55,71,79)"
                        boxShadow="xl"
                        color="white"
                        size="md"
                        transition="all ease-in 0.2s"
                        type="submit"
                        zIndex={1}
                      >
                        Enviar
                      </Button>
                    </MotionVStack>
                  </form>
                </VStack>
              )}
            </VStack>
            <MotionCenter
              height={[240, 280, 320, 400, 550, 690]}
              initial={{opacity: 0, x: 100}}
              style={{
                filter: "drop-shadow(6px 4px 4px #2e2e2e83)",
                y: isPortrait ? 0 : y1,
              }}
              transition={{duration: 0.5, ease: "linear"}}
              viewport={{once: true}}
              whileInView={{opacity: 1, x: 0}}
              width="100%"
            >
              <Image
                alt="Ilustración tenis de mesa"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="/Tabletennis3.svg"
              />
            </MotionCenter>
          </Stack>
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

export default Inscribirse
