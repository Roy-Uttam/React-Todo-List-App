import Navbar from './Navbar';
import Home1 from './Home1';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import Details from './Details';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home1 />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/product/:id">
            <Details />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;