import React from "react";
import { Link } from "react-router-dom";
import '../../styles/style.scss';

export const Footer = () => (
	<nav className="navbar footer fixed-bottom rg-background justify-content-center">
	<ul className="nav ">
		
		<li className="nav-item">
			<Link to="/nosotros" className="foot-link text-decoration-none">
			<p className="nav-link rg-textlink fs-6" >NOSOTROS</p>
			</Link>
		</li>
		<li className="nav-item">
			<Link to="/contacto" className="foot-link text-decoration-none">
			<p className="nav-link rg-textlink fs-6" >CONTACTO</p>
			</Link>
		</li>
		<li className="nav-item">
			<Link to="/preguntasfrecuentes" className="foot-link text-decoration-none">
			<p className="nav-link rg-textlink fs-6" >PREGUNTAS FRECUENTES</p>
			</Link>
		</li>
	</ul>
	</nav>
);