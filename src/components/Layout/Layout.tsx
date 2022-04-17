import React from "react";
import { Box, Text, Heading, useMediaQuery, Link } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    const [isSmall] = useMediaQuery('(max-width: 700px)')

    return (
        <Box width="full" color="brand.text" position="relative" backgroundColor="#F6F7FB" height="full" paddingBottom="4rem">
            <Box width={isSmall ? "95%" : "90%"} display="flex" flexDirection="column" minHeight="100vh" marginX="auto" maxWidth="1201px">
                <Heading color="brand.heading" fontSize="24px" marginTop={isSmall ? "12" : "32px"} marginBottom="32px" fontWeight="700" lineHeight="36px" > IT <Text display="inline" fontWeight="300" > {" Jobs"} </Text> </Heading>
                {children}
                <Box position="fixed" bottom="0" paddingY={isSmall ? "4px" : "12px"} width="full" textAlign="center">
                    <Text fontSize="12px" as="sub" color="gray.500" fontFamily="sub"  >
                        created by <Text as="span" fontFamily="sub"> Imagine96 </Text> - <Link href="https://devchallenges.io/" >devchallenge.io</Link>
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout

