import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const logo = "https://infonegocios.info/content/images/2023/10/24/415577/conversions/star-wars-impactmkt-medium-size.jpg"

const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    return (
        <nav className="navbar navbar-light bg-light px-3 d-flex justify-content-between">
                <Link to="/">
					<img className="starwars-logo p-2" src={logo} height={64} />
				</Link>
            <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favoritos ({favorites.people.length + favorites.planets.length + favorites.vehicles.length})
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    {favorites.people.length === 0 && favorites.planets.length === 0 && favorites.vehicles.length === 0 ? (
                        <li className="dropdown-item text-muted">Aún no hay favoritos añadidos</li>
                    ) : (
                        <>
                            {favorites.people.length > 0 && (
                                <>
                                    <li className="dropdown-header">Personajes</li>
                                    {favorites.people.map((fav, index) => (
                                        <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                            {fav.name}
                                            <button 
                                                className="btn btn-sm btn-danger" 
                                                onClick={() => actions.handleFavorite(fav, "people")}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </li>
                                    ))}
                                </>
                            )}
                            {favorites.planets.length > 0 && (
                                <>
                                    <li className="dropdown-header">Planetas</li>
                                    {favorites.planets.map((fav, index) => (
                                        <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                            {fav.name}
                                            <button 
                                                className="btn btn-sm btn-danger" 
                                                onClick={() => actions.handleFavorite(fav, "planets")}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </li>
                                    ))}
                                </>
                            )}
                            {favorites.vehicles.length > 0 && (
                                <>
                                    <li className="dropdown-header">Vehículos</li>
                                    {favorites.vehicles.map((fav, index) => (
                                        <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                            {fav.name}
                                            <button 
                                                className="btn btn-sm btn-danger" 
                                                onClick={() => actions.handleFavorite(fav, "vehicles")}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </li>
                                    ))}
                                </>
                            )}
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


