import React, {Fragment} from 'react';
import './ToolBar.css';

const ToolBar = ({onClick, download}) => {
    return (
        <Fragment>
            <button onClick={() => onClick()}>Search</button>
            <a href="data.json" onClick={ download }>Export JSON</a>
            <a href="data.csv" onClick={ download }>Export CSV</a>
        </Fragment>
    )
}

export default ToolBar;