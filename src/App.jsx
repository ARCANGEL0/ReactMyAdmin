
import React, {useRef} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

import LoginCmp from './Login'
import Dashboard from './Dashboard'
import Content from './Content'
import './App.css';


const App = ()=> {


  

  return (

<>
   {/* frame login */}
   <Router forceRefresh={false}>

    <Route
                  path="/"
                  exact
                  render={() => (
                    <>

{  localStorage.getItem('logged') ? 
                        <div className="dashConteiner">                        <Dashboard/>
</div>
:  
<div className="content">                        <LoginCmp/>
</div>
}
                 
             
                        </>
)}>
                     </Route>

<Route 
            path="/Database/:data"
            exact
            element={<Content />}
            render = {() => (
              <>
              <div className="dashConteiner"> 

          
              <Dashboard content=""/> 
              
              </div>
              </>
            )}

/>

    
    </Router>
    </>

    );
}

export default App;
