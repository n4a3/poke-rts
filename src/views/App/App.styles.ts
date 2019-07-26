import styled from "styled-components";

export const Main = styled.main`
  font-family: "Arial";
  font-size: 18px;
`;

export const Title = styled.a`
  text-decoration: none;
  font-size: 2rem;
  color: #12b0ce;
  text-align: center;
  display: block;
  :hover {
    color: #cb0021;
  }
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`;
