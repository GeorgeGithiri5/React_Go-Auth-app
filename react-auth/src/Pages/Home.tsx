import React, { useEffect } from 'react';

const Home = (props:{name:string}) => {

    return (
        <div>
            {props.name ? 'Hi ' + props.name: 'You are not authenticated'}
        </div>
    );
};

export default Home;