import React from 'react';
import Excel from '../Excel/';


const headers = ['Book', 'Author', 'Language', 'Published', 'Sales'];

function App() {
  return (
    <div className="App">
      <Excel headers={headers} />
    </div>
  );
}

export default App;
