import './App.css';

import OlaMundo from "./components/OlaMundo"
import Estudante from "./components/Estudante"
//import {Vecna as V,Eleven, Will} from "./components/StrangerThings"
import * as StrangerThings from "./components/StrangerThings"
import Calculadora from './components/Calculadora';
import IMC from './components/IMC';

function App() {
  return (
    <div className="App">
      <Estudante
        nome="Jefferson"
        curso="Design Digital"
        universidade="UFC Quixadá" 
      />
      <StrangerThings.Vecna />
      <Calculadora op="SUB" x={10} y={20} />
      <IMC peso={80.10} altura ={1.7} />
    </div>
  );
}

export default App;
