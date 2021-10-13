
import React, {useRef} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

import LoginCmp from './Login'
import Dashboard from './Dashboard'

import './App.css';


const App = ()=> {


    const [isLogged, setLoginState] = React.useState(false)
  

  return (

<>
   {/* frame login */}
   <Router forceRefresh={true}>

    <Route
                  path="/"
                  exact
                  render={() => (
                    <>

                 
                   <div className="content">                        <LoginCmp/>
</div>
                        </>
)}>
                     </Route>


<Route
                  path="/dashboard"
                  exact
                  render={() => (
                    <>
   
                        <div className="dashConteiner">                        <Dashboard/>
</div>

                    </>
                  )}
                  >
                      </Route>
              
    
    
    </Router>
    </>

    );
}

export default App;
