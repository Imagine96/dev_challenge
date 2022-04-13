import { Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

interface Props {

}

const Details: React.FC<Props> = () => {

    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { target } = useParams()

    useEffect(() => {
        setIsLoading(false)
        if (target) {
            /* fetch data */
            console.log(target)
        }
    }, [])

    return (
        <Box>
            {isLoading ? "loading" : "Details"}
        </Box>
    )
}

export default Details