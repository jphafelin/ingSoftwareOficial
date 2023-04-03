import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Enrolled } from "./pages/Enrolled.jsx";
import { Monitor } from "./pages/Monitor.jsx";
import { Administradores } from "./pages/Administradores.jsx";
import { Tipo_de_Eventos } from "./pages/Tipo_de_Eventos.jsx";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import injectContext from "./store/appContext";
import { Private } from "./pages/private";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { EditPerfil } from "./pages/edit_perfil";


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
                        <Route element={<Home />} path="/" />
                        <Route element={<Enrolled />} path="/Enrolled" />
                        <Route element={<Monitor />} path="/Monitor" />
                        <Route element={<Administradores />} path="/Administradores" />
                        <Route element={<Tipo_de_Eventos />} path="/Tipo_de_Eventos" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Private/>} path="/private" />
                        <Route element={<EditPerfil />} path="/edit_perfil" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
