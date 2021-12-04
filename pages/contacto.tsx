import React from "react"
import {motion} from "framer-motion"
import {
  VStack,
  Container,
  Input,
  HStack,
  Text,
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
  Spinner,
} from "@chakra-ui/react"
import Image from "next/image"
import {useForm, SubmitHandler} from "react-hook-form"
import axios from "axios"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import {useChangePage, usePage} from "../context/hooks"
import {Page} from "../types/types"
import Head from "../components/Head"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

const MotionVStack = motion(VStack)
const MotionText = motion(Text)
const MotionCenter = motion(Center)

type Inputs = {
  nombre: string
  email: string
  telefono: string
  consulta: string
}

const schema = yup.object({
  nombre: yup.string().required(),
  email: yup.string().email().required(),
  telefono: yup.string().required(),
  consulta: yup.string().required(),
})

const Contacto: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [loading, setLoading] = React.useState<boolean>(false)

  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Circuito) changePage(Page.Circuito)
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
    setLoading(true)

    await axios
      .post("/api/contacto", {
        nombre: data.nombre,
        email: data.email,
        telefono: data.telefono,
        consulta: data.consulta,
      })
      .then((response) => {
        setLoading(false)
      })
      .catch((err) => {})
    setLoading(false)

    onOpen()
    reset()
  }

  return (
    <>
      <Head description="Formulario de contacto" siteTitle="ABTM" title="Contacto" />
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
          <VStack w="100%">
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
              Contacto
            </MotionText>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Consulta enviada &#127955;</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Su consulta se ha registrado correctamente. &#10004;</ModalBody>
              </ModalContent>
            </Modal>
            {loading && <Spinner />}
            {!loading && (
              <Stack
                alignItems="center"
                direction={["column", "column", "column", "row", "row"]}
                overflowX="visible"
                spacing={0}
                w="100%"
              >
                <MotionCenter
                  height={[240, 280, 320, 400, 550, 550]}
                  initial={{opacity: 0, x: -100}}
                  style={{
                    filter: "drop-shadow(6px 4px 4px #2e2e2e83)",
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
                    src="/Tabletennis4.svg"
                  />
                </MotionCenter>
                <form style={{width: "100%"}} onSubmit={handleSubmit(onSubmit)}>
                  <MotionVStack
                    initial={{opacity: 0, y: 20}}
                    m="auto"
                    paddingX={[0, null, 6]}
                    paddingY={6}
                    transition={{duration: 0.5, delay: 0.1}}
                    viewport={{once: true}}
                    w={["100%", null, 500]}
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
                        Nombre y apellido
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
                            border: errors.telefono ? "1.5px solid #EF4A3C" : "0.5px solid #BDBDBD",
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
                        Consulta
                      </label>
                      <Textarea
                        _focus={{border: "1px solid #242424"}}
                        _placeholder={{color: "rgba(189, 189, 189, 1)"}}
                        bgGradient="linear(0deg, rgba(242, 242, 242, 0.4), rgba(242, 242, 242, 0.4))"
                        placeholder="Consulta"
                        style={{
                          border: errors.consulta ? "1.5px solid #EF4A3C" : "0.5px solid #BDBDBD",
                          backgroundColor: errors.consulta ? "#FDECEA" : "",
                          transition: "all ease-in 0.2s",
                        }}
                        {...register("consulta", {required: true})}
                      />
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
              </Stack>
            )}
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export default Contacto
