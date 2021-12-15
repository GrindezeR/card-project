import React, {useEffect} from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import Error404 from "../pages/404/Error404";
import {Login} from "../pages/Login/Login";
import {Registration} from "../pages/Register/Registration";
import {NewPass} from "../pages/NewPass/NewPass";
import {PassRecover} from "../pages/PassRecover/PassRecover";
import {Profile} from "../pages/Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../bll/store";
import {LoadingLine} from "../../common/components/loadingLine/LoadingLine";

function App() {
    const loading = useSelector<AppStoreType, boolean>((state) => state.app.loading)
    const error = useSelector<AppStoreType, string | null>((state) => state.app.error)
    const isLoggedIn = useSelector<AppStoreType, boolean>((state) => state.loginPage.isLoggedIn)

    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(setIsLoggedInAC())
    }, [dispatch])

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
            {loading && <LoadingLine/>}
            <Routes>
                <Route path={'/'} element={<Login/>}/>
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