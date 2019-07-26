import React, { Component, Fragment } from "react";
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

    return (
      <Card>
        {state === "fetching" ? "loading..." : null}
        {state === "error" ? "error" : null}
        {state === "success" ? (
          <Fragment>
            <Name>
              {name} | ID: {id}
            </Name>
            <Desc>
              Weight: {weight} | Height: {height}
            </Desc>
            <Pic src={image!} />
          </Fragment>
        ) : null}
      </Card>
    );
  }
}
