import React from "react";
import styled from "../styled-components";
import { ICourse } from "../courses";

const Container = styled.div``;

const Title = styled.span``;

const Description = styled.p``;

const Link = styled.a``;

const ComingSoon = styled(Link)``;

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
