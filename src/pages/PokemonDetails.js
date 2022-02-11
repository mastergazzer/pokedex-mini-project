import React, { useState, useEffect } from "react";
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
const Button = styled.button`
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
  font-size: 12px;

  border-radius: 5px;

  cursor: pointer;
`;
const SmallBox = styled.div`
min-width: 80px;
height: 80px;
border-radius: 0.3em;

opacity: 0.7;
margin: 0 0.6em 0 0;
border: solid 1px firebrick;
`


const PokemonDetails = () => {
  const [savePokemon, setSavePokemon] = useState([]);
  const [newNickname, setNickname] = useState("");

  const [inputVisibility, setInputVisibility] = useState(true);

  const save = (newPokemon) => {
    localStorage.setItem("myPokemons", JSON.stringify(newPokemon));
  };

  useEffect(() => {
    if (localStorage.getItem("myPokemons")) {
      setSavePokemon(JSON.parse(localStorage.getItem("myPokemons")));
    }
  }, []);

  const params = useParams();

  const { data, loading, error } = useQuery(GET_POKEMON_DETAILS, {
    variables: { name: params.pokeName },
  });
  if (loading) return "Loading details...";
  if (error) return <pre>{error.message}</pre>;

  const onSavePoke = () => {
    if (newNickname.trim()) {
      let newPokemon = [
        ...savePokemon,
        {
          nickname: newNickname.trim(),
          id: Date.now(),
          species: params.pokeName,
        },
      ];
      setSavePokemon(newPokemon);
      setNickname("");
      save(newPokemon);
    }
  };

  const deletePoke = (id) => {
    let newPokemon = savePokemon.filter((x) => x.id !== id);
    setSavePokemon(newPokemon);
    save(newPokemon);
  };
  const catchChance = () => {
    if (Math.random() >= 0.5) {
      alert("you caught it!");
      setInputVisibility(false);
    } else {
      alert("it got away...");
    }
  };
  return (
    <MoveCard>
      <Cards
        image={data.pokemon.sprites.front_default}
        name={params.pokeName}
        type={data.pokemon.types.map((x) => (
          <Tag>{x.type.name}</Tag>
        ))}
        moves={data.pokemon.moves.slice(0, 4).map((x) => (
          <ul>{x.move.name.replace("-", " ")}</ul>
        ))}
        buttonHandler={catchChance}
      />
      <input
        type="text"
        id="todoInput"
        className="form-control"
        placeholder="Enter Nickname"
        hidden={inputVisibility}
        value={newNickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Button hidden={inputVisibility} onClick={onSavePoke}>
        Save
      </Button>
      <h2>My Pokemons: {savePokemon.length}</h2>
  
      {savePokemon.map((x) => (
        <div key={x.id}>
          <SmallBox>
            <h3>{x.species}</h3>
          <p >{x.nickname}</p>
          <Button onClick={()=>deletePoke(x.id)}>
        Release
      </Button>
          </SmallBox>
        </div>
      ))}
    </MoveCard>
  );
};
export default PokemonDetails;
