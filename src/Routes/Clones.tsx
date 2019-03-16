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

const Description = styled.p`
  margin-bottom: 20px;
`;

const Link = styled.a`
  color: ${props => props.theme.purpleColor};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: underline;
`;

export default () => (
  <Route
    description={
      "The clones are the biggest projects. Before you take them make sure you take all the requirements"
    }
  >
    {Object.keys(Tracks).map((name, index) => (
      <Category
        key={index}
        titleComponent={
          <Goal>
            <Title>{Tracks[name].goal.title}</Title>
            <Description>{Tracks[name].goal.description}</Description>
            <Link href={Tracks[name].goal.link!}>Go to course</Link>
          </Goal>
        }
      >
        {Tracks[name].requirements.map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </Category>
    ))}
  </Route>
);
