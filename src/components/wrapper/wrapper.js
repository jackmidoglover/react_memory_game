import React from 'react';


const Wrapper = props => {
    return (
    <div className="container">
        <div className="wrapper col-md-10 offset-md-1">
        {props.children}
        </div>
    </div>
    )
};

export default Wrapper;
