import React from 'react';
import './SearchBar.css';

const styles = {
    input: {
        display: 'inline-block',
        width: '90%'
    }
}
const SearchBar = ({headers, search, onChange}) => {
    if(search){
        return (
            <tr>
                {
                    headers.map((item, id) => {
                        return(
                            <td key={id}>
                                <input 
                                    type="text" 
                                    style={styles.input} 
                                    onChange={onChange}
                                    data-idx={id}
                                />
                            </td>
                        )
                    })
                }
            </tr>
        );
    } 

    return null;

}

export default SearchBar;