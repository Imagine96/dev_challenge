import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { JobType } from "../../lib/types";

interface Props {
    jobAd: JobType
}

const JobsListItem: React.FC<Props> = ({ jobAd }) => {
    return (
        <Box padding="12px" >
            <Text> {jobAd.title} </Text>
        </Box>
    )
}

export default JobsListItem