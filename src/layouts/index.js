import React from "react";
import styled from "styled-components";

import "../styles/normalize.css"
import "../styles/base.css"

import Background from "../components/Background"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const Wrapper = styled.div`
`;

export default ({ children}) => (
  <Wrapper>
      {children()}
  </Wrapper>
);
