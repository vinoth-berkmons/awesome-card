import { gql } from "@apollo/client";


/**
 * Constant file has User related common const variable and Queries
 * 
 */

export const USER_SLICE = 'user';
export const FETCH_USER = `${USER_SLICE}/FETCH_USER_DATA`;

export const SET_USER = `${USER_SLICE}/SET_USER`;
export const SET_ERROR = `${USER_SLICE}/SET_ERROR`;
export const SET_LOADING = `${USER_SLICE}/SET_LOADING`;

export const FETCH_USER_DATA = gql`query FetchUserData {
  me {
    id
    firstName
    lastName
    address {
      line1
      line2
      city
      state
      country
    }
  }
}
`;