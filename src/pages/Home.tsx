import React, { useState, memo } from "react";
import { Box, Spinner, useMediaQuery, Text } from "@chakra-ui/react";
import SearchTopBar from "../components/Home/SearchTopBar";
import Filters from "../components/Home/Filters";
import JobList from "../components/Home/JobList";
import useJobs from "../lib/hooks/useJobs";

interface Props {

}

const Home: React.FC<Props> = () => {

    const [searchWord, setSearchWord] = useState<string>("")
    const onUserSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value)
    }
    const { isLoading, jobsData, fullTime, location, searchHistory, toggleFulltime, updateLocation, search, error } = useJobs()
    const [isSmall] = useMediaQuery('(max-width: 700px)')
    const onSearchSubmit = () => {
        search({
            location: location ?? {
                country: "gb",
                city: "london"
            },
            fullTime: fullTime,
            what: searchWord
        })
    }

    return (
        <>
            <SearchTopBar searchWord={searchWord} updateSearchWord={onUserSearchInput} onSearchSubmit={onSearchSubmit} />
            <Box height="full" marginTop={isSmall ? "12px" : "30px"} width="full" display="grid" gridTemplateColumns={{ sm: "1fr", md: "0.3fr 0.7fr" }} gridTemplateRows={{ md: "1fr" }}>
                <Box >
                    <Filters fullTime={fullTime ?? false} location={location ?? { country: "", city: "" }} searchHistory={searchHistory} updateLocation={updateLocation} search={search} toggleFulltime={toggleFulltime} />
                    {
                        error ? error : null
                    }
                </Box>
                {
                    isLoading ? <Spinner /> : jobsData?.results ? (
                        <JobList jobsList={jobsData.results} />
                    ) : <Text color="brand.gray" > Not jobs add to list </Text>
                }
            </Box>
        </>
    )
}

export default Home