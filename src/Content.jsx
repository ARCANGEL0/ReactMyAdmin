import "./App.css";
import React, { useImperativeHandle, forwardRef, useRef } from "react";
import { MDBDataTableV5 } from "mdbreact";
import Frame from "./Frame";

import { VscDiffAdded } from "react-icons/vsc";
import { MdDeleteOutline, MdOutlineSearch } from "react-icons/md";
import { CgDatabase } from "react-icons/cg";
import { ImEye } from "react-icons/im";
import * as Arwes from "@arwes/core";
import "./App.css";
import { useParams } from "react-router";
import axios from "axios";
const SOUND_ASSEMBLE_URL =
  "https://playground.arwes.dev/assets/sounds/typing.mp3";

const Content = forwardRef((props, ref) => {
  const [active, setActive] = React.useState(false);
  const [Frame, setFrame] = React.useState(Arwes.FrameLines);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [rerender, setRerender] = React.useState(false);

  const dbTitle = useRef();

  const datatables = {
    columns: [
      {
        label: "Tabela",
        field: "tabela",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Tabela",
        },
      },
      {
        label: "Visualizar",
        field: "visualizar",
        width: 10,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Visualizar",
        },
      },
      {
        label: "Estrutura",
        field: "estrutura",
        width: 10,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Estrutura",
        },
      },
      {
        label: "Procurar",
        field: "procurar",
        width: 10,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Procurar",
        },
      },
      {
        label: "Inserir",
        field: "inserir",
        width: 10,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Inserir",
        },
      },
      {
        label: "Apagar",
        field: "apagar",
        width: 10,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Apagar",
        },
      },
    ],

    rows: [],
  };

  props.cont.map(function (table) {
    let obj = {};
    obj.tabela = table;
    obj.visualizar = (
      <center>
        <button onClick={() => visualizar(table)}>
          {" "}
          <ImEye />{" "}
        </button>{" "}
      </center>
    );
    obj.inserir = (
      <center>
        <button onClick={() => inserir(table)}>
          {" "}
          <VscDiffAdded />{" "}
        </button>
      </center>
    );
    obj.apagar = (
      <center>
        <button onClick={() => apagar(table, props.database)}>
          {" "}
          <MdDeleteOutline />{" "}
        </button>
      </center>
    );
    obj.procurar = (
      <center>
        <button onClick={() => procurar(table)}>
          {" "}
          <MdOutlineSearch />{" "}
        </button>
      </center>
    );
    obj.estrutura = (
      <center>
        {" "}
        <button onClick={() => estrutura(table)}>
          {" "}
          <CgDatabase />{" "}
        </button>
      </center>
    );
    datatables.rows.push(obj);
  });

  console.log(datatables);

  const { data } = useParams();

  // funcoes pra tabelas
  function visualizar(table) {
    alert(" ver   " + table);
  }

  function inserir(table) {
    alert(" inserir   " + table);
  }

  function apagar(table, databaseSelected) {
    var url = "http://localhost:800/" + databaseSelected + "/Apagar/" + table;
    axios.delete(url).then(function (response) {
      if (response.data) {
        setError(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      } else {
        setSuccess(false);
        setError(true);
        setTimeout(() => setError(false), 2000);
      }
    });
  }

  function procurar(table) {
    alert(" procurar " + table);
  }

  function estrutura(table) {
    alert(" estrutura de  " + table);
  }
  // funcoes pra tabelas
  function removeFrame() {
    setActive(false);
  }

  function Hexagon() {
    setFrame(Arwes.FrameHexagon);
  }

  function Pentagon() {
    setFrame(Arwes.FramePentagon);
  }

  function Lines() {
    setFrame(Arwes.FrameLines);
  }

  function Corner() {
    setFrame(Arwes.FrameCorners);
  }

  function Underlines() {
    setFrame(Arwes.FrameUnderline);
  }

  useImperativeHandle(ref, () => {
    return {
      removeFrame: removeFrame,
      Hexagon: Hexagon,
      Pentagon: Pentagon,
      Lines: Lines,
      Corner: Corner,
      Underlines: Underlines,
    };
  });

  return (
    <>
      <Frame
        animator={{ animate: false }}
        ref={dbTitle}
        palette="primary"
        className="dbTitle"
        largeLineWidth={2}
        smallLineWidth={4}
        smallLineLength={20}
        cornerWidth={1}
        cornerLength={20}
        showContentLines
        contentLineWidth={1}
        hover
      >
        {props.database}
      </Frame>
      <Frame
        animator={{ animate: false }}
        palette="error"
        className="dbDelete"
        largeLineWidth={1}
        smallLineWidth={4}
        smallLineLength={10}
        cornerWidth={1}
        cornerLength={3}
        showContentLines
        contentLineWidth={0.3}
        hover
      >
        <MdDeleteOutline></MdDeleteOutline>{" "}
      </Frame>
      <MDBDataTableV5
        data={datatables}
        info={false}
        paging={false}
        searchTop
        searchBottom={false}
      />
      {success ? <h2 class="successAlert glitched">SUCCESS </h2> : ""}
      {error ? <h2 class="errorAlert glitched">ERROR </h2> : ""}
    </>
  );
});

export default Content;
