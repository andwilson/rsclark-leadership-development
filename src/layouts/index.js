import React from "react";
import styled from "styled-components";

import "../styles/normalize.css"

import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 60px auto 60px;
  grid-template-areas: "navigation"
                       "content"
                       "footer";
  margin: auto;
  max-width: 960px;
`;

const Content = styled.div`
  grid-area: content;
`;

const NavigationArea = styled(Navigation)`
  grid-area: navigation;
`;

const FooterArea = styled(Footer)`
  grid-area: footer;
`;

export default ({ children}) => (
  <Wrapper>

    <NavigationArea />

    <Content>
      {children()}
    </Content>

    <FooterArea />

  </Wrapper>
);
