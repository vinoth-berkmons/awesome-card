import { createAsyncThunk } from '@reduxjs/toolkit';

import client from '../../../apolloClient';
import User from '../../models/User';
import { RootState } from '../store';
import { setError, setLoading, setCard, setCards, setCursor } from './actions';

import { FETCH_CARD_DATA, FETCH_CARD, FETCH_CARDS_DATA, FETCH_CARDS, UPDATE_CURSOR } from './constants';


/**
 * Middleware : Thunk
 * Middleware will be called based on the  dispatch action to handle the API call
 */

export const fetchCardData = createAsyncThunk(FETCH_CARD, async (id: string, { dispatch, getState }) => {
    const state = getState() as RootState;
    if (state.cards.card) {
        return;
    }
    dispatch(setLoading(true));
    client.mutate({
        mutation: FETCH_CARD_DATA, variables: { id },
    }).then(({ data }) => {
        const user = data.me as User;
        dispatch(setCard(user.card))
        dispatch(setError(null));
    }).catch((error) => {
        dispatch(setError(error.message));
    }).finally(() => {
        dispatch(setLoading(false));
    })
});

export const fetchCardsData = createAsyncThunk(FETCH_CARDS, async (payload: any, { dispatch, getState }) => {
    const state = getState() as RootState;
    if (state.cards.cards) {
        return;
    }
    const cursor = state.cards.cursor;
    const cursorVal = cursor ? cursor + '' : '';
    dispatch(setLoading(true));
    client.mutate({
        mutation: FETCH_CARDS_DATA, variables: { cursor: cursorVal },
    }).then(({ data }) => {
        const user = data.me as User;
        dispatch(setCards(user.cards))
        dispatch(setError(null));
    }).catch((error) => {
        dispatch(setError(error.message));
    }).finally(() => {
        dispatch(setLoading(false));
    })
});

export const updateCursor = createAsyncThunk(UPDATE_CURSOR, async (cursor: number, { dispatch, getState }) => {
    dispatch(setCursor(cursor));
    const state = getState() as RootState;
    const cards = state.cards.cards;
    if (!cards) {
        return;
    }
    const edges = cards?.edges || [];
    const isAtPenultimateCard = cursor === edges.length - 2;
    const hasMoreCards = cards?.pageInfo?.hasNextPage;
    if (!(hasMoreCards && isAtPenultimateCard)) {
        return;
    }
    dispatch(setLoading(true));
    const cursorVal = cursor ? cursor + '' : '';
    client.mutate({
        mutation: FETCH_CARDS_DATA, variables: { ciursor: cursorVal },
    }).then(({ data }) => {
        const user = data.me as User;
        dispatch(setCards(user?.cards))
        dispatch(setError(null));
    }).catch((error) => {
        dispatch(setError(error.message));
    }).finally(() => {
        dispatch(setLoading(false));
    })
});

