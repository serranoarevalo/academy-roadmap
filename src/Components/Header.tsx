import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "./Logo.svg";
import styled from "../styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 22px;
  margin: 20px 0px;
`;

const Card = styled.div<{ pathname: string }>`
  position: absolute;
  top: -7px;
  background-color: white;
  width: 180px;
  height: 30px;
  box-shadow: 0 2px 4px rgba(50, 50, 93, 0.1);
  border-radius: 3px;
  transform: ${props => {
    if (props.pathname === "/") {
      return "none";
    } else if (props.pathname === "/clones") {
      return "translateX(188px)";
    } else if (props.pathname === "/memberships") {
      return "translateX(377.5px)";
    }
  }};
  transition: transform 0.2s ease-in-out;
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

const SwitchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  grid-gap: 10px;
  margin-top: 20px;
  position: relative;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    ${Card} {
      display: none;
    }
    a {
      margin-bottom: 20px;
    }
  }
`;

const Switch = withRouter(({ location: { pathname } }) => {
  return (
    <SwitchContainer>
      <Card pathname={pathname} />
      <Link to="/" style={{ textAlign: "center" }}>
        <SLink isActive={pathname === "/"}>Courses</SLink>
      </Link>
      <Link to="/clones" style={{ textAlign: "center" }}>
        <SLink isActive={pathname === "/clones"}>🔥 Clones 🔥</SLink>
      </Link>
      <Link to="/memberships" style={{ textAlign: "center" }}>
        <SLink isActive={pathname === "/memberships"}>🚀 Memberships 🚀</SLink>
      </Link>
    </SwitchContainer>
  );
});

export default () => (
  <Header>
    <Logo width="50" />
    <Title>Course Roadmap</Title>
    <Switch />
  </Header>
);
