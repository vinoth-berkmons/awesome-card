import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import User, { UserState } from '../../models/User';
import { USER_SLICE } from './constants';




/**
 * initialize value of the state
 */
const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
}


/**
 * userSlice
 * Reducer will be called based on the Action 
 */

export const userSlice = createSlice({
    name: USER_SLICE,
    initialState,
    reducers: {
        SET_USER: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        SET_ERROR: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        SET_LOADING: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    },
})

export default userSlice.reducer