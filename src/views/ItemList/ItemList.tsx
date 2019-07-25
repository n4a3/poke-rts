import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";

import Item from "./Item";
import { IPokemonList, IPokemonItem } from "../../stores/PokemonListStore";
import { IPokemonInfo } from "../../stores/PokemonInfoStore";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

interface InjectedProps {
  pokemonListStore?: IPokemonList;
  pokemonInfoStore?: IPokemonInfo;
}

@inject("pokemonListStore", "pokemonInfoStore")
@observer
export default class ItemList extends Component<InjectedProps> {
  private fetchPokemons() {
    this.props.pokemonListStore!.fetchPokemonList();
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  render() {
    const { items, state } = this.props.pokemonListStore!;
    if (state === "fetching") {
      return "loading...";
    }
    if (state === "error") {
      return "error";
    }
    if (state === "success") {
      return (
        <List>
          {items.map((item: IPokemonItem, index) => {
            return (
              <Item key={index} url={item.url}>
                {item.name}
              </Item>
            );
          })}
        </List>
      );
    }
    return null;
  }
}
