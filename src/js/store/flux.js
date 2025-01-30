const getState = ({ getStore, getActions, setStore }) => {
	const initialState = JSON.parse(localStorage.getItem("starWarsState")) || {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			

			favorites: {
				people: [],
				planets: [],
				vehicles: [],
				
			},
		},
	};
	return {
		...initialState,

		actions: {
			getAllPeople: async () => {
				try {
					const response = await fetch(`https://swapi.tech/api/people`);
					const data = await response.json();
					setStore({ people: data.results });
					localStorage.setItem(
						"starWarsState",
						JSON.stringify({ ...initialState, store: { ...initialState.store, people: data.results } })
					);
				} catch (error) {
					console.log(error);
				}
			},

			getPeopleById: async (id) => {
				try {
					const response = await fetch(`https://swapi.tech/api/people/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},

			getAllVehicles: async () => {
				try {
					const response = await fetch(`https://swapi.tech/api/vehicles`);
					const data = await response.json();
					setStore({ vehicles: data.results });
					localStorage.setItem(
						"starWarsState",
						JSON.stringify({ ...initialState, store: { ...initialState.store, vehicles: data.results } })
					  );
				} catch (error) {
					console.log(error);
				}
			},

			getVehicleById: async (id) => {
				try {
					const response = await fetch(`https://swapi.tech/api/vehicles/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},

			getAllPlanets: async () => {
				try {
					const response = await fetch(`https://swapi.tech/api/planets`);
					const data = await response.json();
					setStore({ planets: data.results });
					localStorage.setItem(
						"starWarsState",
						JSON.stringify({ ...initialState, store: { ...initialState.store, planets: data.results } })
					  );
				} catch (error) {
					console.log(error);
				}
			},

			getPlanetById: async (id) => {
				try {
					const response = await fetch(`https://swapi.tech/api/planets/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},

			handleFavorite: (data, type) => {
				const store = getStore();
				const { favorites } = store;
			
			
				if (!favorites[type]) return;
			
				const existingFavorite = favorites[type].some(fav => fav.uid === data.uid);
			
				// Añadir o eliminar según la existencia
				const updatedFavorites = existingFavorite
					? favorites[type].filter(fav => fav.uid !== data.uid)  // Eliminar si ya existe
					: [...favorites[type], { uid: data.uid, name: data.name, properties: data.properties }];  // Añadir si no existe
			
				// Actualizar el store
				setStore({ favorites: { ...favorites, [type]: updatedFavorites } });
			},

		},
	};
};

export default getState;
