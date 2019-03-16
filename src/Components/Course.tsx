import React from "react";
import styled from "../styled-components";
import { ICourse } from "../courses";

const Container = styled.div`
  padding: 20px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  min-height: 150px;
  text-align: center;
  color: ${props => props.theme.greyColor};
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 14px;
`;

const Title = styled.h3`
  color: ${props => props.theme.blackColor};
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 500;
`;

const Description = styled.p`
  line-height: 1.3;
`;

const Link = styled.a`
  position: absolute;
  bottom: -10px;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  background-color: #6772e5;
  color: white;
  width: 80%;
  text-transform: uppercase;
  font-size: 13px;
  border-radius: 4px;
  height: 35px;
  line-height: 35px;
`;

const ComingSoon = styled(Link)`
  background-color: #6d7b90;
  cursor: not-allowed;
`;

const Course: React.SFC<ICourse> = ({ title, description, link }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {link ? (
      <Link href={link} target="_blank">
        Go to course
      </Link>
    ) : (
      <ComingSoon>Coming Soon</ComingSoon>
    )}
  </Container>
);

export default Course;
