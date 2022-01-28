import { createAsyncThunk } from '@reduxjs/toolkit';

import client from '../../../apolloClient';
import User from '../../models/User';
import { RootState } from '../store';
import { setError, setLoading, setUser } from './actions';

import { FETCH_USER, FETCH_USER_DATA } from './constants';


/**
 * Middleware : Thunk
 * Middleware will be called based on the  dispatch action to handle the API call
 */
export const fetchUserData = createAsyncThunk(FETCH_USER, async (payload: any, { dispatch, getState }) => {
    const state = getState() as RootState;
    if (state.user.user) {
        return;
    }
    dispatch(setLoading(true));
    client.query({
        query: FETCH_USER_DATA,
    }).then(({ data }) => {
        const user = data.me as User;
        dispatch(setUser(user))
        dispatch(setError(null));
    }).catch((error) => {
        dispatch(setError(error.message));
    }).finally(() => {
        dispatch(setLoading(false));
    })
});
