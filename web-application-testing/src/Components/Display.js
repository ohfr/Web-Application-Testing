import React from 'react';


const Display = (props) => {

    return (
        <div>
            <h2 role="strike" value={props.strikes}>Strikes: {props.strikes}</h2>
            <h2>Balls: {props.balls} </h2>
        </div>
    )
}
export default Display;