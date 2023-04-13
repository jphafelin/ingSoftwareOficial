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
import { Equipo } from "./component/equipo";
import { PreguntasFrecuentes } from "./pages/preguntasFrecuentes";
import { Nosotros } from "./pages/nosotros";
import { Demo } from "./pages/demo";
import { Categorias } from "./pages/Categorias.jsx";
import { CrearTipoEvento } from "./pages/Crear_Tipo_Evento.jsx";
import { EditAdmin } from "./pages/Editar_Administrador.jsx";
import { EditMonitor } from "./pages/Editar_Monitor.jsx";
import { EditarTipoEvento } from "./pages/Editar_Tipo_Evento.jsx";
import { EventosRunning } from "./pages/EventosRunning.jsx";
import { EventosCiclismo } from "./pages/EventosCiclismo.jsx";
import { EventosSenderismo } from "./pages/EventosSenderismo.jsx";
import { EventosTriatlon } from "./pages/EventosTriatlon.jsx";
import { RegisterAdmin } from "./pages/Registrar_Administrador.jsx";
import { RegisterMonitor } from "./pages/Registrar_Monitor.jsx";
import { Contacto } from "./pages/contacto";
import { EventosTodos } from "./pages/EventosTodos.jsx";
import { CharactersDetails } from "./pages/CharactersDetails.jsx";
import { Characters } from "./pages/Characters.jsx";


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
                        <Route element={<Equipo />} path="/equipo" />
                        <Route element={<PreguntasFrecuentes />} path="/preguntasFrecuentes" />
                        <Route element={<Nosotros />} path="/nosotros" />
                        <Route element={<Categorias />} path="/categorias" />
                        <Route element={<CrearTipoEvento />} path="/crear_tipo_evento" />
                        <Route element={<EditAdmin />} path="/editar_administrador" />
                        <Route element={<EditMonitor />} path="/editar_monitor" />
                        <Route element={<EditarTipoEvento />} path="/editar_tipo_evento" />
                        <Route element={<EventosRunning />} path="/eventos-running" />
                        <Route element={<EventosSenderismo />} path="/eventos-senderismo" />
                        <Route element={<EventosTriatlon />} path="/eventos-triatlon" />
                        <Route element={<EventosCiclismo />} path="/eventos-ciclismo" />
                        <Route element={<RegisterAdmin />} path="/register_administrador" />
                        <Route element={<RegisterMonitor />} path="/register_monitor" />
                        <Route element={<Contacto />} path="/contacto" />
                        <Route element={<EventosTodos />} path="/eventos-todos" />
                        <Route path="/characters/:theid" element={<CharactersDetails />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route element={<Demo />} path="/demo" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
