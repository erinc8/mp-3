
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import Home from "./components/mains/Home/Home.tsx";
import Achievements from "./components/mains/Achievements.tsx";
import Credits from "./components/mains/Credits.tsx";
import Documents from "./components/mains/Documents.tsx";
import Education from "./components/mains/Education.tsx";
import Employment from "./components/mains/Employment.tsx";
import References from "./components/mains/References.tsx";
import styled from "styled-components";
import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";

const AppContainer = styled.div`
    display: flex;
    min-height: 100vh;
    margin-left:5%;
    margin-right:5%;
    
`

function Root() {
    return (
        <>

            <Header/>
            <AppContainer>
            <Nav/>
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/Achievements`} element ={<Achievements />} />
                <Route path={`/Documents`} element ={<Documents />} />
                <Route path={`/Education`} element ={<Education/>} />
                <Route path={`/Employment`} element ={<Employment/>} />
                <Route path={`/References`} element ={<References/>} />
                <Route path={`*`} element ={<Credits/>} />
            </Routes>
            </AppContainer>

            <Footer/>


        </>
    );
}

const router = createBrowserRouter(
    [{path:"*", Component: Root}],
);

export default function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}


