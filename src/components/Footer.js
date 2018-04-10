import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-self: center;
`;

const Footer = () => (
    <Div>
      Copyright {(new Date()).getFullYear()}
    </Div>
  );

  export default Footer;
