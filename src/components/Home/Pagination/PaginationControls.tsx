import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import PageBtn from "./PageBtn";
import { IoArrowForward, IoArrowBack } from "react-icons/io5"

interface Props {
    currentPage: number,
    lastPage: number,
    actions: {
        nextPage: (currentPageIndex: number) => void;
        prevPage: (currentPageIndex: number) => void;
        firstPage: () => void;
        lastPage: () => void;
        targetPage: (target: number) => void;
    }
    currentPageIndex: number
}

const PaginationControls: React.FC<Props> = ({ actions, currentPage, lastPage, currentPageIndex }) => {

    const pages: number[] = []

    for (let i = 0; i <= lastPage - 1; i++) {
        pages.push(i)
    }

    return (
        <Box display="flex" flexDirection="row" placeItems="center" justifyContent="flex-end" gap="12px"  >
            <IconButton aria-label="prev-page" height="36px" width="36px" rounded="4px" border="1px" borderColor="brand.blue" color="brand.blue"
                _pressed={{
                    backgroundColor: "brand.blue",
                    color: "white",
                    borderColor: "white",
                }}
                _hover={{
                    backgroundColor: "brand.blue",
                    color: "white",
                    borderColor: "white",
                }} onClick={() => actions.prevPage(currentPageIndex)} icon={<IoArrowBack />} />
            {
                pages.map(pageNumber => <PageBtn key={pageNumber} active={pageNumber === currentPage} action={() => { actions.targetPage(pageNumber) }} content={(pageNumber + 1).toString()} />)
            }
            <IconButton aria-label="next-page" height="36px" width="36px" rounded="4px" border="1px" borderColor="brand.blue" color="brand.blue"
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
                onClick={() => actions.nextPage(currentPageIndex)} icon={<IoArrowForward />} />
        </Box>
    )
}

export default PaginationControls