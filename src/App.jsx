
import React from 'react'

import Frame from './Frame'
import Input from './Input'
import Text from './Text'
import Button from './Button'
import './App.css';



function App() {
  const [loginFeito, setLogin] = React.useState(false)
  const [erroConexao, setErro] = React.useState(false)


  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const axios = require('axios')
  


    axios.post(`http://localhost:800/login`,  {user : data.get("user"), pass : data.get("pass")})
    .then(res => {
      if (res.data.connected) {
        setLogin(true);
        setErro(false);

      }
      else {
        setErro(true);
        setLogin(false);
      }


    })
  
  }


  return (

  <div className="content">

    <Frame theme='primary' className='loginDiv'>
      <form onSubmit={handleSubmit}>
        <div className="loginPage">
           <Text tipo='h4' >Usuário</Text>
           <Input className="user" id="user" name="user"></Input>
           <br />
           <Text tipo='h4' >Senha</Text>
           <Input name="pass" className="pass" id="pass"></Input>

           { loginFeito ?       <div className="loginAlerts">

<Frame theme='success' className='loginConexao'> 
<Text tipo='a' > 
Conectado ! 
</Text>
</Frame>

</div> : null }


{ erroConexao ?       <div className="loginAlerts">

<Frame theme='error' className='erroConexao'> 
<Text tipo='a' > 
Erro na Conexão ! 
</Text>
</Frame>

</div> : null }


           <div className="loginBtnDiv">
             <Button tipoTexto='h4' className='loginBtn'> Login</Button>
           </div>

        </div>
      </form>   
    </Frame>
  </div>
    );
}

export default App;
