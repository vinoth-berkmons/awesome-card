import { gql } from "@apollo/client";



/**
 * Constant file has Auth related common const variable and Queries
 * 
 */

export const AUTH_SLICE = 'auth';
export const VERIFY_PIN = `${AUTH_SLICE}/VERIFY_PIN`;
export const PIN_SET = `${AUTH_SLICE}/PIN_SET`;
export const PIN_VERIFIED = `${AUTH_SLICE}/PIN_VERIFIED`;
export const SEND_OTP = `${AUTH_SLICE}/SEND_OTP`;
export const VERIFY_OTP = `${AUTH_SLICE}/VERIFY_OTP`;

export const SET_MOBILE_NUMBER = `${AUTH_SLICE}/SET_MOBILE_NUMBER`;
export const SET_AUTH_TOKEN = `${AUTH_SLICE}/SET_AUTH_TOKEN`;
export const SET_ERROR = `${AUTH_SLICE}/SET_ERROR`;
export const SET_LOADING = `${AUTH_SLICE}/SET_LOADING`;
export const SET_STAGE = `${AUTH_SLICE}/SET_STAGE`;

export const AUTH_TOKEN = 'AUTH_TOKEN';
export const OTP_TOKEN = 'OTP_TOKEN';
export const PIN_TOKEN = 'PIN_TOKEN';



export const SHOW_MOBILE_INPUT = 0;
export const SHOW_OTP_INPUT = 1;
export const SHOW_PIN_INPUT = 2;



export const VERIFY_USER_PIN = gql`
  mutation verifyUserPin($pin: String!) {
    verifyPIN(pin: $pin) {
      user {
        id
        firstName
      }
      authToken
    }
  }
`;



export const SET_USER_PIN = gql`
  mutation setUserPin($pin: String!) {
    setPIN(pin: $pin) {
      user {
        id
        firstName
      }
      authToken
    }
  }
`;

export const SEND_USER_OTP = gql`
  mutation sendUserOtp($mobileNumber: String!) {
    sendOTP(data: { mobileNumber: $mobileNumber }) {
      id
      otpToken
    }
  }
`;

export const VERIFY_USER_OTP = gql`
  mutation verifyUserOTP($otp: String!) {
    verifyOTP(otp: $otp) {
      user {
        id
        firstName
      }
      pinToken
    }
  }
`;
