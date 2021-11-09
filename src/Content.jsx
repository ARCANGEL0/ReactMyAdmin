import './App.css';
import React, {
  useImperativeHandle, forwardRef
}
from 'react';
import {
  MDBDataTableV5
}
from 'mdbreact';

import {
  AnimatorGeneralProvider
}
from '@arwes/animation';
import {
  BleepsProvider
}
from '@arwes/sounds';
import * as Arwes from '@arwes/core';
import './App.css';
import {
  useParams
}
from 'react-router';
const SOUND_ASSEMBLE_URL =
  'https://playground.arwes.dev/assets/sounds/typing.mp3';

const animatorGeneral = {
  duration: {
    enter: 1500,
    exit: 200
  }
};
const audioSettings = {
  common: {
    volume: 1.25
  }
};
const playersSettings = {
  assemble: {
    src: [SOUND_ASSEMBLE_URL],
    loop: true
  }
};
const bleepsSettings = {
  assemble: {
    player: 'assemble'
  }
};


const Content = forwardRef((props, ref) => {


      const [activate, setActive] = React.useState(true);
      const [Frame, setFrame] = React.useState(Arwes.FrameBox)


      


    const datatables = 
        {
        columns: [
          {
          label: 'Tabela',
          field: 'tabela',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Tabela',
          }},
          {
            label: 'Visualizar',
            field: 'visualizar',
            width: 80,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Visualizar',
            },
          },
          {
            label: 'Estrutura',
            field: 'estrutura',
            width: 80,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Estrutura',
            },
          },
          {
            label: 'Procurar',
            field: 'procurar',
            width: 80,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Procurar',
            },
          },
          {
            label: 'Inserir',
            field: 'inserir',
            width: 80,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Inserir',
            },
          },
          {
            label: 'Apagar',
            field: 'apagar',
            width: 80,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Apagar',
            },
          }
      ],

rows:
[]
        
        
      

      
      }

      
        props.cont.map(function(table) {
              let obj = {}
                obj.tabela= table;
                obj.visualizar="Visualizar";
                obj.inserir="Inserir";
                obj.apagar="Apagar";
                obj.procurar="Procurar";
                obj.estrutura="Estrutura";
                datatables.rows.push(obj)
            
    
        })
      
      console.log(datatables)
    
      const { data } = useParams();


      function removeFrame() {

        setActive(false)
      }

      function Hexagon() {
        setFrame(Arwes.FrameHexagon)
      }

      function Pentagon() {
        setFrame(Arwes.FramePentagon)
      }

      function Lines() {
        setFrame(Arwes.FrameLines)
      }

      function Corner() {
        setFrame(Arwes.FrameCorners)
      }

      function Underlines() {
        setFrame(Arwes.FrameUnderline)
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
      const [checkbox1, setCheckbox1] = React.useState('');


    
      return ( <>



        < MDBDataTableV5   
        data = { datatables}

        
        
        info = {
          false
        }
        paging = {
          false
        }
         searchTop searchBottom = {
          false
        }
        materialSearch / >


        </>  );


      });

    export default Content;
