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


const Frame = forwardRef((props, ref) => {


      const [activate, setActive] = React.useState(true);
      const [Frame, setFrame] = React.useState(Arwes.FrameBox)

      const [datatables, setDatatables] = React.useState({
        columns: [{
          label: 'Tabela',
          field: 'tabela',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Tabela',
          },
        }, ],

        rows: [{
          tabela: 'Tiger Nixon',

        }, {
          tabela: 'Garrett Winters',

        }, {
          tabela: 'Ashton Cox',

        }, {
          tabela: 'Cedric Kelly',

        }, {
          tabela: 'Airi Satou',
        }, {
          tabela: 'Brielle Williamson',

        }, {
          tabela: 'Herrod Chandler',

        }, {
          tabela: 'Rhona Davidson',

        }, {
          tabela: 'Colleen Hurst',

        }, {
          tabela: 'Sonya Frost',

        }, {
          tabela: 'Jena Gaines',

        }, {
          tabela: 'Quinn Flynn',

        }, {
          tabela: 'Charde Marshall',

        }, {
          tabela: 'Haley Kennedy',

        }, {
          tabela: 'Tatyana Fitzpatrick',

        }, {
          tabela: 'Michael Silva',

        }, {
          tabela: 'Paul Byrd',

        }, ],
      })
      const {
        data
      } = useParams();


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

      const showLogs2 = (e) => {
        setCheckbox1(e);
      };

      return ( < >



        < MDBDataTableV5 hover multipleCheckboxes checkbox headCheckboxID =
        'id4'
        bodyCheckboxID = 'checkboxes4'
        getValueCheckBox = {
          (e) => {
            showLogs2(e);
          }
        }



        data = {
          datatables
        }
        paginate = {
          false
        }

        info = {
          false
        }
        paginate = {
          false
        }
        fullPagination searchTop searchBottom = {
          false
        }
        materialSearch barReverse / >


        < />  );


      });

    export default Frame;
