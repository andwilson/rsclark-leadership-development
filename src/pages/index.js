import React from "react";
import matchSorter from 'match-sorter'
import ReactTable from "react-table";
import "react-table/react-table.css";
import styled from "styled-components";


export default ({ data }) => (
  <div>
    <ReactTable
      data={data.allGoogleSheetFormResponses1Row.edges.map(x => x.node)}
      filterable
      defaultFilterMethod={(filter, row) =>
        String(row[filter.id]) === filter.value}
      columns={[
        {
          Header: `${data.allGoogleSheetFormResponses1Row.totalCount} Programs`,
          columns: [
            {
              Header: "Program",
              accessor: "nameOfProgram"
            },
            {
              Header: "Organization",
              accessor: "organization"
            }
          ]
        },
        {
          Header: "Filters",
          columns: [
            {
              Header: "Experience",
              accessor: "experienceLevel"
            },
            {
              Header: "Sector",
              accessor: "sector"
            },
            {
              Header: "Commitment",
              accessor: "commitment"
            },
          ]
        }
      ]}
      className="-striped -highlight"
      defaultPageSize={15}
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
          sector: pleasecheckallthatapplytoyourprogramAsleadershipprogramsareconstantlyevolvingwewelcomesuggestionstobeaddedviaothertomakethisformmoreaccuratetothevariousprogramfocusareas
          commitment: ifyourprogramdoesnotapplytoanyoftheseoptionspleasechoseotherwithanexplanationofyourprogramscommitment
        }
      }
    }
  }
`;
