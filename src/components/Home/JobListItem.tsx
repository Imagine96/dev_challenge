import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import { JobType } from "../../lib/types";
import { GiEarthAmerica } from "react-icons/gi";
import { AiOutlineClockCircle, AiOutlineLink } from "react-icons/ai"

interface Props {
    jobAd: JobType
}

const JobsListItem: React.FC<Props> = ({ jobAd }) => {
    return (
        <Box padding="12px" _hover={{ shadow: "xl" }} fontSize="sm" display="grid" gridTemplateColumns="1fr" gridTemplateRows="0.8fr 0.2fr" backgroundColor="white" rounded="8px" shadow="md" gap="1rem" >
            <Box display="flex" flexDirection="column" gap="10px" paddingX="12px" >
                <Link _hover={{
                    textDecoration: "none",
                    color: "brand.blue"
                }} href={jobAd.redirect_url} target="_blank" referrerPolicy="no-referrer" >
                    <Text fontSize="md" > {jobAd.title} </Text>
                </Link>
                <Text fontSize="14px"> {jobAd.description} </Text>
                <Text> {jobAd.category.display_name} </Text>
            </Box>
            <Box display="flex" color="brand.gray" flexDirection="row" paddingX="24px" placeItems="center" justifyContent="flex-end" gap="32px">
                <Link _hover={{
                    textDecoration: "none",
                    color: "brand.blue"
                }} href={jobAd.redirect_url} target="_blank" referrerPolicy="no-referrer" >
                    <Text display="flex" flexDirection="row" gap="4px" placeItems="center" fontSize="12px" fontWeight="thin">
                        <AiOutlineLink /> {" " + "Check out in Adzuna"}
                    </Text>
                </Link>
                <Text color="brand.gray" display="flex" flexDirection="row" gap="4px" placeItems="center" fontSize="12px" fontWeight="thin" >
                    <GiEarthAmerica /> {" " + jobAd.location.display_name}
                </Text>
                <Text color="brand.gray" display="flex" flexDirection="row" gap="4px" placeItems="center" fontSize="12px" fontWeight="thin">
                    <AiOutlineClockCircle /> {" " + (new Date(jobAd.created)).toDateString()}
                </Text>
            </Box>
        </Box>
    )
}

export default JobsListItem