import React, { useContext } from "react";
import { Context } from "../store/appContext";
import fondoHome from "../../img/fondo_home.jpg";
import "../../styles/home.css";
import { AppSlider } from "../component/AppSlider";
import { Enrolled } from "./Enrolled.jsx"

export const Home = () => {
	const { store, actions } = useContext(Context);

	if (store.isAdmin) {
		return (
		<div className="text-center mt-5">
			<Enrolled />
		
		</div>
	);
		} else {
			return (<div className="text-center" >
			
		
		
		
		</div>)
		}
};
