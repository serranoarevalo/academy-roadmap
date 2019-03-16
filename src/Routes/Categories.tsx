import React from "react";
import Category from "../Components/Category";
import { Categories } from "../courses";
import Course from "../Components/Course";
import Route from "../Components/Route";

export default () => (
  <Route
    description={
      "현재 노마드 아카데미에 있는 모든 강의들을 Beginner, Junior, Senior 난이도별로 정렬한 리스트입니다. "
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
