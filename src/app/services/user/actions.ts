import { createAction } from '@reduxjs/toolkit'

import User from '../../models/User';
import { SET_USER, SET_ERROR, SET_LOADING } from './constants';

/**
 *  User related Actions
 * 
 */


export const setUser = createAction(SET_USER, (user: User) => {
    return {
        type: SET_USER,
        payload: user,
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