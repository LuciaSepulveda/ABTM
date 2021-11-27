import {Box, Center, Container, HStack, Text, VStack} from "@chakra-ui/react"
import React from "react"
import {MdPhoneInTalk, MdMailOutline} from "react-icons/md"
import {BsInstagram, BsFacebook, BsInfoCircle} from "react-icons/bs"
import Link from "next/link"

const Footer: React.FC = () => {
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
      <Box bg="#3C6ECD" bottom={0} h={["61%", 44, 36, 40, 24]} position="absolute" w="100%" />
      <Center
        bg="rgba(0,0,0,0.2)"
        bottom={0}
        color="#242424"
        p={2}
        position="absolute"
        textAlign="center"
        w="100%"
      >
        {`© Copyright 2021 Asociación Bahiense de Tenis de Mesa. `}
        <Link passHref href="https://storyset.com/people">
          <a style={{marginLeft: 6, cursor: "pointer"}}>
            <BsInfoCircle />
          </a>
        </Link>
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
              <Box _hover={{color: "#c0c0c0"}} as="a" color="#fbfbfb" transition="all ease-in 0.2s">
                <BsFacebook style={{width: 20, height: 20, cursor: "pointer"}} />
              </Box>
            </Link>
            <Link passHref href={"https://www.instagram.com/abtm_bahia_blanca/"}>
              <Box _hover={{color: "#c0c0c0"}} as="a" color="#fbfbfb" transition="all ease-in 0.2s">
                <BsInstagram style={{width: 20, height: 20, cursor: "pointer"}} />
              </Box>
            </Link>
          </HStack>
          <Link passHref href={"mailto: contacto.abtm.web@gmail.com"}>
            <HStack
              _hover={{color: "#c0c0c0"}}
              as="a"
              color="#fbfbfb"
              cursor="pointer"
              transition="all ease-in 0.2s"
            >
              <MdMailOutline />
              <Text fontSize="lg">contacto.abtm.web@gmail.com</Text>
            </HStack>
          </Link>
          <Link passHref href={"https://wa.me/5492916421287"}>
            <HStack
              _hover={{color: "#c0c0c0"}}
              as="a"
              color="#fbfbfb"
              cursor="pointer"
              transition="all ease-in 0.2s"
            >
              <MdPhoneInTalk />
              <Text fontSize="lg">+54 (0291) 156421287</Text>
            </HStack>
          </Link>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
