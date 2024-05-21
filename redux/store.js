import { configureStore } from '@reduxjs/toolkit'
import testCounter from './reducers/testCounter'

export const store = configureStore({
    reducer: {
        testCounter: testCounter,
    },
});