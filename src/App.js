import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Login from './components/login';
import Logout from './components/logout';
import Mypage from './components/mypage';
import Registration from './components/registration_form';
import Save from './components/save';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Link to="/"></Link>

          <Route exact path="/" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/mypage" component={Mypage}/>
          <Route path="/registration" component={Registration}/>
          <Route path="/save" component={Save}/>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
