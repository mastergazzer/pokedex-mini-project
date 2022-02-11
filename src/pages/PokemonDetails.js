import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import PokemonDetailViewer from "../components/PokemonDetailViewer";
import Cards from "../components/Cards";
const GET_POKEMON_DETAILS = gql`
  query getPokemonDetails($name: String!) {
    pokemon(name: $name) {
      id
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;

const Tag = styled.span`
  align-self: flex-start;
  padding: 0.25em 0.75em;
  border-radius: 1em;
  font-size: 0.75rem;
  border: solid 1px firebrick;
  color: black;
  margin-left: 0.5em;
`;
const MoveCard = styled.div`
  width: 30%;
  display: flex;
  background: #eee;
  padding: 0.6em 1em 0.6em 0.6em;
  margin-bottom: 1em;
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 6px 10px;
  border: solid 1px #ccc;
  h3 {
    margin: 0;
    font-size: 1em;
  }
`;
const Image = styled.div`
  min-width: 80px;
  height: 80px;
  border-radius: 0.3em;
  background: linear-gradient(to bottom, #d6c091 0%, #c05c9a 100%);
  opacity: 0.7;
  margin: 0 0.6em 0 0;
  border: solid 1px firebrick;
`;

const Content = styled.div`
  p {
    margin: 0;
    font-size: 0.7em;
    color: #222;
  }
`;

const PokemonDetails = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_POKEMON_DETAILS, {
    variables: { name: params.pokeName },
  });
  if (loading) return "Loading details...";
  if (error) return <pre>{error.message}</pre>;
  return (
    // <section>
    //   {/* <img src={data.pokemon.sprites.front_default} alt="poke-img"></img> */}

    //   <PokemonDetailViewer
    //     pic={data.pokemon.sprites.front_default}
    //     name={params.pokeName}
    //   />
    //   {data.pokemon.types.map((x) => (
    //     <Tag>{x.type.name}</Tag>
    //   ))}
    //   {data.pokemon.moves.slice(0,4).map((x) => (
    //     <Tag>{x.move.name}</Tag>
    //   ))}
    // </section>
    <Cards
      image={data.pokemon.sprites.front_default}
      name={params.pokeName}
      type={data.pokemon.types.map((x) => (
        <Tag>{x.type.name}</Tag>
      ))}
      moves={data.pokemon.moves.slice(0, 4).map((x) => (
        <ul>{x.move.name.replace('-',' ')}</ul>
      ))}
    />
  );
};
export default PokemonDetails;
