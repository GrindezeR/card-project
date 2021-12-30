import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Error404 from "../pages/404/Error404";
import {Login} from "../pages/Login/Login";
import {Registration} from "../pages/Register/Registration";
import {NewPass} from "../pages/NewPass/NewPass";
import {PassRecover} from "../pages/PassRecover/PassRecover";
import {Profile} from "../pages/Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../bll/store";
import {LoadingLine} from "../../common/components/LoadingLine/LoadingLine";
import {CheckEmail} from "../pages/CheckEmail/CheckEmail";
import {initialize} from "../../bll/appReducer";
import {Packs} from "../pages/Packs/Packs";
import {Cards} from "../pages/Cards/Cards";
import {UpModal} from "../../common/components/Modals/UpModal/UpModal";
import {LearnCards} from "../pages/LearnCards/LearnCards";

function App() {
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, boolean>((state) => state.app.loading);
    const initialized = useSelector<AppStoreType, boolean>((state) => state.app.initialized);

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch])

    if (!initialized) {
        return <LoadingLine/>
    }

    return (
        <div className="wrapper">
            <div className="App">
                {loading && <LoadingLine/>}
                <UpModal/>
                <Routes>
                    <Route path={'/'} element={<Login/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'profile'} element={<Profile/>}/>
                    <Route path={'registration'} element={<Registration/>}/>
                    <Route path={'check-email'} element={<CheckEmail/>}/>
                    <Route path={'set-new-password/:token'} element={<NewPass/>}/>
                    <Route path={'cards/:pack_id'} element={<Cards/>}/>
                    <Route path={'packs'} element={<Packs/>}/>
                    <Route path={'pass_recovery'} element={<PassRecover/>}/>
                    <Route path={'learn/:pack_id'} element={<LearnCards/>}/>
                    <Route path={'404'} element={<Error404/>}/>
                    <Route path={'*'} element={<Navigate to={'404'}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
