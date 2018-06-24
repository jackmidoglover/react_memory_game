import React from 'react';

const Imagecard = props => {
    return(
        <div className="card imageCard col-md-4" >
            <img src={props.image} alt={props.name} key={props.id} onClick={() => props.CardHandler(props.id)} />
        </div>
    )
};

export default Imagecard;