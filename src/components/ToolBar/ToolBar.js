import React, {Fragment} from 'react';
import './ToolBar.css';

const ToolBar = ({onClick, download}) => {
    return (
        <Fragment>
            <button onClick={() => onClick()}>Search</button>
            <a href="data.json" onClick={ (ev, type = 'json') => download(type, ev) }>Export JSON</a>
            <a href="data.csv" onClick={ (ev, type = 'csv') => download(type, ev)  }>Export CSV</a>
        </Fragment>
    )
}

export default ToolBar;