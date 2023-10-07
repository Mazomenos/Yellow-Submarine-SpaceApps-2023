


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Componenentes/Home';
import Game from './Game.jsx';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<Home name="Home" />} path="/" />
          <Route element={<Game name="Game" />} path="/jueguito" />
        </Routes>
      </Router>

    </div>
  );
}

export default App;