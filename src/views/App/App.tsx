import React from "react";

import { Main, Title, Wrapper } from "./App.styles";

import ItemList from "./ItemList/ItemList";
import ItemInfo from "./ItemInfo/ItemInfo";

const App: React.FC = () => {
  return (
    <Main>
      <Title href="https://github.com/n4a3/poke-rts">
        PokeAPI: React + TypeScript + MobX + Styled Components
      </Title>
      <Wrapper>
        <ItemList />
        <ItemInfo />
      </Wrapper>
    </Main>
  );
};

export default App;
