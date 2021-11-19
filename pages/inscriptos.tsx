import {Box, Container, Table, Text, Tbody, Td, Th, Thead, VStack, Spinner} from "@chakra-ui/react"
import axios from "axios"
import React from "react"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import {useChangePage, usePage} from "../context/hooks"
import {Inscripto, Page} from "../types/types"

const Inscriptos: React.FC = () => {
  const [status, setStatus] = React.useState<boolean>(false)
  const [inscriptos, setInscriptos] = React.useState<Inscripto[]>([])
  const changePage = useChangePage()
  const page = usePage()

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
          <Text as="h2" fontSize="6xl" fontWeight="bold" textAlign="center">
            Inscriptos
          </Text>
          {!status && <Spinner />}
          {status && (
            <Box overflowX={["scroll", null, "hidden"]} w={["100%", "90%", null, "80%"]}>
              <Table colorScheme="facebook" p={[0, null, 4]} variant="simple">
                <Thead bg="#3c6fcd88">
                  <Th color="#242424" textAlign="center">
                    Nombre
                  </Th>
                  <Th color="#242424" textAlign="center">
                    Apellido
                  </Th>
                  <Th color="#242424" textAlign="center">
                    Categoria
                  </Th>
                </Thead>
                {inscriptos.map((inscripto) => (
                  <Tbody key={inscripto.id}>
                    <Td textAlign="center">{inscripto.nombre}</Td>
                    <Td textAlign="center">{inscripto.apellido}</Td>
                    <Td textAlign="center">{inscripto.categoria}</Td>
                  </Tbody>
                ))}
              </Table>
            </Box>
          )}
        </VStack>
      </Container>
      <Footer />
    </VStack>
  )
}

export default Inscriptos
