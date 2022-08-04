import React, { useRef } from "react";
import { createBrowserHistory } from "history";
import { ThemeProvider, Global, useTheme } from "@emotion/react";

import Frame from "./Frame";
import Input from "./Input";
import Text from "./Text";
import Button from "./Button";

import "./App.css";
const LoginCmp = () => {
  const theme = {
    color: {
      severity: {
        verbose: "pink",
        debug: "blue",
        info: "teal",
        warning: "orange",
        error: "red",
        fatal: "darkred",
      },
    },
  };

  const [loginCheck, setLogin] = React.useState("primary");
  const [loginCheckTxt, setLoginTxt] = React.useState("cyan");
  const [active, setActive] = React.useState(true);

  const [isLogged, setLoginState] = React.useState(false);

  const loginFrame = useRef();
  const loginU = useRef();
  const loginP = useRef();

  const history = createBrowserHistory({ forceRefresh: true });

  setTimeout(function () {
    localStorage.removeItem("logged");
  }, 1000 * 60 * 60); //one hour

  function removeFrame() {
    loginFrame.current.removeFrame();
    loginU.current.resetInput();
    loginP.current.resetInput();
  }
  function ErrorLogin() {
    setLogin("error");
    setLoginTxt("red");
    setTimeout(() => setLogin("primary"), 2000);
    setTimeout(() => setLoginTxt("cyan"), 2000);
  }

  function Login() {
    setLogin("success");
    setLoginTxt("chartreuse");
    setTimeout(() => setLogin("primary"), 2000);
    setTimeout(() => setLoginTxt("cyan"), 2000);
    setTimeout(() => removeFrame(), 2000);
    setTimeout(() => setLoginState(true), 3000);
  }

  function handleSubmit(event, form) {
    event.preventDefault();
    const data = new FormData(event.target);
    const axios = require("axios");

    axios
      .post(`http://localhost:800/login`, {
        user: data.get("user"),
        pass: data.get("pass"),
      })
      .then((res) => {
        if (res.data.connected) {
          Login();
          localStorage.setItem("logged", res.data.connected);
        } else {
          ErrorLogin();
        }
      });
  }
  if (isLogged) {
    history.push("/");
  }
  React.useEffect(() => {
    // Carrega o tipo de frame
    loginFrame.current.Corner();
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            "html, body": {
              fontFamily: "monospace",
              fontSize: 16,
              backgroundColor: theme.color.error,
            },
          }}
        />

        <Frame
          ref={loginFrame}
          actv={active}
          theme={loginCheck}
          className="loginDiv"
        >
          <form onSubmit={handleSubmit}>
            <div className="loginPage">
              <Text theme={loginCheckTxt} tipo="h4">
                Usuário
              </Text>
              <Input
                tipo="text"
                ref={loginU}
                theme={loginCheck}
                className="user"
                id="user"
                name="user"
              ></Input>
              <br />
              <Text theme={loginCheckTxt} tipo="h4">

                  <br/>
                Senha
              </Text>
              <Input
                tipo="password"
                ref={loginP}
                theme={loginCheck}
                name="pass"
                className="pass"
                id="pass"
              ></Input>

              <div className="loginBtnDiv">
                <Button theme={loginCheck} tipoTexto="h4" className="loginBtn">
                  <Text theme={loginCheckTxt} tipo="h4">
                    Login
                  </Text>
                </Button>
              </div>
            </div>
          </form>
        </Frame>
      </ThemeProvider>
    </>
  );
};
export default LoginCmp;
