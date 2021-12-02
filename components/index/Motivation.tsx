import {Center, Container, Text, Box} from "@chakra-ui/react"
import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import {motion} from "framer-motion"
import {useMediaQuery} from "react-responsive"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MotionBox = motion(Box)

const Motivation: React.FC = () => {
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <Box h="100vh" position="relative" w="100%">
      <Center
        bg="#3C6ECD"
        bottom="14%"
        boxShadow="0px 0px 14px #2e2e2e"
        h={[710, null, 660]}
        paddingLeft={[0, 0, 300, 400, 600, 700]}
        position="absolute"
        top="14%"
        w="100%"
      >
        <MotionBox
          initial={{opacity: 0, x: 300}}
          style={{
            paddingTop: isPortrait ? "50%" : "0px",
            filter: "drop-shadow(10px 0px 4px #2e2e2e83)",
          }}
          transition={{duration: 0.7}}
          viewport={{once: true}}
          whileInView={{opacity: 1, x: 0}}
        >
          <Image priority alt="Tenis de mesa" height={500} src={"/Tabletennis2.png"} width={500} />
        </MotionBox>
      </Center>
      <Container h="100%" maxW="8xl" mt="0px">
        <MotionBox
          color="white"
          initial={{opacity: 0}}
          paddingBottom="25%"
          paddingTop={["50%", "40%", "35%", "35%", "28%"]}
          transition={{duration: 0.7}}
          viewport={{once: true}}
          w={["100%", "100%", 400, 500, 700]}
          whileInView={{opacity: 1}}
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
              &quot;Es un deporte que permite inculcar valores muy importantes, como el sacrificio,
              la entrega, la disciplina, el compañerismo, la generosidad y el esfuerzo.&quot;
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
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Motivation
