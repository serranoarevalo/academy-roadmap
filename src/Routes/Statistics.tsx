import React from "react";
import styled from "styled-components";
import Route from "../Components/Route";
import NumberCounter from "../Components/NumberCounter";
import CountryCounter from "../Components/CountryCounter";

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
    </Container>
  </Route>
);
