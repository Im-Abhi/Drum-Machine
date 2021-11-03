import React from 'react';

function Controls({ name, changeControls }){
    return (
        <div className="controls">
        <h3>{name}</h3>
        <label className="switch">
            <span className="slider" onClick={changeControls}></span>
        </label>
        </div>
    );
}

export default Controls;