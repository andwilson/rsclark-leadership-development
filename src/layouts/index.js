import React from "react";
import styled from "styled-components";

import "../styles/normalize.css"

import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "navigation navigation navigation"
                       "content    content    content"
                       "footer     footer     footer";
  margin: auto;
  max-width: 960px;
`;

const Content = styled.div`
  grid-area: content;
`;

export default ({ children}) => (
  <Wrapper>

    <Navigation />

    <Content>
      {children()}
    </Content>

  </Wrapper>
);
