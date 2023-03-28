import React from "react";
import { Link } from "react-router-dom";


export const Navbar_Admin = () => {
	return (
		<nav className="navbar rg-header">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-2 mb-2">
				<div className="conteiner-logo">
					<a className="navbar-brand" href="#">
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
							<Link className="nav-link rg-textlink link-secondary" to="/participante">Participantes</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="#">Administradores</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="#">Monitores</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link rg-textlink link-secondary" to="#">Eventos</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};