import React from "react";
import { Center, Text } from "@chakra-ui/react";

interface Props {
    action: () => void,
    content: string,
    active: boolean
}

const PageBtn: React.FC<Props> = ({ action, content, active }) => {
    return (
        <Center
            cursor="pointer" height="36px" width="36px" rounded="4px" border="1px" backgroundColor={active ? "brand.blue" : "transparent"} borderColor={active ? "brand.blue" : "brand.gray"} color={active ? "white" : "brand.gray"}
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
            onClick={action} >
            <Text fontWeight="semibold" fontSize="12px" >
                {content}
            </Text>
        </Center>
    )
}

export default PageBtn