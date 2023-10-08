import "../App.css";
import { useNavigate } from 'react-router';

import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// import '../App.css'

function Game() {

  const navigate = useNavigate();

  const Casita = () => {
      navigate("/")
  }

  const ref = useRef();
  
  return (
    <div id="game-frame">
      <div id="game-screen">
        <button id='ReturnButton' onClick={Casita}> RETURN! </button>
      </div>
    </div>
  );
}

export default Game;