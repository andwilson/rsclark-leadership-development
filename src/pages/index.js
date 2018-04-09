import React from "react";

export default ({ data }) => (
  <div>
    <h4>{data.allGoogleSheetFormResponses1Row.totalCount} Programs</h4>
    <ul>
    {data.allGoogleSheetFormResponses1Row.edges.map(({ node }) => (
        <li>{node.nameOfProgram} | {node.organization}</li>
    ))}
    </ul>
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
