import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Roboto, sans-serif',
        sub: 'Montserrat, san-serif'
    },
    colors: {
        brand: {
            blue: "#1E86FF",
            text: "#334680",
            gray: "#B9BDCF",
            heading: "#282538"
        }
    }
})

export default theme