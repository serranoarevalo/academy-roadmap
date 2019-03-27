import React from "react";
import styled from "styled-components";
import Route from "../Components/Route";
import NumberCounter from "../Components/NumberCounter";
import CountryCounter from "../Components/CountryCounter";
import { RockStarTrack } from "../courses";
import Course from "../Components/Course";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const NumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  justify-content: space-between;
`;

const CoursesContainer = styled.div`
  width: 50%;
  margin: 100px auto;
  padding: 50px;
  border-radius: 90px;
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 26px;
  background-image: linear-gradient(to right, #c644fc, #5856d6);
  box-shadow: inset 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const RockstarTitle = styled.span`
  margin-top: 30px;
  font-size: 32px;
`;

const RockstarContainer = styled.div`
  margin: 100px 0px;
  display: grid;
  width: 50%;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 50px;
`;

export default () => (
  <Route
    description={
      "노마드 코더의 최고 인기강의는? 수강생은 몇 명? 통계자료를 공개합니다."
    }
  >
    <Container>
      <NumbersContainer>
        <NumberCounter baseNumber={7500} />
        <CountryCounter />
      </NumbersContainer>
      <CoursesContainer>
        <span>22 Courses. 66% of them for FREE</span>
      </CoursesContainer>
      <RockstarTitle>Top 3 Rockstar Courses:</RockstarTitle>
      <RockstarContainer>
        {RockStarTrack.map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </RockstarContainer>
    </Container>
  </Route>
);
