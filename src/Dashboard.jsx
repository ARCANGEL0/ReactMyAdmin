import React, { useRef, useEffect } from "react";

import Frame from "./Frame";
import Content from "./Content";
import Text from "./Text";
import Button from "./Button";
import { CgLogOut } from "react-icons/cg";
import { MdOutlineHome } from "react-icons/md";
import "./App.css";
import { useHistory } from "react-router";

const Dashboard = () => {
  const [databases, setDatabases] = React.useState([]);
  const [DBselected, setDBselected] = React.useState(false);
  const [databaseCurrent, setCurrentDatabase] = React.useState("");

  const [tables, setTables] = React.useState([]);
  const [active, setActive] = React.useState(false);

  const header = useRef();
  const dashboardFrame = useRef();
  const tablesFrame = useRef();
  const navFrame = useRef();
  const contentMain = useRef();
  const databaseItem = useRef();
  const history = useHistory();

  function logOut() {
    localStorage.removeItem("logged");
    history.push("/");
  }

  function home() {
    setDBselected(false);
  }
  function removeFrame() {
    dashboardFrame.current.removeFrame();
  }

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("http://localhost:800/getDatabases");
      setDatabases(data);
    }

    getData();
  }, []);

  let axios = require("axios");

  if (!localStorage.getItem("logged")) {
    history.push("/");
  }

  function dataItem(databaseitem) {
    var url = "http://localhost:800/Database/" + databaseitem;

    axios
      .get(url)
      .then(function (response) {
        var result = response.data
          .map((element) => Object.values(element))
          .flat();

        console.log(result);
        console.log("SELECTED DATABASE:    " + databaseitem);
        // use val
        setTables(result);
        setDBselected(true);
        setCurrentDatabase(databaseitem);

        // I need this data here ^^
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  React.useEffect(() => {
    // precisa se usar um loop para cada database e inserir no frame do render

    tablesFrame.current.Pentagon();
    navFrame.current.Lines();
    contentMain.current.Corner();
  }, []);

  return (
    <>
      <Frame
        ref={dashboardFrame}
        actv={active}
        theme="error"
        className="dashDiv"
      >
        <div className="dashContent">
          <div className="leftPanel">
            <Frame ref={header} actv={active} theme="error" className="header">
              <>
                <Text theme="red" as="h2">
                  ArcSQL
                  <br />
                  <button className="logoutBtn" onClick={logOut}>
                    {" "}
                    <CgLogOut />{" "}
                  </button>{" "}
                  <button className="logoutBtn" onClick={home}>
                    {" "}
                    <MdOutlineHome />{" "}
                  </button>{" "}
                </Text>{" "}
              </>{" "}
            </Frame>
            <Frame
              ref={tablesFrame}
              actv={active}
              theme="error"
              className="tablesFrame"
            >
              <br />
              <li>
                <Frame
                  ref={databaseItem}
                  actv={active}
                  theme="success"
                  className="databaseItem"
                >
                  <Text theme="green" as="h1">
                    {" "}
                    <button
                      style={{
                        background: "none",
                        color: "chartreuse",
                      }}
                      className="databaseItem"
                      onClick={() => {
                        alert("funcao pra criar BD");
                      }}
                    >
                      {" "}
                      CRIAR NOVO BANCO{" "}
                    </button>
                  </Text>
                </Frame>
              </li>
              <br />
              {databases.map((data) => (
                <>
                  <li>
                    <Frame
                      ref={databaseItem}
                      actv={active}
                      theme="error"
                      className="databaseItem"
                    >
                      <Text theme="red" as="h1">
                        {" "}
                        <button
                          style={{
                            background: "none",
                            color: "red",
                          }}
                          className="databaseItem"
                          onClick={dataItem.bind(this, data.Database)}
                          key={data.Database}
                        >
                          {" "}
                          {data.Database}{" "}
                        </button>
                      </Text>
                    </Frame>
                  </li>
                  <br />
                </>
              ))}
            </Frame>{" "}
          </div>{" "}
          <div className="rightPanel">
            <div className="nav">
              <Frame
                ref={navFrame}
                actv={active}
                theme="error"
                className="navBar"
              >
                <Text theme="red" as="h2">
                  Visualizar | Estrutura | Pesquisar | Inserir | SQL | Gatilhos
                  & Eventos & Functions |{" "}
                </Text>{" "}
              </Frame>
            </div>{" "}
            <Frame
              ref={contentMain}
              actv={active}
              theme="error"
              className="frameContent"
            >
              {DBselected ? (
                <Content database={databaseCurrent} cont={tables}>
                  {" "}
                </Content>
              ) : (
                <a className="genericText">Main page </a>
              )}
            </Frame>{" "}
          </div>
        </div>
      </Frame>
    </>
  );
};
export default Dashboard;
