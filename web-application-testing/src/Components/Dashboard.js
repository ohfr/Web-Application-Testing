import React from 'react';

const Dashboard = (props)  => {

    return (
        <div>
            <button onClick={() => props.updateCounts('strike')}>Strike</button>
            <button onClick={() => props.updateCounts('ball')}>Ball</button>
            <button onClick={() => props.updateCounts('foul')}>Foul</button>
            <button onClick={() => props.updateCounts('hit')}>Hit</button>
        </div>
    )
}

export default Dashboard;