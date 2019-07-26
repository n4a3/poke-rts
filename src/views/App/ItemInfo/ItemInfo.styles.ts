import styled from "styled-components";

const Card = styled.div`
  background-color: #eceee1;
  color: blueviolet;
  width: 250px;
  text-align: center;
`;

const Pic = styled.img`
  width: 100%;
  image-rendering: pixelated;
`;

const Name = styled.h2`
  text-transform: capitalize;
`;

const Desc = styled.p``;

export { Card, Pic, Name, Desc };
