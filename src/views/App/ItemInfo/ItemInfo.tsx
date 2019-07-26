import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { IPokemonInfo } from "../../../stores/PokemonInfoStore";

import { Card, Pic, Name, Desc } from "./ItemInfo.styles";

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
      return <Card>loading...</Card>;
    }
    if (state === "error") {
      return <Card>error</Card>;
    }
    if (state === "success") {
      return (
        <Card>
          <Name>
            {name} | ID: {id}
          </Name>
          <Desc>
            Weight: {weight} | Height: {height}
          </Desc>
          <Pic src={image!} />
        </Card>
      );
    }
    return <Card />;
  }
}
