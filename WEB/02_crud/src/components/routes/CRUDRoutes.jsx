import { Routes, Route } from "react-router-dom"

import Home from '../Home';

import CreateStudent from '../students/CreateStudent';
import EditStudent from '../students/EditStudent';
import ListStudent from '../students/ListStudent';

const CRUDRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            
            <Route path='createStudent' element={<CreateStudent />} />
            <Route path='listStudent' element={<ListStudent />} />
            <Route path='editStudent/:id' element={<EditStudent />} />
        </Routes>
    )
}

export default CRUDRoutes