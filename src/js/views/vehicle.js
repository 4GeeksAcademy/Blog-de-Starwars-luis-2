import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehicleView = () => {
    const { id } = useParams();
    const { actions } = useContext(Context);
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        const fetchVehicle = async () => {
            const data = await actions.getVehicleById(id);
            setVehicle(data.result.properties);
        };
        fetchVehicle();
    }, [id, actions]);

    if (!vehicle) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h1>{vehicle.name}</h1>
            <p><strong>Modelo:</strong> {vehicle.model}</p>
            <p><strong>Fabricante:</strong> {vehicle.manufacturer}</p>
            <p><strong>Pasajeros:</strong> {vehicle.passengers}</p>
            <p><strong>Velocidad Máxima:</strong> {vehicle.max_atmosphering_speed}</p>
            <p><strong>Clase:</strong> {vehicle.vehicle_class}</p>
        </div>
    );
};

export default VehicleView;

