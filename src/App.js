import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App;
