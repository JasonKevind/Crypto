import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counter.js';
export const store=configureStore({
    reducer:{
        counter:counterReducer,
    },
});