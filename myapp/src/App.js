import './App.css';
import Home  from './Pages/Home';
import Series  from './Pages/Series';
import Movies  from './Pages/Movies';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Demo-Streaming" component={Home}></Route>
        <Route exact path="/series" component={Series}></Route>
        <Route exact path="/movies" component={Movies}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
