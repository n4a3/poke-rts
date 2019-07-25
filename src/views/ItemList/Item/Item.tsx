import React from "react";
import styled from "styled-components";
import { inject } from "mobx-react";

import { IPokemonInfo } from "../../../stores/PokemonInfoStore";

interface IItem {
  children: string;
  url: string;
}

interface InjectedProps extends IItem {
  pokemonInfoStore?: IPokemonInfo;
}

const SItem = styled.li`
  padding: 1rem;
  border: 1px solid #000000;
  margin-top: -1px;
  margin-left: -1px;
`;

const Item: React.FC<InjectedProps> = ({ children, url, pokemonInfoStore }) => {
  const getInfo = () => {
    const { fetchPokemon } = pokemonInfoStore!;
    const reg = url.match(/pokemon\/(\d+)\/$/);
    if (reg) {
      fetchPokemon(+reg[1]);
    }
  };
  return <SItem onClick={() => getInfo()}>{children}</SItem>;
};

export default inject("pokemonInfoStore")(Item);
