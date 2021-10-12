
import React, {useRef} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

import LoginCmp from './Login'
import Frame from './Frame'

import './App.css';


const App = ()=> {


    const [isLogged, setLoginState] = React.useState(false)
  

  return (

  <div className="content">

   {/* frame login */}
   <Router forceRefresh={true}>

    <Route
                  path="/"
                  exact
                  

                 >
                <LoginCmp />
                     </Route>


<Route
                  path="/dashboard"
                  exact
                  render={() => (
                    <>
   
   
   <Frame theme="success">Logged in</Frame>

                    </>
                  )}
                  >
                      </Route>
              
    
    
    </Router>
  </div>
    );
}

export default App;
