import Frame from './Frame'
import Input from './Input'
import Text from './Text'
import Button from './Button'
import './App.css';

function App() {
  return (

        <div className="content">

          <Frame theme='primary' className='loginDiv'>

            <div className="loginPage">
           <Text tipo='h4' >Usuário</Text>
      <Input className="user" id="user" ></Input>
      <br />
      <Text tipo='h4' >Senha</Text>
      <Input className="pass" id="pass"></Input>
            

        <div className="loginBtnDiv">
            <Button tipoTexto='h4' className='loginBtn'> Login</Button>

            </div>
            </div>
         
            </Frame>
        </div>
    );
}

export default App;
