import React from "react";
import Route from "../Components/Route";
import Category from "../Components/Category";
import { Memberships } from "../courses";
import Course from "../Components/Course";
import styled from "../styled-components";
import Section from "../Components/Section";

const Goal = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.greenColor};
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  color: ${props => props.theme.purpleColor};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: underline;
`;

const Requirements = styled.span`
  display: block;
  color: ${props => props.theme.darkColor};
  margin-top: 50px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
`;

const ColorsContainer = styled.div`
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 30px;
  padding: 10px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <Route
    descriptionElement={
      <HeaderContainer>
        멤버십 강의는 새로운 업데이트가 있을 때마다 이를 알려주는 구독형
        수업입니다.
        <ColorsContainer>* = Coming soon</ColorsContainer>
      </HeaderContainer>
    }
  >
    {Memberships.map((membership, index) => (
      <Category
        key={index}
        titleComponent={
          <Goal>
            <Title>{membership.class.title}</Title>
            <Description>{membership.class.description}</Description>
            <Link href={membership.class.link!} target="_blank">
              Go to course
            </Link>
            <Requirements>Courses Included: </Requirements>
          </Goal>
        }
      >
        {membership.sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </Category>
    ))}
  </Route>
);
