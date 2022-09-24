import './App.css';
import Registration from './Component/SignUp/Registration';
import Dashboard from './Component/Dashboard/dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/dashboard">
            <Dashboard />
          </Route>


          <Route path="/">
            <Registration />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
