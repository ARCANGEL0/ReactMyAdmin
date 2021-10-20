
import React, {useRef, useEffect} from 'react'
import { createBrowserHistory } from 'history'

import Frame from './Frame'
import Input from './Input'
import Text from './Text'
import Button from './Button'
import { CgLogOut } from 'react-icons/cg';

import './App.css';

  
const  Dashboard = () => {

  
  const [loginCheck, setLogin] = React.useState('primary')
  const [databases, setDatabases] = React.useState([])

  const [loginCheckTxt, setLoginTxt] = React.useState('primary')
  const [active, setActive] = React.useState(false)

  const [isLogged, setLoginState] = React.useState(false)

 
  const header = useRef();
  const dashboardFrame = useRef();
  const tablesFrame = useRef();
  const navFrame = useRef();
  const contentMain = useRef();
  const history = createBrowserHistory({forceRefresh:true});



  function logOut() {
    localStorage.removeItem('logged')
        history.push('/')


  }
 
  function removeFrame() {

    dashboardFrame.current.removeFrame();


  }
  
  
  useEffect(() => {
     async function getData() {
      const { data } = await axios.get('http://localhost:800/dashboard')
        console.log(data)  
        setDatabases(data)
    }
    
    getData()
  }, [])

  let axios = require('axios')


  if(!localStorage.getItem('logged')){
   history.push('/')
  }

  React.useEffect(() => {
   



    
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
    <Frame ref={header} actv={active} theme='success' className='header'>
      <>
      <Text as='h2'>
ArcSQL <br/>

<button className="logoutBtn" onClick={logOut}><CgLogOut/></button>
</Text>
</>
</Frame>
   
    <Frame ref={tablesFrame} actv={active} theme='error' className='tablesFrame'>




{databases.map(data => (
  <>
 <li ><Text as="h1" >  <a className="databaseItem" href={data.Database} key={data.Database}>{data.Database}</a></Text></li><br />
</>

))}
     



</Frame>
</div>
<div className="rightPanel">
  <div className="nav">
<Frame ref={navFrame} actv={active} theme='error' className='navBar'>
<Text as='h2'>
<center>Navbar</center>
</Text>
</Frame>
</div>
<div className="mainContent">
<Frame ref={contentMain} actv={active} theme='primary' className='frameContent'>
<Text as='h2'>
<center>Content</center> 
</Text>
</Frame>

</div>
</div>  


</div>


    </Frame>
    </>
    );
}
export default Dashboard;
