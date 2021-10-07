 import './App.css';
import React, { useState } from 'react';

import { AnimatorGeneralProvider, Animator } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import { ArwesThemeProvider, StylesBaseline, Text } from '@arwes/core';
import './App.css';
const SOUND_ASSEMBLE_URL = 'https://playground.arwes.dev/assets/sounds/typing.mp3';

const audioSettings = { common: { volume: 1.25 } };
const playersSettings = { assemble: { src: [SOUND_ASSEMBLE_URL], loop: true } };
const bleepsSettings = { assemble: { player: 'assemble' } };


function TextS(props) {
  const [activate, setActivate] = React.useState(true);

  return (

   
 <ArwesThemeProvider>
 <StylesBaseline  />
 <BleepsProvider
   audioSettings={audioSettings}
   playersSettings={playersSettings}
   bleepsSettings={bleepsSettings}
 >
   <AnimatorGeneralProvider animator={{
     duration: { enter: 200, exit: 200 }
   }}>
     <Animator animator={{
       activate,
       manager: 'stagger',
       combine: true,
       duration: { stagger: 50 }
     }}>
       <Text as={props.tipo}>
{props.children}     
  </Text>
   
     </Animator>
   </AnimatorGeneralProvider>
 </BleepsProvider>
</ArwesThemeProvider>

  );
}

export default TextS;



 