import React from "react";
import matchSorter from "match-sorter";
import ReactTable from "react-table";
import "react-table/react-table.css";
import styled from "styled-components";

export default ({ data }) => (
  <div>
    <ReactTable
      data={data.allGoogleSheetFormResponses1Row.edges.map(x => x.node)}
      filterable
      defaultFilterMethod={(filter, row) =>
        String(row[filter.id]) === filter.value
      }
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
            <em>Program details!!!</em>
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
