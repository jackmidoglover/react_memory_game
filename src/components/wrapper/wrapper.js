import React from 'react';
import './Wrapper.css'


const Wrapper = props => {
    return (
    <div className="container-fluid">
    <div className="row header">
        <div className="col-8 align-self-center">
            <h1 className="text-left"> Frederic Remington Memory game!</h1>
        </div>
        <div className="col-4 align-self-center">
            <h4 className="text-right">Score: {props.score} {"  "}
                Highest Score: {props.highest}
            </h4>
        </div>
        </div>
        <div className="row">
            <div className="wrapper col-10 offset-1">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
    )
};

export default Wrapper;
