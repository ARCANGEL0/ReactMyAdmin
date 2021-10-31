
import React, {useRef, useEffect} from 'react'

import Frame from './Frame'
import Content from './Content' 
import Text from './Text'
import Button from './Button'
import { CgLogOut } from 'react-icons/cg';

import './App.css';
import { useHistory } from 'react-router'

  
const  Dashboard = () => {

  
  const [databases, setDatabases] = React.useState([])

  const [active, setActive] = React.useState(false)


 
  const header = useRef();
  const dashboardFrame = useRef();
  const tablesFrame = useRef();
  const navFrame = useRef();
  const contentMain = useRef();
  const databaseItem = useRef();
  const history = useHistory();



  function logOut() {
    localStorage.removeItem('logged')
        history.push('/')


  }
 
  function removeFrame() {

    dashboardFrame.current.removeFrame();


  }
  
  
  useEffect(() => {
     async function getData() {
      const { data } = await axios.get('http://localhost:800/getDatabases')
        setDatabases(data)
    }
    
    getData()
  }, [])

  let axios = require('axios')


  if(!localStorage.getItem('logged')){
   history.push('/')
  }

  function dataItem(databaseitem) { 
    var url = 'http://localhost:800/Database/'+databaseitem


    
      axios.get(url)
      .then(function (response) {
        console.log(response.data);
        // I need this data here ^^
    })
    .catch(function (error) {
        console.log(error);
    });


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



    <br />

{databases.map(data => (
  <>
 <li >
 <Frame ref = {databaseItem} actv={active} theme='primary' className='databaseItem'>

<Text as="h1" >  <button style={{background: 'none', color: 'cyan'}} className="databaseItem" onClick={dataItem.bind(this, data.Database)} key={data.Database}>{data.Database}</button></Text>
</Frame>

</li><br />
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

<Content>  </Content>

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
