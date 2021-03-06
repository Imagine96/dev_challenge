import React, { memo } from "react";
import { Box, useMediaQuery, Heading } from "@chakra-ui/react";
import { JobType } from "../../lib/types";
import JobListItem from "./JobListItem";
import usePagination from "../../lib/hooks/usePagination"
import PaginationControls from "./Pagination/PaginationControls"

interface Props {
    jobsList: JobType[],
}

const JobsList: React.FC<Props> = ({ jobsList }) => {

    const [isSmall] = useMediaQuery('(max-width: 700px)')

    const MemoizedJob = memo((jobAd: JobType) => {
        return (
            <JobListItem jobAd={jobAd} />
        )
    })

    const memoizedJobList = jobsList.map(jobAd => <MemoizedJob {...jobAd} key={jobAd.id} />)

    const { currentPage, currentPageIndex, maxPageIndex, actions } = usePagination(memoizedJobList)
    return (
        <Box width="full" height="full" padding="4px" display="flex" flexDirection="column" gap="16px" >
            {isSmall ? <Heading color="brand.heading" fontWeight="thin" > Results </Heading> : null}
            {
                currentPage
            }
            <PaginationControls actions={actions} currentPageIndex={currentPageIndex} lastPage={maxPageIndex + 1} />
        </Box>
    )

}

export default JobsList