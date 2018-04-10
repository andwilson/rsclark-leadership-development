import React from "react";
import styled from "styled-components";

import logo from "./rscf-logo-clear.png"

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Img = styled.img`
  height: 50px;
  margin: 0;
`;

const Footer = () => (
    <Div>
      <span>&copy; {(new Date()).getFullYear()}</span>
      <a href="https://www.rsclark.org/" target="_blank"><Img src={logo} /></a>
    </Div>
  );

  export default Footer;
