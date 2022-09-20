import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, Link} from 'react-router-dom'

import Home from './components/Home';
import CreateStudent from './components/students/CreateStudent';
import EditStudent from './components/students/EditStudent';
import ListStudent from './components/students/ListStudent';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand' style={{paddingLeft:10}}>CRUD</Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/createStudent' className='nav-link'>Criar Estudante</Link>
            </li>
            <li className='nav-item'>
              <Link to='/listStudent' className='nav-link'>Listar Estudante</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='createStudent' element={ <CreateStudent/> }/>
        <Route path='listStudent' element={ <ListStudent/> }/>
        <Route path='editStudent' element={ <EditStudent/> }/> 
      </Routes>
    </div>
  );
}

export default App;
