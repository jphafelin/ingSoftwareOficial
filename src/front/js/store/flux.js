const BACKEND_URL = process.env.BACKEND_URL
/* const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			},
		actions: {
			// Use getActions to call a function within a fuction
			

		
			
		    
			getUserData:
				async () => {
					const store = getStore();
					const requestOptions = {
					  method: "GET",
					  headers: {
						Authorization: `Bearer ${store.token}`,
					  },
					};
					try {
					  const res = await fetch("JOSE PABLO", requestOptions);
					  const data = await res.json();
					  return data;
					} catch (error) {
					  console.log(error);
					}
			},

			

		}
	};
};

export default getState;

 */


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			register: async (email, password, name, last_name, numero_telefono, nombre_contacto_emergencia, numero_contacto_emergencia, asistencia_medica) => {
				const requestOptions = {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password,
						name: name,
						last_name: last_name,
						numero_telefono: numero_telefono,
						nombre_contacto_emergencia: nombre_contacto_emergencia,
						numero_contacto_emergencia: numero_contacto_emergencia,
						asistencia_medica: asistencia_medica,


					})
				};
				try {
					const resp = await fetch(`${BACKEND_URL}/api/register-participante`, requestOptions)
					if (resp.status != 200) {
						alert("An error has occurred while creating the user");
						return false;
					}
					const data = await resp.json();
					console.log(data);

					return true;
				}
				catch (error) {
					console.error("There has been an error creating a user")
				}
			},

			login: async (email, password) => {

				const requestOptions = {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};
				try {
					const resp = await fetch(`${BACKEND_URL}/api/login`, requestOptions)
					console.log(`${BACKEND_URL}/login`)
					if (resp.status != 200) {
						alert("An error has occurred");
						return false;
					}
					const data = await resp.json();
					localStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token })

					return true;
				}
				catch (error) {
					console.error("There has been an error login in")
				}
			},
			synctoken: () => {
				const token = localStorage.getItem("token");
				console.log("App just loaded, synchi	ng the local storage");
				if (token && token != "" && token != undefined) setStore({ token: token });
			},

			logout: () => {
				const token = localStorage.removeItem("token");
				setStore({ token: null });
			},
		}
	};
};

export default getState;


