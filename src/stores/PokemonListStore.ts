import { observable, action } from "mobx";
import pokeapi from "../services/pokeapi";

export interface IPokemonItem {
  url: string;
  name: string;
}

export interface IPokemonList {
  items: Array<IPokemonItem>;
  currentOffset: number;
  maxOffset: number;
  state: string | null;
  fetchPokemonList(): void;
  prevOffset(): void;
  nextOffset(): void;
}

class PokemonList implements IPokemonList {
  @observable items: Array<IPokemonItem>;
  @observable currentOffset: number = 0;
  @observable maxOffset: number;
  @observable state: string | null = null;

  @action.bound
  fetchPokemonList() {
    this.state = "fetching";
    pokeapi.fetchPokemons(this.currentOffset).then(
      action("response from service", (data: any) => {
        if (data.error) {
          this.state = "error";
          return;
        }
        this.items = data.data.results;
        this.maxOffset = Math.trunc(data.data.count / 20) * 20;
        this.state = "success";
      }),
      action("fetch error", () => {
        this.state = "error";
      })
    );
  }

  @action.bound
  prevOffset() {
    if (this.currentOffset >= 20) {
      this.currentOffset -= 20;
      this.fetchPokemonList();
    }
  }

  @action.bound
  nextOffset() {
    if (this.currentOffset < this.maxOffset) {
      this.currentOffset += 20;
      this.fetchPokemonList();
    }
  }
}

const pokemonListStore = new PokemonList();

export default pokemonListStore;
