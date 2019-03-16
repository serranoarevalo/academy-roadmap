import React from "react";
import Category from "../Components/Category";
import courses from "../courses";
import Course from "../Components/Course";
import styled from "../styled-components";
import Route from "../Components/Route";

export default () => (
  <Route
    description={
      "Here all all the courses we have, by categories, in no specific order."
    }
  >
    {Object.keys(courses).map((name, index) => (
      <Category key={index} title={name}>
        {courses[name].map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </Category>
    ))}
  </Route>
);
