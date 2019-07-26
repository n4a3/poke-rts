import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  position: relative;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const Buttons = styled.div`
  position: absolute;
`;

export { Wrapper, List, Buttons };
