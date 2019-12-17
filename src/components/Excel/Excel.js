import React from 'react';
import ToolBar from '../ToolBar/';
import SearchBar from '../SearchBar/';
import './Excel.css';

class Excel extends React.Component {

    constructor(props) {
        super();
        this.state = {
            headers:  props.headers,
            data: props.data,
            sortby: null,
            descending: false,
            edit: null,
            search: false
            
        };
        this.preSearchData = props.data;
        this.sort = this.sort.bind(this);
        this.showEditor = this.showEditor.bind(this);
        this.save = this.save.bind(this);
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

    showEditor(e) {
        this.setState({
            edit: {
                row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex
            }
        })
    }

    save(e) {
        e.preventDefault();

        const input = e.target.firstChild;

        const data = this.state.data.slice();

        data[this.state.edit.row][this.state.edit.cell] = input.value;

        this.setState({
            data,
            edit: null
        })
    }

    toggleSearch() {
        if(this.state.search) {
            this.setState({
                data: this.preSearchData,
                search: false
            });
            this.preSearchData = null;
        }
    }

    render(){
        const {headers, data, edit} = this.state;
        const styles = {
            wrapper: {
                maxWidth: '50vw',
                margin: 'auto'
            }
        }
        return (
            <div style={styles.wrapper} className="wrapper">
                <ToolBar onClick={() => this.toggleSearch()}/>
                <table 
                    className="Main-table"
                    border={"1"} 
                    cellSpacing={"0"} 
                    cellPadding="4"
                >
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
                    <tbody onDoubleClick={this.showEditor} >
                        <SearchBar headers={headers} search={this.state.search}/>
                        {   
                            data.map( (row, rowIdx) => {
                                return(
                                    <tr  key={rowIdx} >
                                        {
                                            row.map( (td, idx) => {
                                                if(edit && edit.row === rowIdx && edit.cell === idx) {
                                                    return (
                                                        <td  key={idx} >
                                                            <form action="" onSubmit={this.save}>
                                                                <input type="text" defaultValue={td} />
                                                            </form>
                                                        </td> 
                                                    )
                                                }
                                                return <td  key={Math.random()} data-row={rowIdx}>{td}</td>;
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Excel;