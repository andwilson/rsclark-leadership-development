import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-between;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
`;

const A = styled.a`
  font-weight: bold;
  font-size: 16px;
  color: black;
  text-decoration: none;
  background-color: lightgrey;
  box-shadow: 0 0 2px #ddd;
  border-radius: 7px;
  padding: 7px;
`;

const Navigation = () => (
  <Div>
    <H2>Leadership Development Directory</H2>
    <A
      href="https://docs.google.com/forms/d/e/1FAIpQLSem2TOPIt8e72pK7xQ6CI5bBIPADGjYIM5V4QVZ8CpWSbYZyA/viewform?c=0&w=1"
      target="_blank"
      >
      Add a listing
    </A>
  </Div>
);

export default Navigation;
