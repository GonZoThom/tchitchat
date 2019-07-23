import React from 'react';

const Loader = ({ loading, render }) => {
    if (loading)
        return <h2>Rooms are coming...</h2>
    return render;
}

export default Loader;