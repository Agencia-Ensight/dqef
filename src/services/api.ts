import { ApolloClient, InMemoryCache } from "@apollo/client";
import axios from "axios";

export const axiosClient = axios.create({
  // baseURL: "https://dev9.deixaqueeufaco.io",
  baseURL: "http://127.0.0.1:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apolloClient = new ApolloClient({
  uri: "https://api.xn--deixaqueeufao-tgb.com/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret": "vbOn4iXfdsfsdfsflSzcS",
  },
});
