import React, { ReactElement } from "react";
import styled from "../styled-components";

const Container = styled.div`
  margin-bottom: 80px;
  font-size: 14px;
`;

const Description = styled.p`
  text-align: center;
  width: 100%;
`;

interface IProps {
  description?: string;
  descriptionElement?: ReactElement;
}

const Route: React.FunctionComponent<IProps> = ({
  description,
  descriptionElement,
  children
}) => (
  <>
    <Container>
      <Description>{description}</Description>
      {descriptionElement}
    </Container>
    {children}
  </>
);

export default Route;
