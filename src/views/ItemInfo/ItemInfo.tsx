import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

import { IPokemonInfo } from "../../stores/PokemonInfoStore";

const Card = styled.div`
  background-color: #eceee1;
  color: blueviolet;
`;

interface InjectedProps {
  pokemonInfoStore?: IPokemonInfo;
}
@inject("pokemonInfoStore")
@observer
export default class ItemInfo extends Component<InjectedProps> {
  render() {
    const {
      id,
      name,
      weight,
      height,
      image,
      state
    } = this.props.pokemonInfoStore!;
    if (state === "fetching") {
      return "loading...";
    }
    if (state === "error") {
      return "error";
    }
    if (state === "success") {
      return (
        <Card>
          <h2>
            {name} | ID: {id}
          </h2>
          <p>
            Weight: {weight} | Height: {height}
          </p>
          <img src={image!} />
        </Card>
      );
    }
    return null;
  }
}
