import React, { useState } from 'react';

import { AnimatorGeneralProvider } from '@arwes/animation';
import { BleepsProvider } from '@arwes/sounds';
import { ArwesThemeProvider, StylesBaseline, FramePentagon } from '@arwes/core';
import './App.css';
const SOUND_ASSEMBLE_URL = 'https://playground.arwes.dev/assets/sounds/typing.mp3';

const animatorGeneral = { duration: { enter: 1500, exit: 200 } };
const audioSettings = { common: { volume: 1.25 } };
const playersSettings = { assemble: { src: [SOUND_ASSEMBLE_URL], loop: true } };
const bleepsSettings = { assemble: { player: 'assemble' } };

const Input = (props, { theme }) => {
    

    return (
        <ArwesThemeProvider>
          <BleepsProvider
            audioSettings={audioSettings}
            playersSettings={playersSettings}
            bleepsSettings={bleepsSettings}
          >
            <StylesBaseline />
            <AnimatorGeneralProvider animator={animatorGeneral}>
            <FramePentagon
            animator={{ animate:true  }}
            palette={theme}
            inverted
            hover
          >
            <input style={{border: 0}} className={`${ props.className }`} id={`${ props.id }`} name={`${ props.name}`}type="text" />

          </FramePentagon>
            

                
            </AnimatorGeneralProvider>
          </BleepsProvider>
        </ArwesThemeProvider>
      );
}

export default Input;