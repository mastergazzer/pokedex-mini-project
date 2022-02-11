import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import React from "react";
const Card = styled.div`
  background-color: ${(props) =>
    props.variantColor ? props.variantColor : "#f55e5e"};
  width: 200px;

  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  text-transform: uppercase;
  border-bottom: 4px solid black;
  border-right: 4px solid black;
  a {
    text-decoration: none;
    color: #ffff;
  }
  a:hover {
    color: #b5b5b5;
  }
`;
const NameLabel = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #ffff;
`;
const TypeLabel = styled.span`
  border-radius: 10px;
  font-size: 17px;
  margin:3px;
`;
const PokemonDetailViewer = (props) => {
  return (
    <div>
      <p>Pokemon details</p>
      <img src={props.pic} alt="poke-img"></img>
      <Card>
        <NameLabel>{props.name}</NameLabel>
        
      </Card>
    </div>
  );
};

export default PokemonDetailViewer;
