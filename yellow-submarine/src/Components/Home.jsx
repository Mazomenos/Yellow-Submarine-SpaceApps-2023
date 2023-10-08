
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useNavigate, Outlet } from 'react-router-dom';

import TextBox from './textBox';
import Footer from './Footer';

import '../App.css'



function Home() {

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
        <Parallax pages={4} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0.20}>
            <div class="animation_layer parallax" id="sun">
              <div>
                <h2 class="text-gray-400 text-center text-xl pt-3 pl-3"> NASA SPACE APPS </h2>
              </div>
              <div class="container pt-40">
                {/* <h1 class="text-center text-9xl "> PLANKTON </h1> */}
                <img src="./images/logo.png" alt="logo" class="mx-auto" />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.25}>
            <div class="animation_layer parallax" id="backMountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.45}>
            <div class="animation_layer parallax" id="middleMountain"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={.915} speed={0.5}>
            <div class="animation_layer parallax" id="secondLayer"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <div class="animation_layer parallax" id="astronaut"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={.915} speed={0.5}>
            <div class="animation_layer parallax" id="secondLayer" style={{ opacity: 0.8 }}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.5}>
            <div class="animation_layer parallax" id="secondLayer"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={.75} speed={0.7}>
            <div class="animation_layer parallax" id="thirdLayer"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.25} speed={0.7}>
            <div class="animation_layer parallax" id="thirdLayer02"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.5} speed={0.7}>
            <div class="animation_layer parallax" id="thirdLayer02"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.99} speed={0.7}>
            <div class="animation_layer parallax" id="thirdLayer02"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.8} speed={0.8}>
            <div class="animation_layer parallax" id="fourthLayer"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.8}>
            <div class="animation_layer parallax" id="fourthLayer02"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={0.8}>
            <div class="animation_layer parallax" id="fourthLayer02"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.9} speed={0.8}>
            <div class="animation_layer parallax" id="fourthLayer03"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.7} speed={0.9}>
            <div class="animation_layer parallax" id="fifthLayer"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.9}>
            <div class="animation_layer parallax" id="fifthLayer02"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={0.9}>
            <div class="animation_layer parallax" id="fifthLayer02"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.5} speed={0.99}>
            <div class="animation_layer parallax" id="sixthLayer"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.20} >
             <div class="animation_layer parallax" id="walls"></div>
            

          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.15} >
             
            <TextBox />
            <div class="animation_layer parallax" id="ocean_layer_3"></div>

          </ParallaxLayer>

          <ParallaxLayer offset={3.9} speed={0.25} class="bg-blue-900 bg-opacity-50">
            {/* <Footer /> */}
          </ParallaxLayer>

        </Parallax>
      </div>
      <Outlet />
    </>
  );
}

export default Home;