import React from "react";
import Category from "../Components/Category";
import courses from "../courses";
import Course from "../Components/Course";

export default () => (
  <>
    {Object.keys(courses).map((name, index) => (
      <Category key={index} title={name}>
        {courses[name].map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </Category>
    ))}
  </>
);
