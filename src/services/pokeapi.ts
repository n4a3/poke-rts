class PokeApi {
  private readonly _baseUrl = "https://pokeapi.co/api/v2";

  private async fetch(path: string) {
    return await fetch(`${this._baseUrl}/${path}`)
      .then(data => {
        switch (data.status) {
          case 200:
            return data.json();

          case 404:
            return { error: data.status, errorText: "Not found!" };

          default:
            return { error: data.status, errorText: "Unknown error" };
        }
      })
      .then(json => {
        return json.error
          ? {
              data: null,
              ...json
            }
          : {
              data: { ...json },
              error: null
            };
      })
      .catch(err => {
        return { data: null, error: 599, errorText: err.message };
      });
  }

  async fetchPokemons(offset = 0) {
    const res = await this.fetch(`pokemon/?offset=${offset}&limit=20`);
    console.log("service:", res);
    return res;
  }

  async fetchPokemon(id: number) {
    const res = await this.fetch(`pokemon/${id}`);
    console.log("service:", res);
    return res;
  }
}

const pokeapi = new PokeApi();

export default pokeapi;
