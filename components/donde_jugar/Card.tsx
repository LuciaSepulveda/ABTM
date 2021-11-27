import {Box, Stack, VStack} from "@chakra-ui/react"
import React from "react"
import {motion} from "framer-motion"

interface Props {
  front: JSX.Element
  src: string
}

const MotionBox = motion(Box)

const Card3: React.FC<Props> = ({front, src}) => {
  return (
    <Stack
      alignItems="center"
      borderRadius="xl"
      direction={["column", null, "row"]}
      h={["100%", null, 500]}
      justify="space-between"
      p={8}
      w="100%"
    >
      <VStack borderRadius="xl" color="white" m="auto" p={4} w={["100%", "90%", null, "50%"]}>
        {front}
      </VStack>
      <MotionBox
        bg="gray"
        borderRadius="xl"
        h={[300, 300, null, 300]}
        initial={{opacity: 0, y: 20}}
        overflow="hidden"
        transition={{duration: 0.5, delay: 0.2}}
        viewport={{once: true}}
        w={["100%", "90%", null, "40%"]}
        whileInView={{opacity: 1, y: 0}}
      >
        <iframe allowFullScreen={true} height="100%" loading="lazy" src={src} width="100%" />
      </MotionBox>
    </Stack>
  )
}

export default Card3
