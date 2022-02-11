import { Link, NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Header = styled.header`
  width: 100%;
  height: 5rem;
  background: linear-gradient(to right, #ff0202, #e45353, #531717);
  padding: 0 10%;
  nav {
    height: 100%;
  }
  ul {
    height: 100%;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  li {
    margin: 0 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover,
  a:active,
  a.active {
    padding-bottom: 0.25rem;
    border-bottom: 4px solid black;
  }
`;

const MainHeader = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={Header.active} to="/pokedex">
              Pokedex
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={Header.active} to="/mypokemon">
              My Pokemon
            </NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
};
export default MainHeader;
