import './App.css';

import OlaMundo from "./components/OlaMundo"
import Estudante from "./components/Estudante"
//import {Vecna as V,Eleven, Will} from "./components/StrangerThings"
import * as StrangerThings from "./components/StrangerThings"

function App() {
  return (
    <div className="App">
      <Estudante
        nome="Jefferson"
        curso="Design Digital"
        universidade="UFC Quixadá" 
      />
      <StrangerThings.Vecna />
    </div>
  );
}

export default App;
