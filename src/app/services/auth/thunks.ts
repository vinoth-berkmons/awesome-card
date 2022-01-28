import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../apolloClient";

import history from "../../../history";
import { lsRemove, lsSet } from "../../common";

import {
  VERIFY_PIN,
  VERIFY_USER_PIN,
  AUTH_TOKEN,
  PIN_TOKEN,
  OTP_TOKEN,
  PIN_SET,
  SET_USER_PIN,
  SEND_OTP,
  SEND_USER_OTP,
  SHOW_OTP_INPUT,
  VERIFY_OTP,
  VERIFY_USER_OTP,
  SHOW_PIN_INPUT,
} from "./constants";
import {
  pinVerified,
  setAuthToken,
  setError,
  setLoading,
  setMobileNumber,
  setStage,
} from "./actions";

/**
 * Middleware : Thunk
 * Middleware will be called based on the  dispatch action to handle the API call
 */

export const verifyPin = createAsyncThunk(
  VERIFY_PIN,
  async (pin: string, { dispatch }) => {
    dispatch(setLoading(true));
    client
      .mutate({
        mutation: VERIFY_USER_PIN,
        variables: { pin },
      })
      .then(({ data }) => {
        const authToken = data.verifyPIN.authToken;
        lsSet(AUTH_TOKEN, authToken);
        dispatch(setAuthToken(authToken));
        lsRemove(PIN_TOKEN);
        lsRemove(OTP_TOKEN);
        dispatch(pinVerified());
        history.push("/dashboard");
        dispatch(setError(null));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }
);

export const setPin = createAsyncThunk(
  PIN_SET,
  async (pin: string, { dispatch }) => {
    dispatch(setLoading(true));
    client
      .mutate({
        mutation: SET_USER_PIN,
        variables: { pin },
      })
      .then(({ data }) => {
        const authToken = data.setPIN.authToken;
        lsSet(AUTH_TOKEN, authToken);
        dispatch(setAuthToken(authToken));
        lsRemove(PIN_TOKEN);
        lsRemove(OTP_TOKEN);
        dispatch(pinVerified());
        history.push("/dashboard");
        dispatch(setError(null));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }
);

export const sendOTP = createAsyncThunk(
  SEND_OTP,
  async (mobileNumber: string, { dispatch }) => {
    dispatch(setLoading(true));
    lsRemove(PIN_TOKEN);
    lsRemove(AUTH_TOKEN);
    lsRemove(OTP_TOKEN);
    client
      .mutate({
        mutation: SEND_USER_OTP,
        variables: { mobileNumber },
      })
      .then(({ data }) => {
        const otpToken = data.sendOTP.otpToken;
        lsSet(OTP_TOKEN, otpToken);
        dispatch(setStage(SHOW_OTP_INPUT));
        dispatch(setMobileNumber(mobileNumber));
        dispatch(setError(null));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }
);

export const verifyOTP = createAsyncThunk(
  VERIFY_OTP,
  async (otp: string, { dispatch }) => {
    dispatch(setLoading(true));
    lsRemove(PIN_TOKEN);
    lsRemove(AUTH_TOKEN);
    client
      .mutate({
        mutation: VERIFY_USER_OTP,
        variables: { otp },
      })
      .then(({ data }) => {
        const pinToken = data.verifyOTP.pinToken;
        lsSet(PIN_TOKEN, pinToken);
        lsRemove(OTP_TOKEN);
        dispatch(setStage(SHOW_PIN_INPUT));
        dispatch(setError(null));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }
);
