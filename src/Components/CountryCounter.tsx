import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  text-align: center;
  min-width: 220px;
  padding: 50px 0px;
  border-radius: 11px;
  box-shadow: -1px -1px 5px 0 rgba(26, 26, 67, 0.05),
    -12px 20px 125px -25px rgba(50, 50, 93, 0.5),
    -18px 20px 75px -37.5px rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(to bottom, #ff9500, #ff5e3a);
  color: white;
  font-weight: 300;
`;

const Number = styled.span`
  font-size: 62px;
  font-variant-numeric: tabular-nums;
`;

const Text = styled.span`
  display: block;
  margin-top: 20px;
  font-size: 15px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
`;

const CountryCounter: React.FunctionComponent = () => {
  const [current, setCurrent] = useState(0);

  const startCount = () => {
    if (current < 29) {
      setTimeout(() => setCurrent(current + 1), 100);
    } else {
      return;
    }
  };

  useEffect(() => {
    startCount();
  }, [current]);

  return (
    <Container>
      <Number>{current}</Number>
      <Text>Countries</Text>
    </Container>
  );
};

export default CountryCounter;
