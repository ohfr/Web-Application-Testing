import React from 'react';

const Dashboard = (props)  => {

    return (
        <div>
            <button onClick={() => props.updateCounts('strike')}>Strike</button>
            <button onClick={() => console.log('ball')}>Ball</button>
            <button onClick={() => console.log('foul')}>Foul</button>
            <button onClick={() => console.log('hit')}>Hit</button>
        </div>
    )
}

export default Dashboard;