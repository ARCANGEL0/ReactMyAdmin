import "./App.css";
import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  useEffect,
} from "react";
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

const Form = forwardRef((props, ref) => {
  const [active, setActive] = React.useState(false);
  const [Frame, setFrame] = React.useState(Arwes.FrameLines);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [rerender, setRerender] = React.useState(false);
  const [seed, setSeed] = React.useState(1);

  const dbTitle = useRef();


  // funcoes pra tabelas
  function visualizar(table) {
    alert(" ver   " + table);
  }

  function inserir(table) {
    alert(" inserir   " + table);
  }

  function ApagarDB(databaseSelected) {
    var url = "http://localhost:800/Apagar/" + databaseSelected;
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

  function apagar(table, databaseSelected) {
    var url = "http://localhost:800/" + databaseSelected + "/Apagar/" + table;
    axios.delete(url).then(function (response) {
      if (response.data) {
        setError(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
        // reload component problm
                props.refreshTables();


      } else {
        setSuccess(false);
        setError(true);
        setTimeout(() => setError(false), 2000);
      }
    });
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
        palette="success"
        className="dbCreate"
        largeLineWidth={2}
        smallLineWidth={4}
        smallLineLength={20}
        cornerWidth={1}
        cornerLength={20}
        showContentLines
        contentLineWidth={1}
        hover
      >
        CRIAR BANCO DE DADOS
      </Frame>

      {success ? <h2 class="successAlert glitched">SUCCESS </h2> : ""}
      {error ? <h2 class="errorAlert glitched">ERROR </h2> : ""}
    </>
  );
});

export default Form;
