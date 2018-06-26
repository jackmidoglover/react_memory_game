import React from 'react';
import "./ImageCard.css";

const Imagecard = props => {
    return(
    <div className="col-md-3">
        <div className="card">
            <div className="card-body">
                <img className="card-img" src={props.image} alt={props.name} key={props.id} onClick={() => props.ClickHandler(props.id)} />
            </div>
        </div>
    </div>
    )
};

export default Imagecard;