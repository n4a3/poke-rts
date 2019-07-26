import React from "react";
import { inject } from "mobx-react";

import { IPokemonInfo } from "../../../../stores/PokemonInfoStore";

import SItem from "./Item.styles";

interface IItem {
  children: string;
  url: string;
}

interface InjectedProps extends IItem {
  pokemonInfoStore?: IPokemonInfo;
}

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
