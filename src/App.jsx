
import React, {useRef} from 'react'

import Frame from './Frame'
import Input from './Input'
import Text from './Text'
import Button from './Button'

import './App.css';


function App() {
  const [loginCheck, setLogin] = React.useState('primary')
  const [loginCheckTxt, setLoginTxt] = React.useState('primary')
  const [active, setActive] = React.useState(false)

  const loginFrame = useRef();
  const loginU = useRef();
  const loginP = useRef();

  function removeFrame() {

    loginFrame.current.removeFrame();
    loginU.current.resetInput();
    loginP.current.resetInput();

  }
  function ErrorLogin() {
    setLogin('error');
    setLoginTxt('red');
      setTimeout(() => setLogin('primary'), 2000);
      setTimeout(() => setLoginTxt('#7efcf6'), 2000);

  }

  function Login() {
    setLogin('success')
    setLoginTxt('chartreuse');
      setTimeout(() => setLogin('primary'), 2000);
      setTimeout(() => setLoginTxt('#7efcf6'), 2000);
      setTimeout(() => removeFrame(), 2000)
  }



  function handleSubmit(event, form) {
    event.preventDefault();
    const data = new FormData(event.target);
    const axios = require('axios')
  


    axios.post(`http://localhost:800/login`,  {user : data.get("user"), pass : data.get("pass")})
    .then(res => {
      if (res.data.connected) {
      Login()

      }
      else {
      ErrorLogin()
      }


    })
  
  }


  return (

  <div className="content">

   {/* frame login */}
    <Frame ref={loginFrame} actv={active} theme={loginCheck} className='loginDiv'>
      <form onSubmit={handleSubmit}>
        <div className="loginPage">
           <Text theme={loginCheckTxt} tipo='h4' >Usuário</Text>
           <Input ref={loginU} theme={loginCheck} className="user" id="user" name="user"></Input>
           <br />
           <Text theme={loginCheckTxt} tipo='h4' >Senha</Text>
           <Input ref={loginP} theme={loginCheck} name="pass" className="pass" id="pass"></Input>

         

           <div className="loginBtnDiv">
             <Button theme={loginCheck} tipoTexto='h4' className='loginBtn'>
              
               <Text theme={loginCheckTxt} tipo='h4' >
          
                Login
               </Text>
                </Button>
           </div>

        </div>
      </form>   
    </Frame>
  </div>
    );
}

export default App;
