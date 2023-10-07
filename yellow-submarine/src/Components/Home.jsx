import { useRef } from 'react';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../App.css'

import { useNavigate, Outlet } from 'react-router-dom';
import Game from './Game';

import TextBox from './textBox';


function Home() {
  const ref = useRef();

  const navigate = useNavigate();

  const goToGame = () => {
    navigate(Game);
  }

  return (
    <>
      <div className="App">
        <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="artback"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div class="animation_layer parallax" id="jungle1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.40}>
            <div class="animation_layer parallax" id="manonmountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.25}>
            <TextBox />

          </ParallaxLayer>
        </Parallax>


      </div>
      <Outlet />

    </>
  );
}

export default Home;