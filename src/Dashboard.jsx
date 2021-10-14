
import React, {useRef} from 'react'
import { createBrowserHistory } from 'history'

import Frame from './Frame'
import Input from './Input'
import Text from './Text'
import Button from './Button'

import './App.css';

const  Dashboard = () => {




  const [loginCheck, setLogin] = React.useState('primary')
  const [loginCheckTxt, setLoginTxt] = React.useState('primary')
  const [active, setActive] = React.useState(false)

  const [isLogged, setLoginState] = React.useState(false)

  const dashboardFrame = useRef();
  const tablesFrame = useRef();
  const navFrame = useRef();
  const contentMain = useRef();
  const history = createBrowserHistory({forceRefresh:true});

  function removeFrame() {

    dashboardFrame.current.removeFrame();
 

  }
  

 
  
  if(!localStorage.getItem('logged')){
   history.push('/')
  }

  React.useEffect(() => {
    let axios = require('axios')

    // Carrega o tipo de frame
    axios.get('http://localhost:800/dashboard')
.then(response => alert(response.data));
// precisa se usar um loop para cada database e inserir no frame do render
    
    tablesFrame.current.Pentagon()
    navFrame.current.Lines()
    contentMain.current.Corner()
  },[] );
  
  return (
<>
  

    <Frame ref={dashboardFrame} actv={active} theme='primary' className='dashDiv'>
        <div className="dashContent">
     <div className="leftPanel">
    <Frame ref={tablesFrame} actv={active} theme='success' className='header'>
ArcSQL
</Frame>
   
    <Frame ref={tablesFrame} aactv={active} theme='error' className='tablesFrame'>
<Text as="h4"> Tables</Text>

</Frame>
</div>
<div className="nav">
<Frame ref={navFrame} actv={active} theme='error' className='navBar'>
<center>Navbar</center>
</Frame>
<div className="mainContent">
<Frame ref={contentMain} actv={active} theme='primary' className='frameContent'>
<center>Content</center> 
</Frame>

</div>
</div>  


</div>


    </Frame>
    </>
    );
}
export default Dashboard;
