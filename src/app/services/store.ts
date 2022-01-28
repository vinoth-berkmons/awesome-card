import { configureStore } from '@reduxjs/toolkit'

import { AUTH_SLICE } from './auth/constants';
import { USER_SLICE } from './user/constants';
import { CARDS_SLICE } from './cards/constants';
import authReducer from './auth/slice';
import userReducer from './user/slice';
import cardsReducer from './cards/slice';


/**
 * Main Store configuration
 */

export const store = configureStore({
    reducer: {
        [AUTH_SLICE]: authReducer,
        [USER_SLICE]: userReducer,
        [CARDS_SLICE]: cardsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch