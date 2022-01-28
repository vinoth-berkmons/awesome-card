import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Card from '../../models/Card';
import CardConnection from '../../models/CardConnection';

import { CARDS_SLICE } from './constants';

/**
 * cardSlice
 * Reducer will be called based on the Action 
 */

export interface CardState {
    card: Card | null,
    cards: CardConnection | null,
    cursor: number,
    loading: boolean
    error: string | null
}

const initialState: CardState = {
    card: null,
    cards: null,
    cursor: 0,
    loading: false,
    error: null,
}

export const cardSlice = createSlice({
    name: CARDS_SLICE,
    initialState,
    reducers: {
        SET_CARD: (state, action: PayloadAction<Card>) => {
            state.card = action.payload
        },
        SET_CARDS: (state, action: PayloadAction<CardConnection>) => {
            const cards = action.payload;
            if (!state.cards) {
                state.cards = new CardConnection();
            }
            if (!state.cards.edges) {
                state.cards.edges = [];
            }
            state.cards.edges.push(...cards.edges);
            state.cards.pageInfo = cards.pageInfo;
        },
        SET_CURSOR: (state, action: PayloadAction<number>) => {
            state.cursor = action.payload
        },
        SET_ERROR: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        SET_LOADING: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    },
})

export default cardSlice.reducer