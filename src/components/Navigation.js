import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const H2 = styled.h2`
  font-size: 20px;
  color: #015a84;
  margin: 0;
  padding: 0;
`;

const A = styled.a`
  background: #fecb2f;
  background-image: -webkit-linear-gradient(top, #fecb2f, #edbc2b);
  background-image: -moz-linear-gradient(top, #fecb2f, #edbc2b);
  background-image: -ms-linear-gradient(top, #fecb2f, #edbc2b);
  background-image: -o-linear-gradient(top, #fecb2f, #edbc2b);
  background-image: linear-gradient(to bottom, #fecb2f, #edbc2b);
  -webkit-border-radius: 7;
  -moz-border-radius: 7;
  border-radius: 7px;
  border: solid #cfa62c 1px;
  font-weight: bold;
  font-size: 16px;
  color: black;
  text-decoration: none;
  padding: 7px;
  &:hover {
    background: #ffd452;
    background-image: -webkit-linear-gradient(top, #ffd452, #fecb2f);
    background-image: -moz-linear-gradient(top, #ffd452, #fecb2f);
    background-image: -ms-linear-gradient(top, #ffd452, #fecb2f);
    background-image: -o-linear-gradient(top, #ffd452, #fecb2f);
    background-image: linear-gradient(to bottom, #ffd452, #fecb2f);
    text-decoration: none;
  }
`;

const Navigation = () => (
  <Div>
    <H2>Leadership Development Directory</H2>
    <A
      href="https://docs.google.com/forms/d/e/1FAIpQLSem2TOPIt8e72pK7xQ6CI5bBIPADGjYIM5V4QVZ8CpWSbYZyA/viewform?c=0&w=1"
      target="_blank"
      >
      Add your program
    </A>
  </Div>
);

export default Navigation;
