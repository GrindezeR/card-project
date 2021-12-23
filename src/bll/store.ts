import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {newPassReducer} from "./newPassReducer";
import {recoverPassReducer} from "./passRecoverReducer";
import {profileReducer} from "./profileReducer";
import {registerReducer} from "./registerReducer";
import {appReducer} from "./appReducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import {packReducer} from "./packReducer";
import {cardReducer} from "./cardReducer";


const rootReducer = combineReducers({
    app: appReducer,
    loginPage: loginReducer,
    newPassPage: newPassReducer,
    recoverPassPage: recoverPassReducer,
    profilePage: profileReducer,
    registerPage: registerReducer,
    packPage: packReducer,
    cardPage: cardReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppStoreType = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AnyAction>

//@ts-ignore
window.store = store;