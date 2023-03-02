import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './products/reducers';

const store = configureStore({
	reducer: rootReducer
})

export default store;