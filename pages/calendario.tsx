import {Box, Container, ListItem, Text, UnorderedList, VStack} from "@chakra-ui/react"
import Image from "next/image"
import {GetStaticProps} from "next"
import React from "react"
import {Bounce} from "react-awesome-reveal"

import apiCalendar from "../data/data"
import styles from "../css/calendario.module.scss"
import Menu from "../components/Menu"
//import {calendar} from "../data/data"
import foto from "../public/cuarto2021.jpeg"
import Footer from "../components/Footer"
import {Calendar} from "../types/types"

interface Props {
  calendar: Calendar[]
}

const Calendario: React.FC<Props> = ({calendar}) => {
  return (
    <VStack
      bg="#FBFBFB"
      color="#242424"
      minHeight="100vh"
      overflowX="hidden"
      spacing="0px"
      w="100%"
    >
      <Box
        position="absolute"
        style={{filter: "drop-shadow(4px 0px 4px #2e2e2e)"}}
        top={["104px", null, "80px"]}
        w="100%"
      >
        <svg
          id="wave"
          style={{
            transform: "rotate(180deg)",
            transition: "0.3s",
          }}
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50L40,43.3C80,37,160,23,240,16.7C320,10,400,10,480,23.3C560,37,640,63,720,63.3C800,63,880,37,960,35C1040,33,1120,57,1200,61.7C1280,67,1360,53,1440,53.3C1520,53,1600,67,1680,68.3C1760,70,1840,60,1920,61.7C2000,63,2080,77,2160,73.3C2240,70,2320,50,2400,36.7C2480,23,2560,17,2640,20C2720,23,2800,37,2880,45C2960,53,3040,57,3120,60C3200,63,3280,67,3360,58.3C3440,50,3520,30,3600,33.3C3680,37,3760,63,3840,71.7C3920,80,4000,70,4080,63.3C4160,57,4240,53,4320,51.7C4400,50,4480,50,4560,46.7C4640,43,4720,37,4800,38.3C4880,40,4960,50,5040,53.3C5120,57,5200,53,5280,55C5360,57,5440,63,5520,60C5600,57,5680,43,5720,36.7L5760,30L5760,100L5720,100C5680,100,5600,100,5520,100C5440,100,5360,100,5280,100C5200,100,5120,100,5040,100C4960,100,4880,100,4800,100C4720,100,4640,100,4560,100C4480,100,4400,100,4320,100C4240,100,4160,100,4080,100C4000,100,3920,100,3840,100C3760,100,3680,100,3600,100C3520,100,3440,100,3360,100C3280,100,3200,100,3120,100C3040,100,2960,100,2880,100C2800,100,2720,100,2640,100C2560,100,2480,100,2400,100C2320,100,2240,100,2160,100C2080,100,2000,100,1920,100C1840,100,1760,100,1680,100C1600,100,1520,100,1440,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"
            fill="#3C6ECD"
            style={{
              transform: "translate(0, 0px)",
              opacity: 1,
            }}
          />
        </svg>
      </Box>
      <Menu />
      <Container maxW="8xl" paddingBottom={[8, null, 28]}>
        <VStack
          id="calendario"
          minH={calendar.length * 500}
          mt={20}
          overflow="hidden"
          p={2}
          paddingBottom={10}
          paddingTop={20}
        >
          <Text as="h2" className={styles.textCalendario} fontSize="6xl" fontWeight="bold">
            Calendario
          </Text>
          <Box className={styles.timeline}>
            <UnorderedList>
              {calendar.map((elem: Calendar) => {
                return (
                  <ListItem
                    key={elem.title}
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
                    <Bounce delay={100}>
                      <VStack
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
                        h={400}
                        padding="15px"
                        position="relative"
                        width={["250px", "250px", null, "400px"]}
                      >
                        <Text fontSize="md">{elem.date}</Text>
                        <Text fontSize="xl" fontWeight="bold">
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
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            src={foto}
                          />
                        </Box>
                        <Text fontSize="md">{elem.description}</Text>
                      </VStack>
                    </Bounce>
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
  const calendar = await apiCalendar.list()

  return {
    props: {
      calendar: calendar,
    },
  }
}

export default Calendario
