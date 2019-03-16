import React from "react";
import Category from "../Components/Category";
import { Categories } from "../courses";
import Course from "../Components/Course";
import Route from "../Components/Route";

export default () => (
  <Route
    description={
      "Here all all the courses we have, by categories, in no specific order."
    }
  >
    {Object.keys(Categories).map((name, index) => (
      <Category key={index} title={name}>
        {Categories[name].map((course, index) => (
          <Course key={index} {...course} />
        ))}
      </Category>
    ))}
  </Route>
);
