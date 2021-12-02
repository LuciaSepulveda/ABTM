import React from "react"
import Image, {ImageProps as NextImageProps} from "next/image"
import {Box, chakra, ImageProps as ChakraImageProps} from "@chakra-ui/react"

type Props = ChakraImageProps & NextImageProps

const Factory = chakra(Image, {
  baseStyle: {
    backgroundColor: "gray.300",
  },
  shouldForwardProp: (prop) =>
    [
      "src",
      "alt",
      "width",
      "height",
      "layout",
      "blurDataURL",
      "onLoadingComplete",
      "placeholder",
    ].includes(prop),
})

const ImageComponent: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  return (
    <Box
      borderRadius={props.borderRadius}
      height={props.height}
      overflow="hidden"
      width={props.width}
    >
      <Factory
        blurDataURL={props.blurDataURL}
        transition="filter .5s"
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
        filter={isLoading ? "blur(10px)" : "blur(0)"}
      />
    </Box>
  )
}

export default ImageComponent
