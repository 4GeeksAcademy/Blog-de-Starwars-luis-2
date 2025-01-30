import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetView = () => {
    const { id } = useParams();
    const { actions } = useContext(Context);
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            const data = await actions.getPlanetById(id);
            setPlanet(data.result.properties);
        };
        fetchPlanet();
    }, [id, actions]);

    if (!planet) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h1>{planet.name}</h1>
            <p><strong>Clima:</strong> {planet.climate}</p>
            <p><strong>Población:</strong> {planet.population}</p>
            <p><strong>Terreno:</strong> {planet.terrain}</p>
            <p><strong>Diámetro:</strong> {planet.diameter}</p>
            <p><strong>Gravedad:</strong> {planet.gravity}</p>
        </div>
    );
};

export default PlanetView;