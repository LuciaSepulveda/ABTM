import {Container, Divider, HStack, ListItem, Text, UnorderedList, VStack} from "@chakra-ui/react"
import React from "react"
import Link from "next/link"
import {motion} from "framer-motion"
import {
  MdLocationPin,
  MdPhoneInTalk,
  MdPersonPin,
  MdOutlineInfo,
  MdArrowRightAlt,
} from "react-icons/md"

import Footer from "../components/Footer"
import Menu from "../components/Menu"
import Head from "../components/Head"
import Card from "../components/donde_jugar/Card"
import {useChangePage, usePage} from "../context/hooks"
import {Page} from "../types/types"

const MotionVStack = motion(VStack)
const MotionUnorderedList = motion(UnorderedList)
const MotionListItem = motion(ListItem)
const MotionText = motion(Text)

const DondeJugar: React.FC = () => {
  const changePage = useChangePage()
  const page = usePage()

  const animationText = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0},
  }

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  React.useEffect(() => {
    if (page !== Page.Circuito) changePage(Page.Circuito)
  }, [page, changePage])

  const Front1 = (
    <MotionVStack
      color="black"
      initial={{opacity: 0}}
      spacing={4}
      transition={{duration: 0.5}}
      viewport={{once: true}}
      whileInView={{opacity: 1}}
    >
      <MotionText
        fontSize="4xl"
        fontWeight="bold"
        initial={{opacity: 0}}
        textAlign="center"
        transition={{duration: 0.5}}
        viewport={{once: true}}
        whileInView={{opacity: 1}}
      >
        Polideportive Norte
      </MotionText>
      <MotionUnorderedList
        fontSize="2xl"
        initial="hidden"
        styleType="none"
        variants={container}
        viewport={{once: true}}
        whileInView="show"
      >
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdArrowRightAlt style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Clases abiertas a toda la comunidad</Text>
          </HStack>
        </MotionListItem>
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdOutlineInfo style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Lunes, miércoles y viernes de 19 a 21hs</Text>
          </HStack>
        </MotionListItem>
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdPersonPin style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Profesor: Gerardo Gutierrez</Text>
          </HStack>
        </MotionListItem>
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdPhoneInTalk style={{height: "40px", width: "40px", color: "#FF725E"}} />
            {`Contacto: `}
            <Link passHref href="https://wa.me/549291507112">
              <a>291-5071112</a>
            </Link>
          </HStack>
        </MotionListItem>
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdLocationPin style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Lugar: Vieytes 2700</Text>
          </HStack>
        </MotionListItem>
      </MotionUnorderedList>
    </MotionVStack>
  )

  const Front2 = (
    <MotionVStack
      color="black"
      initial={{opacity: 0}}
      spacing={4}
      transition={{duration: 0.5}}
      viewport={{once: true}}
      whileInView={{opacity: 1}}
    >
      <MotionText
        fontSize="4xl"
        fontWeight="bold"
        initial={{opacity: 0}}
        textAlign="center"
        transition={{duration: 0.5}}
        viewport={{once: true}}
        whileInView={{opacity: 1}}
      >
        Club Tiro Federal
      </MotionText>
      <MotionUnorderedList
        fontSize="2xl"
        initial="hidden"
        styleType="none"
        variants={container}
        viewport={{once: true}}
        whileInView="show"
      >
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdArrowRightAlt style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Clases abiertas a toda la comunidad</Text>
          </HStack>
        </MotionListItem>
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdOutlineInfo style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Martes y jueves de 18 a 21hs</Text>
          </HStack>
        </MotionListItem>
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdPersonPin style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Profesor: Sergio Zabaloy</Text>
          </HStack>
        </MotionListItem>
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdPhoneInTalk style={{height: "40px", width: "40px", color: "#FF725E"}} />
            {`Contacto: `}
            <Link passHref href="https://wa.me/549291507112">
              <a>291-4136813</a>
            </Link>
          </HStack>
        </MotionListItem>
        <MotionListItem m="2px" variants={animationText}>
          <HStack>
            <MdLocationPin style={{height: "40px", width: "40px", color: "#FF725E"}} />
            <Text>Lugar: Newton 1180</Text>
          </HStack>
        </MotionListItem>
      </MotionUnorderedList>
    </MotionVStack>
  )

  return (
    <>
      <Head
        description="Lugares donde practicar tenis de mesa"
        siteTitle="ABTM"
        title="Dónde jugar"
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
          <VStack p={2} spacing={10} w="100%">
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
              ¿Dónde jugar?
            </MotionText>
            <VStack m="auto" spacing={10} w={["100%", "100%", "100%", "90%", "80%"]}>
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
    </>
  )
}

export default DondeJugar
