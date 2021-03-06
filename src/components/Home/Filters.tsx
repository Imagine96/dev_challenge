import React, { useState, useEffect, useCallback } from "react";
import { Box, Checkbox, Text, Select, Input, Stack, useMediaQuery } from "@chakra-ui/react";
import { GiEarthAmerica } from "react-icons/gi"
import useDebounce from "../../lib/hooks/useDebounce";
import { SearchHistory } from "../../lib/types"

interface Props {
    fullTime: boolean,
    toggleFulltime: () => void,
    updateLocation: (country: string, city: string) => void,
    searchHistory: SearchHistory[],
    location: {
        country: string,
        city: string
    },
    search: (q: {
        location: {
            country: string;
            city: string;
        };
        where?: string | undefined;
        what?: string | undefined;
        fullTime?: boolean | undefined;
    }) => void
}

const Filters: React.FC<Props> = ({ fullTime, searchHistory, toggleFulltime, location, updateLocation, search }) => {

    const [isSmall] = useMediaQuery('(max-width: 700px)')

    const [where, setWhere] = useState<string>("")
    const debounced = useDebounce(where, 500)

    const onChangedCountry = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        updateLocation(e.target.value, "")
        setWhere("")
    }, [updateLocation])

    useEffect(() => {
        searchWhere(debounced)
    }, [debounced])

    const searchWhere = useCallback((debounced: string) => {
        if (location && debounced.length >= 3) {
            search({
                location,
                where: debounced,
                fullTime: fullTime ? fullTime : undefined
            })
        }
    }, [location])

    const onWhereUpdate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setWhere(e.target.value)
    }, [setWhere])

    return (
        <Box display="grid" padding="5px" gridTemplateColumns="1fr" gap="10px" >
            <Box display="flex" gap="12px" flexDirection="row" placeItems="center"  >
                <Checkbox checked={fullTime} onChange={toggleFulltime} />
                <Text fontSize="14px" fontFamily="var(--chakra-fonts-heading)" > Full time </Text>
            </Box>
            <Select placeholder='Country' onChange={onChangedCountry} value={location.country} >
                <option value='gb'>Great Britain</option>
                <option value='us'> Us </option>
                <option value='es'>Spain</option>
            </Select>
            <Box
                padding="12px"
                shadow="md"
                backgroundColor="white"
                rounded="4px"
                width="full"
                height="fit-content"
                display="flex" gap="12px" flexDirection="row" placeItems="center"
                fontSize="20px"
            >
                <Box color="brand.gray" ><GiEarthAmerica fontSize="24px" /></Box>
                <Input
                    fontFamily="Roboto"
                    border="none"
                    width="full"
                    fontSize="14px"
                    placeholder="Zip code, city, location"
                    onChange={onWhereUpdate} value={where}
                />
            </Box>
            {/*<Text fontSize="16" color="brand.heading"> History: <br /> </Text>
            <Stack direction={isSmall ? "row" : "column"} shadow="md" padding="8px" maxHeight="xl" overflow="auto">
                {
                    searchHistory.map((entry, index) => (
                        <Box key={index} padding="8px" minWidth="120px" display="flex" flexDirection="column" placeItems={isSmall ? "center" : "flex-start"} rounded="4px" backgroundColor="white" shadow="md" >
                            <Text fontSize="14px" > Country: {" "} {entry.q.location.country} </Text>
                            <Text fontSize="14px" > Where: {" "} {entry.q.where !== "" ? entry.q.where + ", " : "any"} </Text>
                            <Text fontSize="14px" > Search:<br /> {" "} {entry.q.what ? entry.q.what : "it-jobs"}  <br /> result: {entry.result.count} </Text>
                        </Box>
                    ))
                }
            </Stack> */}
        </Box>
    )
}

export default Filters