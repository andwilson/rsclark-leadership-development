import React from "react";
import matchSorter from 'match-sorter'
import ReactTable from "react-table";
import "react-table/react-table.css";
import styled from "styled-components";

const P = styled.p`
  margin-bottom: 1em;
`;

export default ({ data }) => (
  <div>
    <P>As a part of our work to strengthen the field, the Robert Sterling Clark Foundation is creating a resource directory of leadership development programs available to those living, working, and leading in New York City. It is our hope that the resource will serve both organizations and individuals interested in leadership development. We are working to create an easily-navigated and comprehensible platform by collecting and sharing information on leadership development programs and presenting them in a standardized format.</P>
    <P>There are currently {data.allGoogleSheetFormResponses1Row.totalCount} programs. You can discover programs by <i>filtering</i> and <i>sorting</i>, and can click on each to learn more.</P>
    <ReactTable
      data={data.allGoogleSheetFormResponses1Row.edges.map(x => x.node)}
      filterable
      columns={[
        {
          Header: "Leadership Development Programs",
          columns: [
            {
              Header: "Program",
              accessor: "nameOfProgram"
            },
            {
              Header: "Organization",
              accessor: "organization"
            },
            {
              Header: "Level",
              accessor: "experienceLevel"
            },
            {
              Header: "Focus",
              accessor: "focus"
            },
            {
              Header: "Commitment",
              accessor: "commitment"
            }
          ]
        }
      ]}
      className="-striped -highlight"
      defaultPageSize={10}
    />
  </div>
);

export const query = graphql`
  query SheetsQuery {
    allGoogleSheetFormResponses1Row {
      totalCount
      edges {
        node {
          id
          firstName: firstname
          lastName: lastname
          position
          email
          experienceLevel: pleasecheckallthatapplytothetargetlevelofeducationandorcareerexperienceyourprogramseekstoattract
          organization
          nameOfProgram: nameofprogram
          websiteUrl: websiteurl
          focus: pleasecheckallthatapplytoyourprogramAsleadershipprogramsareconstantlyevolvingwewelcomesuggestionstobeaddedviaothertomakethisformmoreaccuratetothevariousprogramfocusareas
          commitment: ifyourprogramdoesnotapplytoanyoftheseoptionspleasechoseotherwithanexplanationofyourprogramscommitment
        }
      }
    }
  }
`;
