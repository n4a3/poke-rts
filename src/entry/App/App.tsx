import React from "react";
import styled from "styled-components";
import { inject } from "mobx-react";

import ItemList from "../../views/ItemList/ItemList";
import ItemInfo from "../../views/ItemInfo/ItemInfo";
import { IPokemonList } from "../../stores/PokemonListStore";

const Wrapper = styled.main`
  font-family: "Arial";
  font-size: 18px;
`;

const Title = styled.h1`
  color: #12b0ce;
  text-align: center;
`;

interface InjectedProps {
  pokemonListStore?: IPokemonList;
}

const App: React.FC<InjectedProps> = ({ pokemonListStore }) => {
  const { prevOffset, nextOffset } = pokemonListStore!;
  return (
    <Wrapper>
      <Title>PokeAPI: React + TypeScript + MobX + Styled Components</Title>
      <ItemList />
      <ItemInfo />
      <div>
        <button onClick={() => prevOffset()}>Prev</button>
        <button onClick={() => nextOffset()}>Next</button>
      </div>
    </Wrapper>
  );
};

export default inject("pokemonListStore")(App);
