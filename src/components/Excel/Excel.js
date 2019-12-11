import React from 'react'
import './Excel.css'

class Excel extends React.Component{

    render(){
        const {headers} = this.props;
        return (
            <table border={'1'} cellSpacing={'0'}>
                <thead>
                    <tr>
                        {headers.map( (header, ind) => <th key={ind}>{header}</th>)}
                    </tr>
                </thead>
            </table>
        )
    }
}

export default Excel;