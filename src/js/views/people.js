import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleView = () => {
    const { id } = useParams();
    const { actions } = useContext(Context);
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const fetchPerson = async () => {
            const data = await actions.getPeopleById(id);
            setPerson(data.result.properties);
        };
        fetchPerson();
    }, [id, actions]);

    if (!person) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h1>{person.name}</h1>
            <p><strong>Género:</strong> {person.gender}</p>
            <p><strong>Altura:</strong> {person.height}</p>
            <p><strong>Peso:</strong> {person.mass}</p>
            <p><strong>Color de cabello:</strong> {person.hair_color}</p>
            <p><strong>Color de piel:</strong> {person.skin_color}</p>
        </div>
    );
};

export default PeopleView;
