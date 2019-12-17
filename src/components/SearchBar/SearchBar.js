import React from 'react';
import './SearchBar.css';

const SearchBar = ({headers, search}) => {
   return( search 
    ? <tr>{headers.map((item, id) => <td key={id}><input type="text" /></td>)}</tr>
    : null)
}

export default SearchBar;