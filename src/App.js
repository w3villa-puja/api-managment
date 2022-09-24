import './App.css';
import Registration from './Component/SignUp/Registration';
import Homepage from './Component/homepage/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          

          <Route path="/home">
            <Homepage />
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
