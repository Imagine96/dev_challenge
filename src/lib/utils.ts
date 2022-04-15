import { glApiKey, jobsApi } from "./api"
import axios from "axios"
import { JobsData, SearchHistory, JobsQ } from "./types"
import responseSample from "./responseSample.json"

const headers = {
    "Accept": "aplication/json"
}

export const getUserLocations = async (): Promise<any> => {
    const resp = await axios.get(`https://geolocation-db.com/json/${glApiKey}`)
    return resp.data
}


export const getJobs = async (page: number, country: string, what?: string, fulltime?: boolean, where?: string) => {

    try {
        /* const resp = await axios.get(`http://api.adzuna.com/v1/api/jobs/${country}/search/${page}?app_id=${jobsApi.appId}&app_key=${jobsApi.key}&category=it-jobs${fulltime ? "&full_time=1" : ""}${where ? "&" + new URLSearchParams({ where: where }) : ""}&results_per_page=20${what ? "&" + new URLSearchParams({ what: what }) : ""}&content-type=application/json`)
        return resp.data as JobsData */
        return JSON.parse(JSON.stringify(responseSample)) as JobsData
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

export const splitIntoPages = <T>(arr: T[], max: number): T[][] => {
    if (max - 1 >= arr.length) {
        return [[...arr]]
    }

    const splitted: T[][] = [[]]

    let count: number = 0
    let page: number = 0

    arr.forEach(item => {
        if (!splitted[page]) {
            splitted[page] = []
        }
        if (count < max) {
            splitted[page].push(item)
            count++
            if (count === max) {
                page++
                count = 0
            }
        }
    })

    return splitted
}





