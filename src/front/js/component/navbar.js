import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"
import { Navbar_Admin} from "./navbar_admin.js"

export const Navbar = () => {
	const {store, actions} = useContext (Context)
	// coordinar que la variable este cargada cuando un usuario se loguea
	 if (store.isAdmin) {
		return (<Navbar_Admin />)
	}
	 else {
	return (
		<nav className="navbar rg-header">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-2 mb-2">
				<div className="conteiner-logo">
					<a className="navbar-brand" href="#">
						<img src="..." alt="" width="30" height="24" class="d-inline-block align-text-top"/>
							RUT-GREEN
					</a>
				</div>
				<div>
					<ul className="nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="#">Evento</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="/Categorias">Categorias</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="#">Fecha</Link>
						</li>
						<li className="nav-item">

						</li>
						<form class="d-grid gap-2 d-md-flex justify-content-md-end">
							<Link to="/login"><a  class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1" type="button">Iniciar Sesión</a></Link>
							<Link to="/register"><a  class="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1" type="button">Regístrate</a></Link>
						</form>
					</ul>
				</div>
			</div>
		</nav>
	);
};
};
