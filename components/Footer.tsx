import {Box, Center, Container, HStack, Text, VStack} from "@chakra-ui/react"
import React from "react"
import {MdPhoneInTalk, MdMailOutline} from "react-icons/md"
import {BsInstagram, BsFacebook} from "react-icons/bs"
import Link from "next/link"

const Contact: React.FC = () => {
  return (
    <Box
      minH={["60vh", "50vh", "30vh", null, "40vh"]}
      paddingTop={[4, null, 10]}
      position="relative"
      w="100%"
    >
      <Box bottom={["60%", 40, 32, 36, 20]} position="absolute" w="100%">
        <svg
          style={{filter: "drop-shadow(0px -4px 4px #2e2e2e83)"}}
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L60,122.7C120,149,240,203,360,202.7C480,203,600,149,720,149.3C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="#3C6ECD"
            fillOpacity="1"
          />
        </svg>
      </Box>
      <Box bg="#3C6ECD" bottom={0} h={["60%", 40, 32, 36, 20]} position="absolute" w="100%" />
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
          <Text fontSize="larger" fontWeight="bold" textAlign="center">
            Asociación Bahiense de Tenis de Mesa
          </Text>
          <HStack justify="space-between" m="auto" w={16}>
            <Link passHref href={"https://www.facebook.com/ABTMTDM/"}>
              <a>
                <BsFacebook style={{width: 20, height: 20, cursor: "pointer"}} />
              </a>
            </Link>
            <Link passHref href={"https://www.instagram.com/abtm_bahia_blanca/"}>
              <a>
                <BsInstagram style={{width: 20, height: 20, cursor: "pointer"}} />
              </a>
            </Link>
          </HStack>
          <Link passHref href={"mailto: contacto.abtm.web@gmail.com"}>
            <HStack as="a" cursor="pointer">
              <MdMailOutline />
              <Text fontSize="lg">contacto.abtm.web@gmail.com</Text>
            </HStack>
          </Link>
          <Link passHref href={"https://wa.me/5492916421287"}>
            <HStack as="a" cursor="pointer">
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
