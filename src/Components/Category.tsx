import React, { ReactElement } from "react";
import styled from "../styled-components";

const Container = styled.div`
  margin-bottom: 80px;
  &:not(:last-child) {
    padding-bottom: 80px;
  }
`;

const Title = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.greenColor};
  margin-bottom: 60px;
`;

const Courses = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

interface IProps {
  title?: string;
  titleComponent?: ReactElement;
}

const Category: React.FunctionComponent<IProps> = ({
  title,
  children,
  titleComponent
}) => (
  <Container>
    {titleComponent ? titleComponent : <Title>{title}</Title>}
    <Courses>{children}</Courses>
  </Container>
);

export default Category;
