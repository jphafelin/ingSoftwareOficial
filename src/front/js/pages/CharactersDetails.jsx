import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export const CharactersDetails = () => {
  const { store, actions } = useContext(Context);
  const selectCharacter = store.selectCharacter;
  
  const handleOnErrorImg = (e) => {
      e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  };

  if (!selectCharacter.item.id) { 
    return (<Navigate to="/characters"/>)
  } else {
    return (
      <div className="container bg-dark">
        <div className="card mb-3  bg-dark text-light">
          <div className="row g-0">
              <div className="col-md-7 col-lg-6 col-xl-5">
                  
                  <img className="rounded-start" src={selectCharacter.item.url_imagen}></img>
              </div>
              <div className="col-md-5 col-lg-6 col-xl-7 justify-content-end">
                  <div className="card-body">
                      <h1>{selectCharacter.item.name}</h1>
                      <p> </p>
                      
                      <p><strong>Lugar: </strong>{selectCharacter.item.lugar}</p>
                      <p><strong>Descripcion: </strong>{selectCharacter.item.descripcion}</p>
                      <p><strong>Dificultad: </strong>{selectCharacter.item.dificultad}</p>
                      <p><strong>Categoría: </strong>{selectCharacter.item.categoria}</p>
                      <p><strong>Precio: </strong>{selectCharacter.item.precio}€</p>
                      
                  </div>
                  <div className="container text-center col-2 p-5">
			
			<PayPalScriptProvider options={{"client-id":"Afo8929WhwV4xTsDyJ3y5Q5XH4S8o4f2kv380sIBebbr7Qp6nwyXxexAAtfa5ZSrDnt2FNBJalkZA6TK"}}>
				<PayPalButtons 
				createOrder={(data, actions, ) => {
                    const selectCharacter = store.selectCharacter;

                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: selectCharacter.item.precio,
                                },
                            },
                        ],
                    });
                }}
				onApprove={(data, actions) => {
                    
					return actions.order.capture().then(function (details) {
						
						alert(
							"Transacción Correcta"
						);

					});
				}}
                onError={(data, actions) => {
					return actions.order.capture().then(function (details) {
						
						alert(
							"Transacción Incorrecta"
						);

					});
				}}
				/>
			</PayPalScriptProvider>
		
		</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}