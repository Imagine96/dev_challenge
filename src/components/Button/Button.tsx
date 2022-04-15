import React from "react"
import { Button as ChakraButton, useMediaQuery } from "@chakra-ui/react"

interface Props {
    onClick: (args: any) => void,
    text: string,
    type: "button" | "submit" | "reset" | undefined
}

const Button: React.FC<Props> = ({ onClick, text, type }) => {

    const [isSmall] = useMediaQuery('(max-width: 700px)')
    return (
        <ChakraButton
            type={type}
            _hover={{
                color: "brand.blue",
                bgColor: "gray.200"
            }}
            _active={{
                bgColor: "gray.400",
                color: "white"
            }}
            _focus={{}}
            color="white" paddingX="1rem" maxHeight="147px" height="full" width={isSmall ? "30%" : "40%"} minWidth="50px" maxWidth={"146px"} bgColor="brand.blue" onClick={onClick}
        >
            {text}
        </ChakraButton>
    )
}

export default Button