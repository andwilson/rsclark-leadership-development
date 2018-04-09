import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

const Div = styled.div `
  grid-area: navigation;
`;

const Li = styled.li `

`;

const NavLink = styled(Link)`
  font-family: Cutive;
`;

const Ul = styled.ul `
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background-color: white;
  border-bottom: 1px solid black;
  box-shadow: 0px 1px 0px rgba(0,0,0,0.25);
`;

const Title = styled.h1`
  margin-top: 10px;
  text-align:center;
`;

const Wrapper = styled.div`
  max-width: 960px;
  margin: auto;
`;


const Navigation = () => (
  <Div>
      <Wrapper>
      <Ul>
        <Li>
          <NavLink to={`/`}>Project12</NavLink>
        </Li>
        <Li>
          <NavLink to={`/projects/`}>Projects</NavLink>
        </Li>
        <Li>
          <NavLink to={`/essays/`}>Essays</NavLink>
        </Li>
        <Li>
          <NavLink to={`/contact/`}>Contact</NavLink>
        </Li>
      </Ul>
    </Wrapper>
  </Div>
);

export default Navigation;
