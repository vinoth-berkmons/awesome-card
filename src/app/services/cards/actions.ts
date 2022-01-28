import { createAction } from '@reduxjs/toolkit'

import Card from '../../models/Card';
import CardConnection from '../../models/CardConnection';

import { SET_CARDS, SET_CARD, SET_ERROR, SET_LOADING, SET_CURSOR } from './constants';

/**
 * Card related Actions
 * Card / Prev / Next / Loading
 */

export const setCard = createAction(SET_CARD, (card: Card | null) => {
    return {
        type: SET_CARD,
        payload: card,
    }
});

export const setCards = createAction(SET_CARDS, (cards: CardConnection) => {
    return {
        type: SET_CARD,
        payload: cards,
    }
});

export const setCursor = createAction(SET_CURSOR, (cursor: number) => {
    return {
        type: SET_CURSOR,
        payload: cursor,
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