import React, { ReactElement } from "react";
import styled from "../styled-components";

const Description = styled.p`
  text-align: center;
  width: 100%;
  margin-bottom: 80px;
  font-size: 14px;
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
    <Description>
      {description}
      {descriptionElement}
    </Description>
    {children}
  </>
);

export default Route;
