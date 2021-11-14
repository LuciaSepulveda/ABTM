import {Box, Text, VStack} from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import {motion} from "framer-motion"

import {Autoridad} from "../../types/types"
import user from "../../public/user.png"

interface Props {
  autoridad: Autoridad
}

const Card2: React.FC<Props> = ({autoridad}) => {
  const [show, setShow] = React.useState<boolean>(false)

  return (
    <VStack
      border="2px solid #EBEAED"
      borderRadius="10px"
      h="300px"
      paddingTop={4}
      w="100%"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Box borderRadius="50%" h="140px" overflow="hidden" position="relative" w="130px">
        <Image
          alt={`Foto de ${autoridad.name}`}
          layout="fill"
          objectFit="cover"
          src={autoridad.photo?.url ? autoridad.photo.url : user}
        />
      </Box>
      <VStack borderRadius="10px" h="160px" justify="center" position="relative" w="100%">
        {show && (
          <motion.div
            animate={{
              height: "100%",
              borderTopRightRadius: `${Math.random() * 99 + 1}%`,
              borderTopLeftRadius: `${Math.random() * 99 + 1}%`,
            }}
            initial={{
              height: "0%",
              borderTopRightRadius: "0%",
              borderTopLeftRadius: "5%",
            }}
            style={{
              position: "absolute",
              width: "100%",
              bottom: 0,
              overflow: "hidden",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
            transition={{duration: 1}}
          >
            <Box
              bg={show ? "red.400" : "transparent"}
              borderRadius="10px"
              borderRadiusBottom="10px"
              h="100%"
              width="100%"
            />
          </motion.div>
        )}
        {!show && <div style={{position: "absolute"}} />}
        <Text fontSize="2xl" zIndex="1">
          {autoridad.name}
        </Text>
        <Text fontSize="2xl" zIndex="1">
          {autoridad.position}
        </Text>
      </VStack>
    </VStack>
  )
}

export default Card2
