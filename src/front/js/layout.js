import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Enrolled } from "./pages/Enrolled.jsx";
import { Monitor } from "./pages/Monitor.jsx";
import { Administradores } from "./pages/Administradores.jsx";
import { Tipo_de_Eventos } from "./pages/Tipo_de_Eventos.jsx";
import { Eventos_Running } from "./pages/Eventos_Running.jsx";
import { Categorias } from "./pages/Categorias.jsx";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import {AppSlider} from "./component/AppSlider";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                <Navbar />   
                
                    <Routes>
                        <Route element={<Home />} path="/home" />
                        <Route element={<Enrolled />} path="/Enrolled" />
                        <Route element={<Monitor />} path="/Monitor" />
                        <Route element={<Administradores />} path="/Administradores" />
                        <Route element={<Tipo_de_Eventos />} path="/Tipo_de_Eventos" />
                        <Route element={<Eventos_Running />} path="/Eventos_Running" />
                        <Route element={<Categorias />} path="/Categorias" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
