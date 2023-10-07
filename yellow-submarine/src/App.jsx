import { useState, useRef } from 'react'

import moon from './moon.png'
import cat from './cat.gif'
import land from './land.png'
import bob from './bob.gif'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();


  return (



    <div>
      <div className="Top">
        <h2>
          Ocean Gandens
        </h2>
        <h1>
          PLANKTATION(PROBISIONAL)
        </h1>
      </div>

      <Parallax pages={4} ref={ref}>




        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
        // style={{
        //   // backgroundImage: `url(${moon})`,
        //   // backgroundSize: 'cover',

        // }}
        />

        {/* <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer> */}

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={bob} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Hola</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          {/* <h2>~~ BRUH ~~</h2> */}
        </ParallaxLayer>
      </Parallax>

      <div>

        

      </div>


    </div>
  )
}

export default App
