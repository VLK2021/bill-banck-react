import {combineReducers, configureStore} from "@reduxjs/toolkit";

import billReducer from './slices/bill.slice';


const rootReducer = combineReducers({
    billReducer: billReducer,
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;