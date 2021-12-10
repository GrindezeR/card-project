import {combineReducers, createStore} from "redux";
import {loginReducer} from "./loginReducer";
import {newPassReducer} from "./newPassReducer";
import {passRecoverReducer} from "./passRecoverReducer";
import {profileReducer} from "./profileReducer";
import {registerReducer} from "./registerReducer";
import {testReducer} from "./testReducer";

const rootReducer = combineReducers({
    loginPage: loginReducer,
    newPassPage: newPassReducer,
    recoverPassPage: passRecoverReducer,
    profilePage: profileReducer,
    registerPage: registerReducer,
    testPage: testReducer,
})
export const store = createStore(rootReducer)
export type AppStoreType = ReturnType<typeof rootReducer>;