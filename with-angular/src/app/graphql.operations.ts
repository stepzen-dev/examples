import { gql } from 'apollo-angular'

const GET_POSTS = gql`
    query GetPosts {
        posts {
            id
            title
            description
        }
  }
`

const GET_POSTS_BY_USERNAME = gql`
    query GetPostsByUsername($username: String!) {
        posts(username: $username) {
            id
            title
            description
        }
  }
`

export { GET_POSTS, GET_POSTS_BY_USERNAME }