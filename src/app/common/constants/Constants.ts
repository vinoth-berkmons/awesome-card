/**
 * All the App constants declared in this file
 */

export const MOBILE_NUMBER_SIX_DIGIT_PREFIX = /^(?=\d{6}$)(11)\d+/;
export const MOBILE_NUMBER_SIX_DIGIT = /^[0-9\b]{6}$/;
export const ALLOW_ONLY_NUMBERS = /^[0-9\b]+$/;
export const MAX_NUMBER_ONE = /^.{1}$/;

export const ERROR_MESSAGE_MOBILE =
  "Mobile Number should be 6 numbers and start with 11";
export const ERROR_MESSAGE_OTP = "Please enter valid OTP";

export type ErrorStatus = boolean | null;
