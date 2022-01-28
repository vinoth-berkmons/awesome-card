import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { lsGet, lsSet } from '../../common';
import { AUTH_SLICE, AUTH_TOKEN, SHOW_MOBILE_INPUT } from './constants';


/**
 * authSlice
 * Reducer will be called based on the Action 
 */

export interface AuthState {
    isAuthenticated: boolean
    isPinVerified: boolean
    authToken: string
    loading: boolean
    error: string | null
    stage: number
    mobileNumber: string,
}

const initialState: AuthState = {
    isAuthenticated: lsGet(AUTH_TOKEN) ? true : false,
    isPinVerified: false,
    authToken: lsGet(AUTH_TOKEN) || '',
    loading: false,
    error: null,
    stage: SHOW_MOBILE_INPUT,
    mobileNumber: '',
}

export const authSlice = createSlice({
    name: AUTH_SLICE,
    initialState,
    reducers: {
        PIN_VERIFIED: (state) => {
            state.isPinVerified = true
        },
        SET_AUTH_TOKEN: (state, action: PayloadAction<string>) => {
            state.authToken = action.payload
            if (action.payload.length > 0) {
                state.isAuthenticated = true
                lsSet(AUTH_TOKEN, action.payload);
            }
        },
        SET_ERROR: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        SET_LOADING: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        SET_STAGE: (state, action: PayloadAction<number>) => {
            state.stage = action.payload
        },
        SET_MOBILE_NUMBER: (stage, action: PayloadAction<string>) => {
            stage.mobileNumber = action.payload
        },
    },
})

export default authSlice.reducer