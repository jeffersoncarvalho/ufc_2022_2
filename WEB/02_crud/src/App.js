import { Link } from 'react-router-dom'

import CRUDRoutes from './components/routes/CRUDRoutes';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand' style={{ paddingLeft: 10 }}>CRUD</Link>
        <ul className='navbar-nav mr-auto'>
          
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>

          <li className='nav-item dropdown'>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estudante
            </a>
            <ul className="dropdown-menu dropdown-menu-light">
              <li>
                <Link className="dropdown-item" to='/createStudent'>Criar Estudante</Link>
              </li>
              <li>
                <Link className="dropdown-item" to='/listStudent'>Listar Estudante</Link>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
      {<CRUDRoutes />}
    </div>
  );
}

export default App;
