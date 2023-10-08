import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useNavigate, Outlet } from 'react-router-dom';

import TextBox from './textBox';

import '../App.css'

function Home() {
  const ref = useRef();

  return (
    <>
      {/* 
      <div class="container text-center">
        <h2 class="text-center">
          NASA SPACE APPS
        </h2>
        <h1 class="text-center">
          PLANKTON
        </h1>
      </div> */}

      <div className="App">
        <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="birds">
              <div class="container pt-44">
                <h2 class="text-center text-2xl "> NASA SPACE APPS </h2>
                <h1 class="text-center text-9xl "> PLANKTON </h1>
              </div>
            </div>

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