import React from "react";
import styled from "styled-components";

import bg from "./leadership.jpg"

const Img = styled.img`
  grid-area: 1 / 1 / -1 / -1;
  z-index: -1;
  opacity: 0.2;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Footer = () => (
    <div>
      <Img src={bg} />
    </div>
  );

export default Footer;
