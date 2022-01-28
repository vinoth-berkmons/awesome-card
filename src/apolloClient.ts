import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { lsGet } from "./app/common";
import {
  AUTH_TOKEN,
  OTP_TOKEN,
  PIN_TOKEN,
} from "./app/services/auth/constants";

/**
 * set  API URL
 */
const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_URL });

/**
 * Auth middleware
 */
const authMiddleware = new ApolloLink((operation, forward) => {
  const OTP_USER_TOKEN = lsGet(OTP_TOKEN);
  const PIN_USER_TOKEN = lsGet(PIN_TOKEN);
  const AUTH_USER_TOKEN = lsGet(AUTH_TOKEN);

  /**
   * Set Auth headers if the token is exist
   */
  const setHeaders = {
    ...(AUTH_USER_TOKEN && { AUTH_TOKEN: AUTH_USER_TOKEN }),
    ...(PIN_USER_TOKEN && { PIN_TOKEN: PIN_USER_TOKEN }),
    ...(OTP_USER_TOKEN && { OTP_TOKEN: OTP_USER_TOKEN }),
  };

  operation.setContext(({ headers = setHeaders }) => ({
    headers: {
      ...headers,
    },
  }));

  return forward(operation);
});

/**
 * Apollo client initialization
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
