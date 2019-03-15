import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "./Logo.svg";
import styled from "../styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 22px;
  margin: 20px 0px;
`;

const SwitchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 120px);
  grid-gap: 10px;
  position: relative;
`;

const SLink = styled.span<{ isActive: boolean }>`
  text-align: center;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  color: ${props =>
    props.isActive ? props.theme.greenColor : props.theme.purpleColor};
  transition: color 0.3s linear;
`;

const Card = styled.div<{ translated: boolean }>`
  position: absolute;
  top: -7px;
  background-color: white;
  width: 120px;
  height: 30px;
  box-shadow: 0 2px 4px rgba(50, 50, 93, 0.1);
  border-radius: 3px;
  transform: ${props => (props.translated ? "translateX(130px)" : "none")};
  transition: transform 0.2s ease-in-out;
`;

const Switch = withRouter(({ location: { pathname } }) => {
  return (
    <SwitchContainer>
      <Card translated={pathname === "/careers"} />
      <SLink isActive={pathname === "/"}>
        <Link to="/">Categories</Link>
      </SLink>
      <SLink isActive={pathname === "/careers"}>
        <Link to="/careers">Careers</Link>
      </SLink>
    </SwitchContainer>
  );
});

export default () => (
  <Header>
    <Logo width="50" />
    <Title>Roadmap</Title>
    <Switch />
  </Header>
);
