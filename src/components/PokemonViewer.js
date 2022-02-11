// // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// /** @jsxImportSource @emotion/react */
// import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import React from "react";
import Cards from "../components/Cards";
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
const NumberLabel = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #505050;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1em 0;
  text-align: left;
`;

const PokemonViewer = ({ pokemonData }) => {
  const color = "blue";
  return (
    <Card>
      <div
        className="pokemon_name"
        onClick={() => {
          console.log(pokemonData.id);
        }}
      >
        {/* <button onClick={()=>{console.log(pokemonData.name)}}>click</button> */}
        <img src={pokemonData.image} alt="poke-img"></img>
        {/* <Card variantColor="green">{pokemonData.name}</Card> */}
        <NumberLabel>{"#" + pokemonData.id}</NumberLabel>
          <NameLabel>
        <Link to={'/pokedex/'+pokemonData.name} >
            {pokemonData.name}
        </Link>
            </NameLabel>
      </div>
    </Card>
    // <Container>
    //   <Cards image={pokemonData.image} name={pokemonData.name} />
    // </Container>
  );
};
export default PokemonViewer;
