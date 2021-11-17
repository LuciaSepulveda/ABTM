import {Container, Divider, HStack, ListItem, Text, UnorderedList, VStack} from "@chakra-ui/react"
import React from "react"
import Link from "next/link"
import {
  MdLocationPin,
  MdPhoneInTalk,
  MdPersonPin,
  MdOutlineInfo,
  MdArrowRightAlt,
} from "react-icons/md"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Card from "../components/donde_jugar/Card"
import {useChangePage, usePage} from "../context/hooks"
import {Page} from "../types/types"

const DondeJugar: React.FC = () => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Circuito) changePage(Page.Circuito)
  }, [page, changePage])

  const Front1 = (
    <VStack color="black" spacing={4}>
      <Text fontSize="4xl" fontWeight="bold">
        Polideportive Norte
      </Text>
      <UnorderedList fontSize="2xl" styleType="none">
        <ListItem m="2px">
          <HStack>
            <MdArrowRightAlt style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Clases abiertas a toda la comunidad</Text>
          </HStack>
        </ListItem>
        <ListItem m="2px">
          <HStack>
            <MdOutlineInfo style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Lunes, miércoles y viernes de 19 a 21hs</Text>
          </HStack>
        </ListItem>
        <ListItem m="2px">
          <HStack>
            <MdPersonPin style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Profesor: Gerardo Gutierrez</Text>
          </HStack>
        </ListItem>
        <ListItem m="2px">
          <HStack>
            <MdPhoneInTalk style={{height: "40px", width: "40px", color: "#FF725E"}} />
            {`Contacto: `}
            <Link passHref href="https://wa.me/549291507112">
              <a>291-5071112</a>
            </Link>
          </HStack>
        </ListItem>
        <ListItem m="2px">
          <HStack>
            <MdLocationPin style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Lugar: Vieytes 2700</Text>
          </HStack>
        </ListItem>
      </UnorderedList>
    </VStack>
  )

  const Front2 = (
    <VStack color="black" spacing={4}>
      <Text fontSize="4xl" fontWeight="bold">
        Club Tiro Federal
      </Text>
      <UnorderedList fontSize="2xl" styleType="none">
        <ListItem m="2px">
          <HStack>
            <MdArrowRightAlt style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Clases abiertas a toda la comunidad</Text>
          </HStack>
        </ListItem>
        <ListItem m="2px">
          <HStack>
            <MdOutlineInfo style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Martes y jueves de 18 a 21hs</Text>
          </HStack>
        </ListItem>
        <ListItem m="2px">
          <HStack>
            <MdPersonPin style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Profesor: Sergio Zabaloy</Text>
          </HStack>
        </ListItem>
        <ListItem m="2px">
          <HStack>
            <MdPhoneInTalk style={{height: "40px", width: "40px", color: "#FF725E"}} />
            {`Contacto: `}
            <Link passHref href="https://wa.me/549291507112">
              <a>291-4136813</a>
            </Link>
          </HStack>
        </ListItem>
        <ListItem m="2px">
          <HStack>
            <MdLocationPin style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Lugar: Newton 1180</Text>
          </HStack>
        </ListItem>
      </UnorderedList>
    </VStack>
  )

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
        <VStack p={2} spacing={10} w="100%">
          <Text as="h2" fontSize="6xl" fontWeight="bold" textAlign="center">
            ¿Dónde jugar?
          </Text>
          <VStack m="auto" spacing={10} w={["100%", "100%", null, "80%"]}>
            <Card
              front={Front1}
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.855347703798!2d-62.30065928465549!3d-38.69816687960194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb7299953ccb%3A0xbeb9c1750deca3f0!2sVieytes%202700%2C%20B8003AGZ%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1636320520133!5m2!1ses-419!2sar"
              }
            />
            <Divider w="90%" />
            <Card
              front={Front2}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.7975064413167!2d-62.24702268408682!3d-38.722457794355165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda33f4db2c415%3A0x4ccbcca4ca6ab755!2sNewton%201180%2C%20B8000%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1636320686171!5m2!1ses-419!2sar"
            />
          </VStack>
        </VStack>
      </Container>
      <Footer />
    </VStack>
  )
}

export default DondeJugar
