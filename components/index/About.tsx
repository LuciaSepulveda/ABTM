import {Box, Center, Container, Stack, Text} from "@chakra-ui/react"
import React from "react"
import {Element} from "react-scroll"
import Image from "next/image"
import {useMediaQuery} from "react-responsive"
import {Fade} from "react-awesome-reveal"

import foto from "../../public/foto.jpg"

const About: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <Element
      name="elemento1"
      style={{
        minHeight: "100vh",
        marginTop: "0px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box position="absolute" top="-20px" w="100%">
        <svg
          style={{filter: "drop-shadow(0px 5px 2px #2c4c88)"}}
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L40,64C80,64,160,64,240,85.3C320,107,400,149,480,165.3C560,181,640,171,720,149.3C800,128,880,96,960,112C1040,128,1120,192,1200,202.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="#3C6ECD"
            fillOpacity="1"
          />
        </svg>
      </Box>
      <Center m="auto" minH="100vh" paddingTop={[20, null, 0]} w="100%">
        <Container maxW="8xl">
          <Stack
            align="center"
            direction={["column", null, "row"]}
            justify="space-between"
            m="auto"
            p={2}
            w={["100%", null, "90%"]}
          >
            <Fade
              delay={100}
              style={{
                width: isPortrait ? "90%" : 600,
                height: "100%",
                margin: "auto",
                textAlign: isPortrait ? "justify" : "center",
              }}
            >
              <Text
                alignSelf="center"
                color="black"
                fontSize={["xl", "lg", null, "2xl"]}
                m="auto"
                textAlign={["justify", null, "center"]}
                w="100%"
                zIndex={1}
              >
                La ABTM (Asociación Bahiense de Tenis de Mesa) es la institución que nuclea toda la
                actividad del Tenis de Mesa de Bahía Blanca y la región. Afiliada a la Federación
                Argentina de Tenis de Mesa desde el 2013.
              </Text>
            </Fade>
            <Fade>
              <Box bg="#455A64" boxShadow="lg" p={2} zIndex={1}>
                <Box
                  align="center"
                  h={[280, 300, null, 340]}
                  position="relative"
                  w={[300, 400, null, 540]}
                  zIndex={1}
                >
                  <Image
                    alt="foto"
                    blurDataURL={`${foto}`}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    src={foto}
                  />
                </Box>
              </Box>
            </Fade>
          </Stack>
          <Stack
            align="center"
            direction={isPortrait ? ["column", "column", null, "row"] : "row"}
            justify="space-between"
            m="auto"
            p={2}
            w={isPortrait ? ["100%", null, "90%"] : "90%"}
          >
            {isPortrait && (
              <>
                <Fade
                  delay={100}
                  style={{
                    width: isPortrait ? "90%" : 600,
                    height: "100%",
                    margin: "auto",
                    textAlign: isPortrait ? "justify" : "center",
                  }}
                >
                  <Text
                    alignSelf="center"
                    color="black"
                    fontSize={["xl", "lg", null, "2xl"]}
                    m="auto"
                    w="100%"
                    zIndex={1}
                  >
                    Nuestro objetivo principal es difundir y desarrollar el deporte como actividad
                    de contención e inclusión de los chicos principalmente y además formar personas
                    íntegras en todo sentido.
                  </Text>
                </Fade>
                <Fade>
                  <Box bg="#FF725E" boxShadow="lg" p={2} zIndex={1}>
                    <Box
                      align="center"
                      h={[280, 300, null, 340]}
                      position="relative"
                      w={[300, 400, null, 540]}
                      zIndex={1}
                    >
                      <Image
                        alt="foto"
                        blurDataURL={`${foto}`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        src={foto}
                      />
                    </Box>
                  </Box>
                </Fade>
              </>
            )}
            {!isPortrait && (
              <>
                <Fade>
                  <Box bg="#FF725E" boxShadow="lg" p={2} zIndex={1}>
                    <Box
                      align="center"
                      h={[280, 300, null, 340]}
                      position="relative"
                      w={[300, 400, null, 540]}
                      zIndex={1}
                    >
                      <Image
                        alt=""
                        blurDataURL={`${foto}`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        src={foto}
                      />
                    </Box>
                  </Box>
                </Fade>
                <Fade
                  delay={100}
                  style={{
                    width: isPortrait ? "90%" : 600,
                    height: "100%",
                    margin: "auto",
                    textAlign: isPortrait ? "justify" : "center",
                  }}
                >
                  <Text
                    alignSelf="center"
                    color="black"
                    fontSize={["xl", "lg", null, "2xl"]}
                    m="auto"
                    zIndex={1}
                  >
                    Nuestro objetivo principal es difundir y desarrollar el deporte como actividad
                    de contencion e inclusion de los chicos principalmente y ademas formar personas
                    integras en todo sentido.
                  </Text>
                </Fade>
              </>
            )}
          </Stack>
        </Container>
      </Center>
    </Element>
  )
}

export default About
