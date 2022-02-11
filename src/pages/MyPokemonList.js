import React from 'react';
import styled from "@emotion/styled";
import { useQuery, gql } from "@apollo/client";
import Cards from '../components/Cards';
import {} from 'react-router-dom';
const MoveCard = styled.div`
  width: 50%;
  display: block;
  background: #eee;
  padding: 0.6em 1em 0.6em 0.6em;
  margin-bottom: 1em;
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 6px 10px;
  border: solid 1px #ccc;
  h3 {
    margin: 0;
    font-size: 1em;
    text-transform: uppercase;
  }
`;
const MyPokemonList = ()=>{

return(
    <MoveCard>
        <p>My Pokemon</p>
    </MoveCard>
)
}
export default MyPokemonList;