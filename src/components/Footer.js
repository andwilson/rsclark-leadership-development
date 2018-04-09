import React from "react";
import styled from "styled-components";

const Div = styled.div`
  grid-area: footer;
  background-color: grey;
`;

const Footer = () => (
    <Div>
      Copyright {(new Date()).getFullYear()}
    </Div>
  );

  export default Footer;
