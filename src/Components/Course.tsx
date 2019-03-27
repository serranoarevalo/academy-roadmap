import React from "react";
import styled from "../styled-components";
import { ICourse } from "../courses";

const Container = styled.div<{ required: boolean; recommended: boolean }>`
  padding: 20px;
  border-radius: 7px;
  background-color: white;
  min-height: 150px;
  text-align: center;
  color: ${props => props.theme.greyColor};
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 14px;
  border: ${props => {
    if (props.recommended) {
      return `3px solid ${props.theme.blueColor}`;
    } else if (props.required) {
      return `3px solid ${props.theme.yellowColor}`;
    } else {
      return "none";
    }
  }};
  transition-property: box-shadow, transform;
  transition-duration: 0.15s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 15px 35px 0 rgba(23, 55, 87, 0.1),
      0 5px 15px 0 rgba(0, 0, 0, 0.07);
    transform: translateY(-2px);
  }
`;

const Title = styled.h3`
  color: ${props => props.theme.blackColor};
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Description = styled.p`
  line-height: 1.3;
  text-align: left;
`;

const Link = styled.span`
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

const Course: React.FunctionComponent<ICourse> = ({
  title,
  description,
  link,
  required = false,
  recommended = false
}) => (
  <a href={link!} target="_blank">
    <Container required={required} recommended={recommended}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {link ? <Link>Go to course</Link> : <ComingSoon>Coming Soon</ComingSoon>}
    </Container>
  </a>
);

export default Course;
