import React from 'react'
import './Excel.css'

class Excel extends React.Component{

    render(){
        const {headers, data} = this.props;
        return (
            <table border={'1'} cellSpacing={'0'}>
                <thead>
                    <tr>
                        {headers.map( (header, ind) => <th key={ind}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( row => {
                            return(
                                <tr  key={Math.random()} >
                                    {
                                        row.map( td => <td  key={Math.random()}>{td}</td>)
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Excel;