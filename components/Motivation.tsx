import {Center, Container, Text, Box} from "@chakra-ui/react"
import React from "react"
import {Fade} from "react-awesome-reveal"
import Slider from "react-slick"
import Image from "next/image"
import {useMediaQuery} from "react-responsive"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import tennis from "../public/Tabletennis2.png"

const Motivation: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <Box h="100vh" position="relative" w="100%">
      <Center
        bg="#3C6ECD"
        bottom="14%"
        h={[710, null, 660]}
        paddingLeft={[0, 0, 300, 400, 600, 700]}
        position="absolute"
        top="14%"
        w="100%"
      >
        <Fade direction="right" style={{paddingTop: isPortrait ? "50%" : "0px"}}>
          <Image alt="Tenis de mesa" height={500} src={tennis} width={500} />
        </Fade>
      </Center>
      <Container h="100%" maxW="8xl" mt="0px">
        <Fade>
          <Box
            color="white"
            paddginBottom="25%"
            paddingTop={["50%", "40%", "35%", "35%", "28%"]}
            w={["100%", "100%", 400, 500, 700]}
          >
            <Slider
              dots
              arrows={false}
              autoplay={true}
              autoplaySpeed={4000}
              slidesToScroll={1}
              slidesToShow={1}
              speed={600}
            >
              <Text
                as="cite"
                fontSize={["xl", null, "2xl"]}
                h={[90, null, 150]}
                textAlign="center"
                w="100%"
              >
                &quot;Es un deporte que permite inculcar valores muy importantes, como el
                sacrificio, la entrega, la disciplina, el compañerismo, la generosidad y el
                esfuerzo.&quot;
              </Text>

              <Text
                as="cite"
                fontSize={["xl", null, "2xl"]}
                h={[90, null, 150]}
                textAlign="center"
                w="100%"
              >
                &quot;El deporte nos ayuda, y más el tenis de mesa, a educar íntegramente a la
                persona.&quot;
              </Text>
            </Slider>
          </Box>
        </Fade>
      </Container>
    </Box>
  )
}

export default Motivation
