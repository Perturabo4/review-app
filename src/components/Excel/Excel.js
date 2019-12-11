import React from 'react'
import './Excel.css'

class Excel extends React.Component{

    constructor(props) {
        super();
        this.state = {
            headers:  props.headers,
            data: props.data,
            sortby: null,
            descending: false
        }
        this.sort = this.sort.bind(this);
    }

    sort(e) {
        const column = e.target.cellIndex;
        const data = [...this.state.data];
        const descending = this.state.sortby === column && !this.state.descending;

        data.sort( (a, b) => {
          return descending
                ? a[column] < b[column] ? 1 : -1 
                : a[column] > b[column] ? 1 : -1 
        });

        this.setState({
            data,
            sortby: column,
            descending
        });
    }

    render(){
        const {headers, data} = this.state;
        return (
            <table border={'1'} cellSpacing={'0'} cellPadding="4">
                <thead onClick={this.sort}>
                    <tr>
                        {headers.map( (header, ind) => {
                            if(this.state.sortby === ind){
                                header += this.state.descending ? ' \u2191' : ' \u2193';
                            }

                            return <th key={ind}>{header}</th>
                        })}
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