import React from "react"
import { Box } from "@chakra-ui/react"
import { JobType } from "../../lib/types"
import JobListItem from "./JobListItem"

interface Props {
    jobsList: JobType[],
}

const JobsList: React.FC<Props> = ({ jobsList }) => {

    return (
        <Box width="full" height="full" border="1px">
            {
                jobsList.map(jobAd => <JobListItem key={jobAd.id} jobAd={jobAd} />)
            }
        </Box>
    )

}

export default JobsList