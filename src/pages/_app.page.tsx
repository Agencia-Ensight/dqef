import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Head from "next/head";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { ChakraProvider } from "@chakra-ui/react";

import GlobalStyle from "../styles/global";
import { Menu } from "../components/NavBar/components/Menu";
import HelpButton from "../components/HelpButton";
import AuthProvider, { AuthContext } from '../contexts/AuthContext';
import { useContext, useEffect } from "react";
import Router from "next/router";

export const apolloClient = new ApolloClient({
  uri: 'https://api.deixaqueeufaco.io/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': 'vbOn4iXfdsfsdfsflSzcS'
  }
});

function ProtectedRoute({ children }: any) {
  const { isAuthenticated, isLoading } = useContext(AuthContext)!;

  useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);
    console.log('isLoading', isLoading);
    if (!isAuthenticated && !isLoading) {
      Router.push('/login');
    }
  }, [isAuthenticated, isLoading]);

  if (isAuthenticated) {
    return children
  }

  return <div>Loading...</div>
}

interface AppPropsCust extends AppProps {
  Component: any;
}

function MyApp({ Component, pageProps }: AppPropsCust) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <Head>
            <title>Deixa Que Eu Faço</title>
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/icon/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/icon/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/icon/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/icon/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/icon/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/icon/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/icon/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/icon/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/icon/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/icon/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/icon/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/icon/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/icon/favicon-16x16.png"
            />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
          </Head>
          <NavBar />
          <Menu />
          <ChakraProvider>
            {Component.auth ? (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            ) : (
              <Component {...pageProps} />
            )}
          </ChakraProvider>
          <GlobalStyle />
          <HelpButton />
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
