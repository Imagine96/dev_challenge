import React from "react";
import { Center, Link } from "@chakra-ui/react";

interface Props {
    target: string
}

const PageBtn: React.FC<Props> = ({ target }) => {
    return (
        <Center
            maxWidth="120px"
            cursor="pointer" paddingX="8px" paddingY="6px" rounded="6px" border="2px"
            _pressed={{
                backgroundColor: "brand.blue",
                color: "white",
                borderColor: "white",
            }}
            _hover={{
                backgroundColor: "brand.blue",
                color: "white",
                borderColor: "white",
            }}
        >
            <Link href={`/${target}`} fontWeight="bold" fontSize="12px" >
                Details
            </Link>
        </Center>
    )
}

export default PageBtn