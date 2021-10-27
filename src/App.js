import './App.css';
import { LoginPage } from "./Login/login";
import { HomePage } from "./Pages/home";
import { MainPage } from "./Main/main";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>

          <Route path="/home" exact>
            <HomePage />
          </Route>

          <Route path="/dashboard" exact>
            <MainPage />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
