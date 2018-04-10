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
      defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
      columns={[
        {
          Header: "Leadership Development Programs",
          columns: [
            {
              Header: "Program",
              accessor: "nameOfProgram",
              filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nameOfProgram"] }),
              filterAll: true
            },
            {
              Header: "Organization",
              accessor: "organization",
              filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["organization"] }),
              filterAll: true
            },
            {
              Header: "Level",
              accessor: "experienceLevel",
              filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["experienceLevel"] }),
              filterAll: true
            },
            {
              Header: "Focus",
              accessor: "focus",
              filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["focus"] }),
              filterAll: true
            },
            {
              Header: "Commitment",
              accessor: "commitment",
              filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["commitment"] }),
              filterAll: true
            }
          ]
        }
      ]}
      className="-striped -highlight"
      defaultPageSize={10}
      SubComponent={row => {
        return (
          <div style={{ padding: "20px" }}>
            <em>
              Program details!!!
            </em>
          </div>
        );
      }}
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
