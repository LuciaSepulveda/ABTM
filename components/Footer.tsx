import {Box, Center, Container, HStack, Text, VStack} from "@chakra-ui/react"
import React from "react"
import {MdPhoneInTalk, MdMailOutline} from "react-icons/md"
import Link from "next/link"

const Contact: React.FC = () => {
  return (
    <Box minH={["50vh", null, "40vh"]} paddingTop={[4, null, 10]} position="relative" w="100%">
      <Box bottom={[40, 40, 24, 20, 30]} position="absolute" w="100%">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,96L60,122.7C120,149,240,203,360,202.7C480,203,600,149,720,149.3C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="#3C6ECD"
            fillOpacity="1"
          />
        </svg>
      </Box>
      <Box bg="#3C6ECD" bottom={0} h={[40, 40, 24, 20, 30]} position="absolute" w="100%" />
      <Center
        bg="rgba(0,0,0,0.2)"
        bottom={0}
        color="#242424"
        p={2}
        position="absolute"
        textAlign="center"
        w="100%"
      >
        © Copyright 2021 Asociación Bahiense de Tenis de Mesa.
      </Center>
      <Container
        bottom={[20, 16, 16, 16, 16]}
        maxW="100%"
        paddingTop={["30%", 40, "20%", null, 32]}
        position="absolute"
      >
        <VStack color="#FBFBFB" position="relative">
          <Text fontSize="larger" fontWeight="bold">
            Asociación Bahiense de Tenis de Mesa
          </Text>
          <Link passHref href={"mailto: contacto.abtm.web@gmail.com"}>
            <HStack cursor="pointer">
              <MdMailOutline />
              <Text fontSize="lg">contacto.abtm.web@gmail.com</Text>
            </HStack>
          </Link>
          <Link passHref href={"https://wa.me/5492916421287"}>
            <HStack cursor="pointer">
              <MdPhoneInTalk />
              <Text fontSize="lg">+54 (0291) 156421287</Text>
            </HStack>
          </Link>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact
