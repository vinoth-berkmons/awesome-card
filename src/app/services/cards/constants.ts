import { gql } from "@apollo/client";


/**
 * Constant file has Card related common const variable and Queries
 * 
 */

export const CARDS_SLICE = 'cards';
export const FETCH_CARDS = `${CARDS_SLICE}/FETCH_CARDS`;
export const FETCH_CARD = `${CARDS_SLICE}/FETCH_CARD`;
export const UPDATE_CURSOR = `${CARDS_SLICE}/UPDATE_CURSOR`;

export const SET_CARD = `${CARDS_SLICE}/SET_CARD`;
export const SET_CARDS = `${CARDS_SLICE}/SET_CARDS`;
export const SET_CURSOR = `${CARDS_SLICE}/SET_CURSOR`;
export const SET_ERROR = `${CARDS_SLICE}/SET_ERROR`;
export const SET_LOADING = `${CARDS_SLICE}/SET_LOADING`;

export const FETCH_CARDS_DATA = gql`query FetchCards($cursor: String) {
  me {
    cards(after: $cursor, first: 5) {
      edges {
        node {
          id
          title
          description
          imageUrl
        }
      },
      pageInfo {
        hasNextPage
      }
    }
  }
}
`;

export const FETCH_CARD_DATA = gql`query FetchCard($id: String) {
  me {
    card(where: {
      id: {
        eq: $id
      }
    }){
          id
          title
          description
          imageUrl
     }
  }
}
`;