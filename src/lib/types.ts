export interface JobType {
    "salary_max": number,
    "redirect_url": string,
    "description": string,
    "title": string,
    "salary_is_predicted": string,
    "salary_min": number,
    "created": string,
    "__CLASS__": string,
    "latitude": number,
    "id": string,
    "adref": string,
    "longitude": number
    "category": {
        "display_name": string
        "label": string,
    }
    "location": {
        "display_name": "Barcelona",
        "area": string[]
    }
    "company": {
        "display_name": string,
    },

}

export interface JobsData {
    mean: number,
    count: number,
    results: JobType[]
}

export interface SearchHistory {
    q: {
        location: {
            city: string,
            country: string
        },
        what: string,
        where: string,
        fullTime?: boolean
    }
    result: JobsData
}

export interface JobsQ {
    location: {
        city: string,
        country: string
    },
    what: string,
    where: string,
    fullTime?: boolean
}


