import React from 'react';
import './ToolBar.css';

const ToolBar = ({onClick}) => {
    return (
        <button onClick={() => onClick()}>Search</button>
    )
}

export default ToolBar;