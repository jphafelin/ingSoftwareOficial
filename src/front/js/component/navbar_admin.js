import React from "react";
import { Link } from "react-router-dom";


export const Navbar_Admin = () => {
	return (
		<nav className="navbar rg-header">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-2 mb-2">
				<div className="conteiner-logo">
					<a className="navbar-brand" href="/">
						<img src="..." alt="" width="30" height="24" className="d-inline-block align-text-top"/>
							RUT-GREEN-ADMIN
					</a>
				</div>
				<div>
					<ul className="nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="/Enrolled">Enrolled</Link>
						</li>
						
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="/Administradores">Administradores</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="/Monitor">Monitores</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="/Tipo_de_Eventos">Tipo_de_Eventos</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="/Eventos">Eventos</Link>
						</li>
						<form className="d-grid gap-2 d-md-flex justify-content-md-end">
							<Link to="/login"><a  className="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1" type="button">Log Out</a></Link>
						</form>
					</ul>
				</div>
			</div>
		</nav>
	);
};