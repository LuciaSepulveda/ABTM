import {Box, Container, Table, Tbody, Td, Th, Thead, Tr, Text, VStack} from "@chakra-ui/react"
import React from "react"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import {sistemaDePuntaje} from "../data/data"

const SistemaDePuntaje: React.FC = () => {
  return (
    <VStack bg="#FBFBFB" color="#242424" minHeight="100vh" overflow="hidden" spacing="0px" w="100%">
      <Menu />
      <Container maxW="8xl" paddingBottom={10} paddingTop={[8, null, 24]}>
        <VStack minH="100vh" p={2} spacing={10}>
          <Text as="h2" fontSize="6xl" fontWeight="bold">
            Sistema de puntaje
          </Text>
          <Box overflowX={["scroll", null, "hidden"]} w={["100%", null, "80%"]}>
            <Table colorScheme="facebook" p={[0, null, 4]} variant="simple">
              <Thead bg="#3c6fcd88">
                <Tr>
                  <Th textAlign="center">Posicion</Th>
                  <Th textAlign="center">Quinta</Th>
                  <Th textAlign="center">Cuarta</Th>
                  <Th textAlign="center">Tercera</Th>
                  <Th textAlign="center">Segunda</Th>
                  <Th textAlign="center">Primera</Th>
                  <Th textAlign="center">SD</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sistemaDePuntaje.map((elem) => (
                  <Tr key={elem.posicion}>
                    <Td textAlign="center">{elem.posicion}</Td>
                    <Td textAlign="center">{elem.quinta}</Td>
                    <Td textAlign="center">{elem.cuarta}</Td>
                    <Td textAlign="center">{elem.tercera}</Td>
                    <Td textAlign="center">{elem.segunda}</Td>
                    <Td textAlign="center">{elem.primera}</Td>
                    <Td textAlign="center">{elem.SD}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </VStack>
  )
}

export default SistemaDePuntaje
