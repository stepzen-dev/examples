import { gql } from "graphql-tag"

export const CREATE_USER = gql`
mutation CreateUser ($name: String!, $photoUrl: String!, $email: String!, $familyName: String!, $givenName: String!, $id: String!) {
  createUser(
    data: {
        name: $name
        photoUrl: $photoUrl
        email: $email
        familyName: $familyName
        givenName: $givenName
        id: $id
    }
  ) {
    email
    givenName
    familyName
    name
    photoUrl
  }
}
`;