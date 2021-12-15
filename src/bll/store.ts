import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {newPassReducer} from "./newPassReducer";
import {recoverPassReducer} from "./passRecoverReducer";
import {profileReducer} from "./profileReducer";
import {registerReducer} from "./registerReducer";
import {appReducer} from "./appReducer";
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    app: appReducer,
    loginPage: loginReducer,
    newPassPage: newPassReducer,
    recoverPassPage: recoverPassReducer,
    profilePage: profileReducer,
    registerPage: registerReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStoreType = ReturnType<typeof rootReducer>;