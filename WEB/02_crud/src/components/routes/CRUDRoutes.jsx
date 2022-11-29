import { Routes, Route } from "react-router-dom"

import Home from '../Home';

import CreateStudent from '../students/CreateStudent';
import EditStudent from '../students/EditStudent';
import ListStudent from '../students/ListStudent';

import SignInUserPage from "../users/SignInUser";
import SignUpUserPage from "../users/SignUpUser";

const CRUDRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<SignUpUserPage />} />
            
            <Route path='createStudent' element={<CreateStudent />} />
            <Route path='listStudent' element={<ListStudent />} />
            <Route path='editStudent/:id' element={<EditStudent />} />
        </Routes>
    )
}

export default CRUDRoutes