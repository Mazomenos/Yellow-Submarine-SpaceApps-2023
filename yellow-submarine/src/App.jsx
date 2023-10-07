import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './Components/textBlock';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <Parallax pages={1.5} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.40}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={.7} speed={0.40}>
        <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;