import './App.css';
import React, { useImperativeHandle, forwardRef } from 'react';

import { AnimatorGeneralProvider } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import * as Arwes from '@arwes/core';
import './App.css';
const SOUND_ASSEMBLE_URL = 'https://playground.arwes.dev/assets/sounds/typing.mp3';

const animatorGeneral = { duration: { enter: 1500, exit: 200 } };
const audioSettings = { common: { volume: 1.25 } };
const playersSettings = { assemble: { src: [SOUND_ASSEMBLE_URL], loop: true } };
const bleepsSettings = { assemble: { player: 'assemble' } };


const  Frame = forwardRef((props, ref)=> {
  const [activate, setActive] = React.useState(true);
  const [Frame, setFrame] = React.useState(Arwes.FrameBox)

 function removeFrame() {
   
   setActive(false)
 }

 function Hexagon() {
   setFrame(Arwes.FrameHexagon)
 }

 function Pentagon () { 
   setFrame(Arwes.FramePentagon)
 }
 function Lines () {
    setFrame(Arwes.FrameLines)
 }
 function Corner () { 
   setFrame(Arwes.FrameCorners)
 }
 function Underlines () { setFrame(Arwes.FrameUnderline)
 }

 useImperativeHandle(ref, () => {
  return {
    removeFrame: removeFrame,
    Hexagon: Hexagon,
    Pentagon: Pentagon,
    Lines: Lines,
    Corner: Corner,
    Underlines: Underlines
  };
});
  return (

    <Arwes.ArwesThemeProvider>
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <Arwes.StylesBaseline />
        <AnimatorGeneralProvider
         animator={animatorGeneral}>
          <Frame
          animator={{activate }}
          className={props.classCpm}
          palette={props.theme}
          cornerWidth={1}
          cornerLength={20}
          showContentLines
          contentLineWidth={1}
           >
              <div className={`${ props.className }`}>     
              {props.children}  
</div>
          </Frame>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </Arwes.ArwesThemeProvider>

  );
}
)
export default Frame;
