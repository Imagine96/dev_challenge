import React, { useState, useMemo, ReactNode, useCallback } from "react";
import { splitIntoPages } from "../utils";

const usePagination = (fullList: ReactNode[], max: number = 4) => {
    const maxPageIndex = useMemo(() => (Math.floor(fullList.length / max) - 1), [fullList, max])
    const pages = useMemo(() => splitIntoPages(fullList, max), [fullList, max])

    const [currentPageIndex, setCurrentPage] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const targetPage = useCallback((target: number) => {
        if (!isLoading) {
            setIsLoading(true)
        }
        if (target >= maxPageIndex) {
            setCurrentPage(maxPageIndex)
        } else if (target < 0) {
            setCurrentPage(0)
        } else {
            setCurrentPage(target)
        }
    }, [maxPageIndex])

    const nextPage = useCallback((currentPageIndex: number) => {
        if (!isLoading) {
            setIsLoading(true)
        }
        if (maxPageIndex === currentPageIndex) {
            setIsLoading(false)
            setCurrentPage(0)
            return
        }
        setCurrentPage(prev => prev + 1)
        setIsLoading(false)
    }, [maxPageIndex])

    const prevPage = useCallback((currentPageIndex: number) => {
        if (!isLoading) {
            setIsLoading(true)
        }
        console.log(currentPageIndex)
        if (currentPageIndex <= 0) {
            setCurrentPage(maxPageIndex)
            setIsLoading(false)
            return
        }
        setCurrentPage(prev => prev - 1)
        setIsLoading(false)
    }, [maxPageIndex])

    const firstPage = useCallback(() => {
        if (!isLoading) {
            setIsLoading(true)
        }
        setCurrentPage(0)
        setIsLoading(false)
    }, [])

    const lastPage = useCallback(() => {
        if (!isLoading) {
            setIsLoading(true)
        }
        setCurrentPage(maxPageIndex)
        setIsLoading(false)
    }, [])

    return {
        currentPageIndex,
        maxPageIndex,
        currentPage: pages[currentPageIndex],
        actions: {
            nextPage,
            prevPage,
            firstPage,
            lastPage,
            targetPage
        }
    }
}

export default usePagination

