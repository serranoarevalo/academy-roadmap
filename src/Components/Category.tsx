import React from "react";
import styled from "../styled-components";

const Container = styled.div``;

const Title = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.greenColor};
`;

interface IProps {
  title: string;
}

const Category: React.SFC<IProps> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default Category;
