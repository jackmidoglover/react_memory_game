import React from 'react';

const Title = (props) => {
    return (
        <div className="header">
            <h1> Frederic Remington Memory game!</h1>
            <h4>Score: {props.score}
                Highest Score: {props.highest}
            </h4>
        </div>
    )
};

export default Title;