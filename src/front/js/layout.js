import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Enrolled } from "./pages/Enrolled.jsx";
import { Monitor } from "./pages/Monitor.jsx";
import { Administradores } from "./pages/Administradores.jsx";
import { Tipo_de_Eventos } from "./pages/Tipo_de_Eventos.jsx";
import { EventosRunning } from "./pages/EventosRunning.jsx";
import { EventosSenderismo } from "./pages/EventosSenderismo.jsx";
import { EventosTriatlon } from "./pages/EventosTriatlon.jsx";
import { EventosCiclismo } from "./pages/EventosCiclismo.jsx";

import { Categorias } from "./pages/Categorias.jsx";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { RegisterAdmin } from "./pages/Registrar_Administrador.jsx";
import { RegisterMonitor } from "./pages/Registrar_Monitor.jsx";
import { CrearTipoEvento } from "./pages/Crear_Tipo_Evento.jsx";
import { EditarTipoEvento } from "./pages/Editar_Tipo_Evento.jsx";
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
                        <Route element={<Home />} path="/" />
                        
                        <Route element={<Enrolled />} path="/Enrolled" />
                        <Route element={<Monitor />} path="/Monitor" />
                        <Route element={<Administradores />} path="/Administradores" />
                        <Route element={<Tipo_de_Eventos />} path="/Tipo_de_Eventos" />

                        <Route element={<EventosRunning />} path="/eventos-running" />
                        <Route element={<EventosSenderismo />} path="/eventos-senderismo" />
                        <Route element={<EventosTriatlon />} path="/eventos-triatlon" />
                        <Route element={<EventosCiclismo />} path="/eventos-ciclismo" />

                        <Route element={<Categorias />} path="/Categorias" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<RegisterAdmin />} path="/register_administrador" />
                        <Route element={<RegisterMonitor />} path="/register_monitor" />
                        <Route element={<CrearTipoEvento />} path="/crear_tipo_evento" />
                        <Route element={<EditarTipoEvento />} path="/editar_tipo_evento" />
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
