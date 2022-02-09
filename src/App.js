import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {

  const mystate = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Welcome to Redux</h1>
          <div className="container">
            <h1>Increment and Decrement Counter</h1>
            <h4>Using React Redux</h4>
            <div className="quantity">
              <a className="quantity_minus" title="Decrement" 
                onClick={ () => dispatch(decNumber()) }><span> - </span></a>
              <input type="text" className="quantity_input" name="quantity" value={mystate} />  
              <a className="quantity_plus" title="Increment" 
                onClick={ () => dispatch(incNumber(5)) }><span> + </span></a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
