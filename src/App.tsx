import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import theme from "./lib/chakraUiTheme";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Layout from "./components/Layout/Layout"

interface Props {

}

const App: React.FC<Props> = ({ }) => {
    return (
        <ChakraProvider theme={theme} >
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details" />
                        <Route path=":target" element={<Details />} />
                        <Route />
                    </Routes>
                </BrowserRouter>
            </Layout>
        </ChakraProvider>
    )
}

export default App

