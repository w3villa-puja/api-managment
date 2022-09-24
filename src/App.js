import './App.css';
import Registration from './Component/Registration';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Registration />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
