import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/counterSlice';

const store = configureStore({
    reducer : {
        show : rootReducer
    }
})

export default store;
