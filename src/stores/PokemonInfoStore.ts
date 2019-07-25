import { observable, action } from "mobx";
import pokeapi from "../services/pokeapi";

export interface IPokemonInfo {
  id: number;
  name: string;
  weight: number;
  height: number;
  image: string | null;
  state: string | null;
  fetchPokemon(id: number): void;
}

class PokemonInfo implements IPokemonInfo {
  @observable id: number;
  @observable name: string;
  @observable weight: number;
  @observable height: number;
  @observable image: string;
  @observable state: string | null = null;

  @action.bound
  fetchPokemon(id: number) {
    this.state = "fetching";
    pokeapi.fetchPokemon(id).then(
      action("fetched successful!", (pokemon: any) => {
        const { id, name, weight, height } = pokemon.data;
        const image = pokemon.data.sprites.front_default;
        this.id = id;
        this.name = name;
        this.weight = weight;
        this.height = height;
        if (image) {
          this.image = image;
        } else {
          this.image = "https://via.placeholder.com/100?text=404";
        }
        this.state = "success";
      }),
      action("fetch error", () => {
        this.state = "error";
      })
    );
  }
}

const pokemonInfoStore = new PokemonInfo();

export default pokemonInfoStore;
