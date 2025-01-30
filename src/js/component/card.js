import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Card = ({ item, type }) => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();

    
    const uid = item.uid || item.result?.uid;

   
    const isFavorite = store.favorites[type].some(fav => fav.uid === uid);

    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <img src="" className="card-img-top" alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    {type === "people" && `Género: ${item.gender}`}
                    {type === "planets" && `Clima: ${item.climate}`}
                    {type === "vehicles" && `Modelo: ${item.model}`}
                </p>
                <div className="d-flex justify-content-between">
                    <button 
                        className="btn btn-primary"
                        onClick={() => navigate(`/${type}/${uid}`)}
                    >
                        Learn More!
                    </button>
                    <button 
                    className={`btn ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
                    onClick={() => actions.handleFavorite({ uid: item.uid || item.result?.uid, name: item.name, properties: item.properties }, type)}
                    >
                    <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;

