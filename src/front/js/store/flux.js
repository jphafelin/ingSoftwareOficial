const BACKEND_URL = process.env.BACKEND_URL

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            token: null,
            user: [],
            participante: [],
            message: null,
            isAdmin: false, // crear logica
            enrolled: [],
            monitores: [],
            administradores: [],
            tipo_evento: [],
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
                } catch (error) {
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

                    if (resp.status != 200) {
                        console.log("An error has occurred");
                        return false;
                    }
                    const data = await resp.json();
                    const userId = {
                        id: data.id
                    }
                    console.log(data)
                    localStorage.setItem("userId", JSON.stringify(userId))
                    localStorage.setItem("token", data.access_token);
                    setStore({
                        token: data.access_token
                    })

                    return true;
                } catch (error) {
                    console.error("There has been an error login in")
                }
            },
            synctoken: () => {
                const token = localStorage.getItem("token");
                console.log("App just loaded, synching the local storage");
                if (token && token != "" && token != undefined) setStore({
                    token: token
                });
            },
            logout: () => {
                const token = localStorage.removeItem("token");
                setStore({
                    token: null
                });
            },
            getEnrolled: async () => {
                const store = getStore();
                const host = process.env.BACKEND_URL;
                const url = host + "/api/register-participante";
                const requestOptions = {
                    method: "GET",
                    ContentType: "application/json",
                }
                const response = await fetch(url, requestOptions);
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log(" Data User: ", data.results);
                    setStore({
                        enrolled: data.results,
                    });
                }
            },
            getMonitores: async () => {
                const store = getStore();
                const host = process.env.BACKEND_URL;
                const url = host + "/api/register-monitor";
                const requestOptions = {
                    method: "GET",
                    ContentType: "application/json",
                }
                const response = await fetch(url, requestOptions);
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log(" Data Monitores: ", data.results);
                    setStore({
                        monitores: data.results,
                    });
                }
            },
            getAdministradores: async () => {
                const store = getStore();
                const host = process.env.BACKEND_URL;
                const url = host + "/api/register-administrador";
                const requestOptions = {
                    method: "GET",
                    ContentType: "application/json",
                }
                const response = await fetch(url, requestOptions);
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log(" Data Administrador: ", data.results);
                    setStore({
                        administradores: data.results,
                    });
                }
            },
            getTipo_de_Eventos: async () => {
                const store = getStore();
                const host = process.env.BACKEND_URL;
                const url = host + "/api/tipo-de-evento";
                const requestOptions = {
                    method: "GET",
                    ContentType: "application/json",
                }
                const response = await fetch(url, requestOptions);
                console.log(response)
                if (response.ok) {
                    const data = await response.json();
                    console.log(" Data Administrador: ", data.results);
                    setStore({
                        tipo_evento: data.results,
                    });
                }
            },
            /* getEnrolled: async () => {
				const store= getStore();
 				const host= process.env.BACKEND_URL;
				const url= host +"/api/register-participante";
				const requestOptions= {
					method:"GET",
					ContentType: "application/json",
				}
				const response = await fetch(url,requestOptions);
				console.log(response)
				if (response.ok) {
					const data = await response.json();
					console.log( " Data User: ", data.results );
					setStore({enrolled:data.results,});
			  }
			},
			getMonitores: async () => {
				const store= getStore();
				const host= process.env.BACKEND_URL;
				const url= host +"/api/register-monitor";
				const requestOptions= {
					method:"GET",
					ContentType: "application/json",
				}
				const response = await fetch(url,requestOptions);
				console.log(response)
				if (response.ok) {
					const data = await response.json();
					console.log( " Data Monitores: ", data.results );
					setStore({monitores:data.results,});
			  }
			},
			getAdministradores: async () => {
				const store= getStore();
				const host= process.env.BACKEND_URL;
				const url= host +"/api/register-administrador";
				const requestOptions= {
					method:"GET",
					ContentType: "application/json",
				}
				const response = await fetch(url,requestOptions);
				console.log(response)
				if (response.ok) {
					const data = await response.json();
					console.log( " Data Administrador: ", data.results );
					setStore({administradores:data.results,});
			  }
			},
			getTipo_de_Eventos: async () => {
				const store= getStore();
				const host= process.env.BACKEND_URL;
				const url= host +"/api/tipo-de-evento";
				const requestOptions= {
					method:"GET",
					ContentType: "application/json",
				}
				const response = await fetch(url,requestOptions);
				console.log(response)
				if (response.ok) {
					const data = await response.json();
					console.log( " Data Administrador: ", data.results );
					setStore({tipo_evento:data.results,});
			  }

			}, */

            getUserInfo: async () => {
                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    },
                }
                const userId = JSON.parse(localStorage.getItem("userId"))
                try {
                    const response = await fetch(`${BACKEND_URL}/api/users/${userId.id}`, requestOptions)
                    const user = await response.json();
                    setStore({
                        ...getStore(),
                        user
                    })
                } catch (error) {
                    console.log(error);
                };
            },



            getInfoParticipante: async () => {
                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    },
                }
                const userId = JSON.parse(localStorage.getItem("userId"))
                try {
                    const response = await fetch(`${BACKEND_URL}/api/participante/${userId.id}`, requestOptions)
                    const participante = await response.json();
                    setStore({
                        ...getStore(),
                        participante
                    })
                } catch (error) {
                    console.log(error);
                };
            },

            getActualizarParticipante: async (email, password, name, last_name, numero_telefono, nombre_contacto_emergencia, numero_contacto_emergencia, asistencia_medica) => {
                const requestOptions = {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },

                    body: JSON.stringify({
                        ...(email && {
                            email
                        }),
                        ...(password && {
                            password
                        }),
                        ...(name && {
                            name
                        }),
                        ...(last_name && {
                            last_name
                        }),
                        ...(numero_telefono && {
                            numero_telefono
                        }),
                        ...(nombre_contacto_emergencia && {
                            nombre_contacto_emergencia
                        }),
                        ...(numero_contacto_emergencia && {
                            numero_contacto_emergencia
                        }),
                        ...(asistencia_medica && {
                            asistencia_medica
                        }),
                    })
                }
                console.log(requestOptions)

                const userId = JSON.parse(localStorage.getItem("userId"))
                try {
                    const response = await fetch(`${BACKEND_URL}/api/participante/${userId.id}`, requestOptions)
                    const participante = await response.json();
                    setStore({
                        ...getStore(),
                        participante
                    })
                    return true
                } catch (error) {
                    console.log(error);
                };
            },
        }
    };
}
export default getState;