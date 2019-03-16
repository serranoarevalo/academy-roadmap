import React from "react";
import styled from "../styled-components";
import { ISection } from "../courses";

const Container = styled.div<{ released: boolean }>`
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  line-height: 1.3;
  font-size: 14px;
`;

const Section: React.FunctionComponent<ISection> = ({ released, name }) => (
  <Container released={released}>
    {name}
    {!released ? " *" : ""}
  </Container>
);

export default Section;
