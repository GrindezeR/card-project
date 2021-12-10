import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import {Test} from "./pages/Test";
import Error404 from "./pages/404/Error404";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {NewPass} from "./pages/NewPass";
import {PassRecover} from "./pages/PassRecover";
import {Profile} from "./pages/Profile";

function App() {
    return (
        <div className="App">
            <div>
                <button><NavLink to={'/'}>home/test</NavLink></button>
                <button><NavLink to={'login'}>login</NavLink></button>
                <button><NavLink to={'404'}>404</NavLink></button>
                <button><NavLink to={'profile'}>profile</NavLink></button>
                <button><NavLink to={'registration'}>registration</NavLink></button>
                <button><NavLink to={'new_password'}>new_password</NavLink></button>
                <button><NavLink to={'pass_recovery'}>pass_recovery</NavLink></button>
            </div>
            <Routes>
                <Route path={'/'} element={<Test/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'new_password'} element={<NewPass/>}/>
                <Route path={'pass_recovery'} element={<PassRecover/>}/>
                <Route path={'404'} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={'404'}/>}/>
            </Routes>
        </div>
    );
}

export default App;
