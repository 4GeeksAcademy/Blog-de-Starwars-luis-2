import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";

const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container mt-4">
            <h2>Personajes</h2>
            <div className="d-flex flex-wrap">
                {store.people.map((person, index) => (
                    <Card key={index} item={person} type="people" />
                ))}
            </div>

            <h2>Planetas</h2>
            <div className="d-flex flex-wrap">
                {store.planets.map((planet, index) => (
                    <Card key={index} item={planet} type="planets" />
                ))}
            </div>

            <h2>Vehículos</h2>
            <div className="d-flex flex-wrap">
                {store.vehicles.map((vehicle, index) => (
                    <Card key={index} item={vehicle} type="vehicles" />
                ))}
            </div>
        </div>
    );
};

export default Home;
