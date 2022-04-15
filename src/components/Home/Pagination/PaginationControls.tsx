import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import PageBtn from "./PageBtn";
import { IoArrowForward, IoArrowBack } from "react-icons/io5"

interface Props {
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

const PaginationControls: React.FC<Props> = ({ actions, lastPage, currentPageIndex }) => {

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
                currentPageIndex === 0 ? null : <PageBtn key={0} action={() => actions.targetPage(0)} content={"1"} active={false} />
            }
            {
                pages.map((pageNumber) => {
                    if (pageNumber >= currentPageIndex && pageNumber < currentPageIndex + 4) {
                        return <PageBtn key={pageNumber} action={() => actions.targetPage(pageNumber)} content={(pageNumber + 1).toString()} active={pageNumber === currentPageIndex} />
                    }
                })
            }
            {
                currentPageIndex > lastPage - 4 ? null : <PageBtn key={lastPage} action={() => actions.targetPage(lastPage)} content={lastPage.toString()} active={false} />
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