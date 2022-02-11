import React from "react";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import PokemonListPage from "./pages/PokemonList";
import MyPokemonList from "./pages/MyPokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import MainHeader from "./components/Header";
import { Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import "./App.css";

import { from } from "apollo-boost";
//import { ApolloClient } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });

  return (
    // <div className="App">
    //   <header className="App-header">

    //     <p>
    //       <code>let's do this</code>
    //     </p>

    //   </header>
    // </div>
    <ApolloProvider client={client}>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/pokedex" exact>
            <PokemonListPage />
          </Route>
          <Route path="/pokedex/:pokeName">
            <PokemonDetails />
          </Route>
         
        </Switch>
      </main>
    </ApolloProvider>
  );
}

export default App;
