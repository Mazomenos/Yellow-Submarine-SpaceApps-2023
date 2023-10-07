import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBox from './Components/textBox';
import TextBlock from './Components/textBlock';
import './App.css';


function App() {
  return (
    <div className="App">
      <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={.7} speed={0.40}>
          <TextBlock/>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.4}>
          <TextBox/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;