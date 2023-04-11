import React, { useState, useEffect, useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center col-2">
			
			<PayPalScriptProvider options={{"client-id":"Afo8929WhwV4xTsDyJ3y5Q5XH4S8o4f2kv380sIBebbr7Qp6nwyXxexAAtfa5ZSrDnt2FNBJalkZA6TK"}}>
				<PayPalButtons 
				createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "10",
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
				/>
			</PayPalScriptProvider>
		
		</div>
	);
};

