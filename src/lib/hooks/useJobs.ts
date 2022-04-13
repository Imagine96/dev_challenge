import { useCallback, useEffect, useState } from "react";
import { getJobs, getUserLocations, isNewQ } from "../utils";
import { JobsData, SearchHistory } from "../types";

const useJobs = () => {
    const [location, setLocation] = useState<{
        country: string,
        city: string
    }>()
    const [isLocationLoading, setIsLocationLoading] = useState<boolean>()
    const [isLoading, setIsLoading] = useState<boolean>()
    const [jobsData, setJobList] = useState<JobsData>()
    const [fullTime, setFulltime] = useState<boolean>()
    const [error, setError] = useState<false | string>(false)
    const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([])

    const addToSearchHistory = (data: SearchHistory) => {
        const qIndex = isNewQ(data.q, searchHistory)
        if (qIndex !== -1) {
            return
        }
        else {
            setSearchHistory(prev => {
                return [...prev, data]
            })
        }
    }

    useEffect(() => {
        setIsLocationLoading(true)
        if (!location) {
            getUserLocations()
                .then(data => {
                    setLocation({
                        country: (data.country_code as string).toLowerCase(),
                        city: data.city as string
                    })
                    setIsLocationLoading(false)
                })
                .catch((err) => {
                    setIsLocationLoading(false)
                    setError(err)
                })
        } else {

        }
    }, [])

    useEffect(() => {
        if (location && !isLocationLoading) {
            search({ location })
        }
    }, [isLocationLoading, location])

    const updateLocation = useCallback((country: string, city: string) => {
        setLocation({
            country,
            city
        })
    }, [setLocation])

    const search = useCallback((q: { location: { country: string, city: string }, where?: string, what?: string, fullTime?: boolean }) => {
        setIsLoading(true)
        if (location) {
            const cachedQ = isNewQ({
                location: location,
                what: q.what ? q.what : "",
                where: q.where ? q.where : ""
            }, searchHistory)
            if (cachedQ !== -1) {
                setJobList(searchHistory[cachedQ].result)
                setIsLoading(false)
            } else {
                getJobs(location.country, q.what, q.fullTime, q.where)
                    .then(data => {
                        setJobList(data)
                        addToSearchHistory({
                            q: {
                                what: q.what ? q.what : "",
                                where: q.where ? q.where : "",
                                location: location,
                                fullTime: fullTime
                            },
                            result: data
                        })
                        setIsLoading(false)
                    }).catch(err => {
                        setError(err)
                        setIsLoading(false)
                    })
            }
        }

    }, [getJobs, setJobList, addToSearchHistory, setIsLoading])

    const toggleFulltime = useCallback(() => {
        if (location) {
            setFulltime(prev => !prev)
            search({ location })
        }
    }, [setFulltime])

    return {
        isLoading,
        jobsData,
        fullTime,
        location,
        searchHistory,
        toggleFulltime,
        updateLocation,
        search,
        error
    }
}

export default useJobs

