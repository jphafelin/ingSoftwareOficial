import React, { Component } from "react";
import '../../styles/style.scss';

export const Footer = () => (
	<nav className="navbar footer  bg-primary justify-content-center mb-4">
	<ul className="nav ">
		
		<li className="nav-item">
			<a className="nav-link rg-textlink" href="#">Nosotros</a>
		</li>
		<li className="nav-item">
			<a className="nav-link rg-textlink" href="#">Contacto</a>
		</li>
		<li className="nav-item">
			<a className="nav-link rg-textlink" href="#">Preguntas Frecuentes</a>
		</li>
	</ul>
	</nav>
);