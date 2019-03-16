import React from "react";
import styled from "../styled-components";

const Container = styled.div`
  margin-bottom: 100px;
  &:not(:last-child) {
    padding-bottom: 120px;
    border-bottom: 1px solid rgba(112, 123, 142, 0.5);
  }
`;

const Title = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.greenColor};
  margin-bottom: 30px;
`;

const Courses = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

interface IProps {
  title: string;
}

const Category: React.SFC<IProps> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Courses>{children}</Courses>
  </Container>
);

export default Category;
