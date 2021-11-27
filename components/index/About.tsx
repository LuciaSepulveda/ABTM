import {Box, Center, Container, Stack, Text} from "@chakra-ui/react"
import React from "react"
import {Element} from "react-scroll"
import Image from "next/image"
import {motion} from "framer-motion"
import {useMediaQuery} from "react-responsive"

import foto1 from "../../public/abtm.jpg"
import foto2 from "../../public/abtm2.jpg"

const MotionText = motion(Text)
const MotionBox = motion(Box)

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
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
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
            <MotionText
              alignSelf="center"
              color="black"
              fontSize={["xl", "lg", null, "2xl"]}
              initial={{opacity: 0, x: -50}}
              m="auto"
              textAlign={["justify", null, "center"]}
              transition={{duration: 0.5, delay: 0.1}}
              viewport={{once: true}}
              w={["90%", null, 600]}
              whileInView={{opacity: 1, x: 0}}
              zIndex={1}
            >
              La ABTM (Asociación Bahiense de Tenis de Mesa) es la institución que nuclea toda la
              actividad del Tenis de Mesa de Bahía Blanca y la región. Afiliada a la Federación
              Argentina de Tenis de Mesa desde el 2013.
            </MotionText>
            <MotionBox
              bg="#455A64"
              boxShadow="6px 4px 6px #2e2e2e83"
              initial={{opacity: 0, x: 50}}
              p={2}
              transition={{duration: 0.5, delay: 0.1}}
              viewport={{once: true}}
              whileInView={{opacity: 1, x: 0}}
              zIndex={1}
            >
              <Box
                align="center"
                h={[280, 300, 300, 300, 340]}
                position="relative"
                w={[300, 400, 400, 400, 540]}
                zIndex={1}
              >
                <Image
                  alt="foto"
                  blurDataURL={`${foto1}`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  src={foto1}
                />
              </Box>
            </MotionBox>
          </Stack>
          <Stack
            align="center"
            direction={["column", null, "row"]}
            justify="space-between"
            m="auto"
            p={2}
            w={["100%", null, "90%"]}
          >
            {isPortrait && (
              <>
                <MotionText
                  alignSelf="center"
                  color="black"
                  fontSize={["xl", "lg", null, "2xl"]}
                  initial={{opacity: 0, x: -50}}
                  m="auto"
                  textAlign={["justify", null, "center"]}
                  transition={{duration: 0.5, delay: 0.1}}
                  viewport={{once: true}}
                  w={["90%", null, 600]}
                  whileInView={{opacity: 1, x: 0}}
                  zIndex={1}
                >
                  Nuestro objetivo principal es difundir y desarrollar el deporte como actividad de
                  contención e inclusión de los chicos principalmente y además formar personas
                  íntegras en todo sentido.
                </MotionText>
                <MotionBox
                  bg="#FF725E"
                  boxShadow="6px 4px 6px #2e2e2e83"
                  initial={{opacity: 0, x: 50}}
                  p={2}
                  transition={{duration: 0.5, delay: 0.1}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, x: 0}}
                  zIndex={1}
                >
                  <Box
                    align="center"
                    h={[280, 300, 300, 300, 340]}
                    position="relative"
                    w={[300, 400, 400, 400, 540]}
                    zIndex={1}
                  >
                    <Image
                      alt="foto"
                      blurDataURL={`${foto2}`}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      src={foto2}
                    />
                  </Box>
                </MotionBox>
              </>
            )}
            {!isPortrait && (
              <>
                <MotionBox
                  bg="#FF725E"
                  boxShadow="6px 4px 6px #2e2e2e83"
                  initial={{opacity: 0, x: -50}}
                  p={2}
                  transition={{duration: 0.5, delay: 0.1}}
                  viewport={{once: true}}
                  whileInView={{opacity: 1, x: 0}}
                  zIndex={1}
                >
                  <Box
                    align="center"
                    h={[280, 300, 300, 300, 340]}
                    position="relative"
                    w={[300, 400, 400, 400, 540]}
                    zIndex={1}
                  >
                    <Image
                      alt=""
                      blurDataURL={`${foto2}`}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      src={foto2}
                    />
                  </Box>
                </MotionBox>
                <MotionText
                  alignSelf="center"
                  color="black"
                  fontSize={["xl", "lg", null, "2xl"]}
                  initial={{opacity: 0, x: 50}}
                  m="auto"
                  textAlign={["justify", null, "center"]}
                  transition={{duration: 0.5, delay: 0.1}}
                  viewport={{once: true}}
                  w={["90%", null, 600]}
                  whileInView={{opacity: 1, x: 0}}
                  zIndex={1}
                >
                  Nuestro objetivo principal es difundir y desarrollar el deporte como actividad de
                  contencion e inclusion de los chicos principalmente y ademas formar personas
                  integras en todo sentido.
                </MotionText>
              </>
            )}
          </Stack>
        </Container>
      </Center>
    </Element>
  )
}

export default About
