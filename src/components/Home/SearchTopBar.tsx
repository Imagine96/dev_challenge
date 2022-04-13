import React from "react";
import { Box, useMediaQuery, Input, Center, Image } from "@chakra-ui/react";
import Button from "../Button/Button"
import { BsBriefcase } from "react-icons/bs"
import bg from "../../public/backgroundImg.png";

interface Props {
    updateSearchWord: (e: React.ChangeEvent<HTMLInputElement>) => void,
    searchWord: string,
    onSearchSubmit: () => void
}

const SearchTopBar: React.FC<Props> = ({ updateSearchWord, searchWord, onSearchSubmit }) => {

    const [isSmall] = useMediaQuery('(max-width: 700px)')

    return (
        <Box marginX="auto" rounded="8px" overflow="hidden" position="relative" maxWidth={"1201px"} width="full" height="138px" /* bgImage={bg} rounded="8px" backgroundSize="contain" bgAttachment="scroll" backgroundPosition="center" backgroundRepeat="no-repeat" */ >
            <Box padding="4px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex="10"
                maxWidth="790px"
                width="90%"
                height="55px"
                rounded="8px"
                bgColor="white"
                display="flex"
                flexDirection="row"
                placeContent="center"
                justifyContent="space-between"
            >
                <Box display="flex" width="full" paddingLeft={isSmall ? "4px" : "36px"} flexDirection="row" placeItems="center">
                    <Center fontSize="14px" color="gray.400">
                        <BsBriefcase />
                    </Center>
                    <Input fontFamily="Roboto"
                        width="full"
                        _focus={{}}
                        fontSize="14px"
                        border="none"
                        placeholder="Title, companies, expertise or benefits"
                        onChange={updateSearchWord} value={searchWord}
                    />
                </Box>
                <Button type="button" text="search" onClick={onSearchSubmit} />
            </Box>
            <Image alt="city view" zIndex="0" maxWidth={"1201px"} height="138px" src={bg} />
        </Box >
    )
}

export default SearchTopBar