import { createAction } from '@reduxjs/toolkit'

import { VERIFY_PIN, PIN_VERIFIED, SET_AUTH_TOKEN, SET_ERROR, SET_LOADING, SET_STAGE, SET_MOBILE_NUMBER } from './constants';


/**
 * Set Auth related Actions
 * 
 */

export const verifyPin = createAction(VERIFY_PIN, () => {
    return {
        type: VERIFY_PIN,
        payload: {},
    }
});

export const pinVerified = createAction(PIN_VERIFIED, () => {
    return {
        type: PIN_VERIFIED,
        payload: {},
    }
});

export const setAuthToken = createAction(SET_AUTH_TOKEN, (authToken: string) => {
    return {
        type: SET_AUTH_TOKEN,
        payload: authToken,
    }
});

export const setError = createAction(SET_ERROR, (error: string | null) => {
    return {
        type: SET_ERROR,
        payload: error,
    }
});

export const setLoading = createAction(SET_LOADING, (loading: boolean) => {
    return {
        type: SET_LOADING,
        payload: loading,
    }
});

export const setStage = createAction(SET_STAGE, (stage:number) => {
    return {
        type: SET_STAGE,
        payload: stage,
    }
});

export const setMobileNumber = createAction(SET_MOBILE_NUMBER, (mobileNumber: string) => {
    return {
        type: SET_MOBILE_NUMBER,
        payload: mobileNumber,
    }
});