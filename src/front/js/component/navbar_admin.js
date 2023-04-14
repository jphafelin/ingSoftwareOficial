import React from "react";
import { Link } from "react-router-dom";


export const Navbar_Admin = () => {
	return (
		<nav className="navbar rg-header">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-2 mb-2">
				<div className="conteiner-logo">
				<div className="navbar-brand">
						
						<Link className="nav-link rg-textlink link-secondary" to="/Enrolled">RUT-GREEN</Link>
					</div>
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
						<div className="form-check">
							<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
							<label className="form-check-label" for="exampleRadios1">
								Go to User View
							</label>
						</div>
							<Link to="/login"><p  className="btn btn-rounded justify-content-between mx-md-2 mt-1 mb-1" type="button">Log Out</p></Link>
						</form>
					</ul>
				</div>
			</div>
		</nav>
	);
};