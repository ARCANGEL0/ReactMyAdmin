import './App.css';
import React, {
  useImperativeHandle, forwardRef
}
from 'react';
import {
  MDBDataTableV5
}
from 'mdbreact';

import {VscDiffAdded} from 'react-icons/vsc'
import {MdDeleteOutline, MdOutlineSearch} from 'react-icons/md'
import {CgDatabase} from 'react-icons/cg'
import {ImEye} from 'react-icons/im'
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



      const datatables = {
        columns: [{
          label: 'Tabela',
          field: 'tabela',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Tabela',
          }
        }, {
          label: 'Visualizar',
          field: 'visualizar',
          width: 10,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Visualizar',
          },
        }, {
          label: 'Estrutura',
          field: 'estrutura',
          width: 10,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Estrutura',
          },
        }, {
          label: 'Procurar',
          field: 'procurar',
          width: 10,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Procurar',
          },
        }, {
          label: 'Inserir',
          field: 'inserir',
          width: 10,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Inserir',
          },
        }, {
          label: 'Apagar',
          field: 'apagar',
          width: 10,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Apagar',
          },
        }],

        rows: []



      }


      props.cont.map(function(table) {
        let obj = {}
        obj.tabela = table;
        obj.visualizar = <center><button onClick={() => visualizar(table)}> <ImEye/> </button> </center> ;
        obj.inserir = <center><button onClick={() => inserir(table)}> <VscDiffAdded/> </button></center> ;
        obj.apagar = <center><button onClick={() => apagar(table)}> <MdDeleteOutline/> </button></center> ;
        obj.procurar = <center><button onClick={() => procurar(table)}> <MdOutlineSearch/> </button></center> ;
        obj.estrutura =<center> <button onClick={() => estrutura(table)}> <CgDatabase/> </button></center> ;
        datatables.rows.push(obj)


      })

      console.log(datatables)

      const {
        data
      } = useParams();

      // funcoes pra tabelas
      function visualizar(table) {
        alert(' ver   ' + table)
      }

      function inserir(table) {
        alert(' inserir   ' + table)
      }

      function apagar(table) {
        alert(' apagar  ' + table)
      }

      function procurar(table) {
        alert(' procurar ' + table)
      }

      function estrutura(table) {
        alert(' estrutura de  ' + table)
      }
// funcoes pra tabelas
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



      return ( < >



        < MDBDataTableV5 data = {
          datatables
        }



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


        < />  );


      });

    export default Content;
