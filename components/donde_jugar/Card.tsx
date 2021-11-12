import {Box, Stack, VStack} from "@chakra-ui/react"
import React from "react"
import {motion} from "framer-motion"

interface Props {
  front: JSX.Element
  src: string
}

const MotionStack = motion(Stack)

const Card3: React.FC<Props> = ({front, src}) => {
  return (
    <MotionStack
      alignItems="center"
      borderRadius="xl"
      direction={["column", null, "row"]}
      h={["100%", null, 500]}
      initial={{opacity: 0, y: 100}}
      justify="space-between"
      p={8}
      transition={{type: "spring", bounce: 0.4}}
      viewport={{once: true}}
      w="100%"
      whileInView={{opacity: 1, y: 0}}
    >
      <VStack borderRadius="xl" color="white" m="auto" p={4} w={["100%", "90%", null, "50%"]}>
        {front}
      </VStack>
      <Box
        bg="gray"
        borderRadius="xl"
        h={[300, 300, null, 300]}
        overflow="hidden"
        w={["100%", "90%", null, "40%"]}
      >
        <iframe allowFullScreen={true} height="100%" loading="lazy" src={src} width="100%" />
      </Box>
    </MotionStack>
  )
}

export default Card3
