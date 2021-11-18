import {Box, Container, Divider, ListItem, Text, UnorderedList, VStack} from "@chakra-ui/react"
import Image from "next/image"
import {GetStaticProps} from "next"
import React from "react"
import axios from "axios"
import {motion} from "framer-motion"

import styles from "../css/calendario.module.scss"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import {Calendar, Page} from "../types/types"
import {useChangePage, usePage} from "../context/hooks"

interface Props {
  calendar: Calendar[]
}

const MotionVStack = motion(VStack)

const URL = "https://strapi-abtm.herokuapp.com"

const Calendario: React.FC<Props> = ({calendar}) => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.Torneos) changePage(Page.Torneos)
  }, [page, changePage])

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
        <VStack minH={calendar.length * 500} overflow="hidden" p={2} spacing={10}>
          <Text as="h2" fontSize="6xl" fontWeight="bold" textAlign="center">
            Calendario
          </Text>
          <Box className={styles.timeline} paddingTop={[14, null, 0]}>
            <UnorderedList>
              {calendar
                .sort((a, b) => a.id - b.id)
                .map((elem: Calendar) => {
                  return (
                    <ListItem
                      key={elem.id}
                      _after={{
                        content: '""',
                        position: "absolute",
                        left: "50%",
                        bottom: 0,
                        transform: "translateX(-50%)",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "inherit",
                      }}
                      backgroundColor="#242424"
                      color="white"
                      margin="0 auto"
                      paddingTop="50px"
                      position="relative"
                      style={{listStyleType: "none"}}
                      w="6px"
                    >
                      <MotionVStack
                        _before={{
                          content: '""',
                          position: "absolute",
                          bottom: "7px",
                          width: 0,
                          height: 0,
                          borderStyle: "solid",
                        }}
                        alignContent="center"
                        background="#FF725E"
                        bottom={0}
                        boxShadow="xl"
                        h={420}
                        initial={{opacity: 0, scale: 0}}
                        padding="15px"
                        position="relative"
                        transition={{
                          delay: 0.1,
                          duration: 0.8,
                          bounce: 0.5,
                          type: "spring",
                        }}
                        viewport={{once: true}}
                        whileInView={{opacity: 1, scale: 1}}
                        width={["250px", "250px", null, "400px"]}
                      >
                        <Text fontSize="md" textAlign="center" w="100%">
                          {elem.date}
                        </Text>
                        <Divider w="90%" />
                        <Text fontSize="xl" fontWeight="bold" textAlign="center" w="100%">
                          {elem.title}
                        </Text>
                        <Box
                          className={styles.imagen}
                          h={200}
                          overflow="hidden"
                          position="relative"
                          w="100%"
                        >
                          <Image
                            alt={elem.title}
                            blurDataURL={elem.photo.url}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            src={elem.photo.url}
                          />
                        </Box>
                        <Text fontSize="md" textAlign="center" w="100%" whiteSpace="pre-wrap">
                          {elem.description}
                        </Text>
                      </MotionVStack>
                    </ListItem>
                  )
                })}
            </UnorderedList>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </VStack>
  )
}

export const getStaticProps: GetStaticProps<Props, never> = async () => {
  const res = await axios.get<Calendar[]>(URL + "/calendarios")

  const calendar = res.data

  return {
    props: {
      calendar: calendar,
    },
  }
}

export default Calendario
