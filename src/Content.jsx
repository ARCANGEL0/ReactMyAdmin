import './App.css';
import React, { useImperativeHandle, forwardRef } from 'react';

import { AnimatorGeneralProvider } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import * as Arwes from '@arwes/core';
import './App.css';
import { useParams } from 'react-router';
const SOUND_ASSEMBLE_URL = 'https://playground.arwes.dev/assets/sounds/typing.mp3';

const animatorGeneral = { duration: { enter: 1500, exit: 200 } };
const audioSettings = { common: { volume: 1.25 } };
const playersSettings = { assemble: { src: [SOUND_ASSEMBLE_URL], loop: true } };
const bleepsSettings = { assemble: { player: 'assemble' } };


const  Frame = forwardRef((props, ref)=> {
  const [activate, setActive] = React.useState(true);
  const [Frame, setFrame] = React.useState(Arwes.FrameBox)
    const {data} = useParams();
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

    <center> {data} </center>
  );
}
)
export default Frame;
