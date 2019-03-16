import React from "react";
import styled from "../styled-components";

const Description = styled.p`
  text-align: center;
  width: 100%;
  margin-bottom: 80px;
  font-size: 14px;
`;

interface IProps {
  description: string;
}

const Route: React.SFC<IProps> = ({ description, children }) => (
  <>
    <Description>{description}</Description>
    {children}
  </>
);

export default Route;
