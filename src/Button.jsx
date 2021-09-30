import React from 'react';
import Text from './Text';
import './App.css';
import { Animator } from '@arwes/animation';
import { ArwesThemeProvider, StylesBaseline, Button } from '@arwes/core';

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

const Btn = (props) => {

    return (

        <ArwesThemeProvider>
            <StylesBaseline styles={{
                body: { fontFamily: FONT_FAMILY_ROOT },
                button: { margin: '0 20px 20px 0' }
            }} />
            <Animator animator={{ animate: true }}>

                <Button palette={props.theme} active className={`${ props.className }`}>
                <Text tipo={props.tipoTexto} >      
                    {props.children}
                    </Text>
                </Button>

            </Animator>
        </ArwesThemeProvider>
        /* 
        <button onClick={onClick} className="btn">
        {children}
        </button> */
    )
}

export default Btn;