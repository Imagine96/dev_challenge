import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Roboto, sans-serif',
        sub: 'Montserrat, san-serif'
    },
    colors: {
        brand: {
            blue: "#1E86FF"
        }
    }
})

export default theme