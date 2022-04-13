import { glApiKey, jobsApi } from "./api"
import axios from "axios"
import { JobsData, SearchHistory, JobsQ } from "./types"

const headers = {
    "Accept": "aplication/json"
}

export const getUserLocations = async (): Promise<any> => {
    const resp = await axios.get(`https://geolocation-db.com/json/${glApiKey}`)
    return resp.data
}


export const getJobs = async (country: string, what?: string, fulltime?: boolean, where?: string) => {
    try {
        const resp = await axios.get(`http://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${jobsApi.appId}&app_key=${jobsApi.key}&category=it-jobs${fulltime ? "&full_time=1" : ""}${where ? "&" + new URLSearchParams({ where: where }) : ""}&results_per_page=20${what ? "&" + new URLSearchParams({ what: what }) : ""}&content-type=application/json`)
        return resp.data
        /* return JSON.parse(JSON.stringify(responseSample)) as JobsData */
    } catch (err) {
        throw (err as Error).message
    }

}

export const getJobDetails = async () => {

}

export function isNewQ(newEntry: JobsQ, history: SearchHistory[]) {
    let entryIndex: number = -1
    history.forEach((entry, index) => {
        if (newEntry.fullTime === entry.q.fullTime && newEntry.location.city === entry.q.location.city && entry.q.location.country === newEntry.location.country && entry.q.what === newEntry.what && entry.q.where === newEntry.where) {
            entryIndex = index
        }
    })
    return entryIndex
}



function checkForParam(params: {
    [key: string]: string
}, param: string) {
    const keys = Object.keys(params)
    return keys.includes(param)
}

function buildSearchParams(params?: {
    [key: string]: string
}): URLSearchParams {

    const searchParams = new URLSearchParams({
        appId: jobsApi.appId,
        app_key: jobsApi.key,
        results_per_page: "20",
        "content-type": "application/json",
        ...params
    })
    return searchParams
}





