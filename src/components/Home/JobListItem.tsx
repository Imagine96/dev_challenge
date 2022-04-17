import React from "react";
import { Box, Text, Link, useMediaQuery } from "@chakra-ui/react";
import DetailsBtn from "./DetailsBtn"
import { JobType } from "../../lib/types";
import { GiEarthAmerica } from "react-icons/gi";
import { AiOutlineClockCircle, AiOutlineLink } from "react-icons/ai"

interface Props {
    jobAd: JobType
}

const JobsListItem: React.FC<Props> = ({ jobAd }) => {

    const [isSmall] = useMediaQuery('(max-width: 700px)')

    return (
        <Box padding="12px" _hover={{ shadow: "xl" }} fontSize="sm" paddingX={isSmall ? "4px" : "12px"} display="grid" gridTemplateColumns="1fr" gridTemplateRows="0.8fr 0.2fr" backgroundColor="white" rounded="8px" shadow="md" gap="1rem" >
            <Box display="flex" flexDirection="column" gap="10px"  >
                <Link _hover={{
                    textDecoration: "none",
                    color: "brand.blue"
                }} href={jobAd.redirect_url} target="_blank" referrerPolicy="no-referrer" >
                    <Text fontSize="md" > {jobAd.title} </Text>
                </Link>
                <Text fontSize="14px"> {[...jobAd.description].splice(0, 100).join("") + " ..."} </Text>
                <Text> {jobAd.category.display_name} </Text>
            </Box>
            <DetailsBtn target={jobAd.title} />
            <Box display="flex" color="brand.gray" flexDirection="row" paddingX="24px" placeItems="center" justifyContent="space-around">
                <Link _hover={{
                    textDecoration: "none",
                    color: "brand.blue"
                }} href={jobAd.redirect_url} target="_blank" referrerPolicy="no-referrer" >
                    <Text display="flex" flexDirection="row" gap="4px" placeItems="center" fontSize="12px" fontWeight="thin">
                        <AiOutlineLink fontSize="18px" /> {" " + "Source"}
                    </Text>
                </Link>
                <Text color="brand.gray" display="flex" flexDirection="row" gap="4px" placeItems="center" fontSize="12px" fontWeight="thin" >
                    <GiEarthAmerica fontSize="18px" /> {" " + jobAd.location.display_name.split(",")[0]}
                </Text>
                <Text color="brand.gray" display="flex" flexDirection="row" gap="4px" placeItems="center" fontSize="12px" fontWeight="thin">
                    <AiOutlineClockCircle fontSize="18px" /> {(Math.ceil((new Date(Date.now()).getTime() - new Date(jobAd.created).getTime()) / (1000 * 60 * 60 * 24))) + " days ago"}
                </Text>
            </Box>
        </Box>
    )
}

export default JobsListItem