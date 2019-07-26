import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import { IPokemonList, IPokemonItem } from "../../../stores/PokemonListStore";
import { IPokemonInfo } from "../../../stores/PokemonInfoStore";
import Item from "./Item";
import Button from "../../../components/Button";
import { Wrapper, List, Buttons } from "./ItemList.styles";

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
      return <Wrapper>loading...</Wrapper>;
    }
    if (state === "error") {
      return <Wrapper>error</Wrapper>;
    }
    if (state === "success") {
      const { prevOffset, nextOffset } = this.props.pokemonListStore!;
      return (
        <Wrapper>
          <List>
            {items.map((item: IPokemonItem, index) => {
              return (
                <Item key={index} url={item.url}>
                  {item.name}
                </Item>
              );
            })}
          </List>
          <Buttons>
            <Button onClick={() => prevOffset()}>Prev</Button>
            <Button onClick={() => nextOffset()}>Next</Button>
          </Buttons>
        </Wrapper>
      );
    }
    return <Wrapper />;
  }
}
