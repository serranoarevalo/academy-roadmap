import React from "react";
import Route from "../Components/Route";
import Category from "../Components/Category";
import { Tracks } from "../courses";
import Course from "../Components/Course";
import styled from "../styled-components";

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

const Color = styled.span`
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.yellowColor};
  text-shadow: 0px 10px 10px rgba(255, 255, 255, 1);
`;

const Blue = styled(Color)`
  color: ${props => props.theme.blueColor};
  margin-left: 10px;
`;

const ColorsContainer = styled.div`
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
        클론코딩 수업을 수강하기 위한, 필수 강의(Required) 그리고 필수는
        아니지만 추천 강의(Recommended)를 정렬한 리스트입니다.
        <ColorsContainer>
          <Color>Yellow = Required</Color> <Blue>Blue = Recommended</Blue>
        </ColorsContainer>
      </HeaderContainer>
    }
  >
    {Tracks.map((track, index) => (
      <Category
        key={index}
        titleComponent={
          <Goal>
            <Title>{track.goal.title}</Title>
            <Description>{track.goal.description}</Description>
            <Link href={track.goal.link!} target="_blank">
              Go to course
            </Link>
            <Requirements>Requirements: </Requirements>
          </Goal>
        }
      >
        {track.requirements.map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </Category>
    ))}
  </Route>
);
