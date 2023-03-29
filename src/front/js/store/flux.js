/* const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token : null,
			},
		actions: {
			// Use getActions to call a function within a fuction
			synctoken : () =>{
				const token = localStorage.getItem("token");
				console.log("App just loaded, synching the local storage");
				if (token && token != "" && token != undefined) setStore({token: token}); 
			},  

		login: async (email, password) => {
			    
					const requestOptions = {
						method : "POST",
						headers : {
							"Content-type": "application/json"
						},
						body : JSON.stringify({
							email : email,
							password : password
						})
					};
			try {
						const resp = await fetch("JPABLO api/login", requestOptions)
						if (resp.status != 200){
							alert("An error has occurred");
							return false;
						} 
						const data = await resp.json();                     
						localStorage.setItem("token", data.access_token);
						setStore({token: data.access_token})

						return true;
					}
					catch(error){
						console.error("There has been an error login in")
					}
			},

			register: async (email, password)=>{
				const requestOptions = {
					method : "POST",
					headers : {
						"Content-type": "application/json"
					},
					body : JSON.stringify({
						email : email,
						password : password
					})
				};
				try {
					const resp = await fetch("jose pablo", requestOptions)
					if (resp.status != 200){
						alert("An error has occurred while creating the user");
						return false;
					} 
					const data = await resp.json(); 
					console.log(data);                  

					return true;
				}
				catch(error){
					console.error("There has been an error creating a user")
				}
			},
		    
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

			logout: ()=>{
				const token = localStorage.removeItem("token");
				setStore({token:null}); 
			},

		}
	};
};

export default getState;

 */


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			isAdmin: true, // crear logica
			enrolled: [],
			monitores: [],
			administradores: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getEnrolled: async () => {
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
		}
	};
};

export default getState;


