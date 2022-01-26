import { gql, useQuery } from '@apollo/client';

const GET_STEPZEN = gql`
  query MyHelloWorldQuery {
    helloWorld {
      message
    }
  }
`;

function HelloWorld() {
  const { loading, error, data } = useQuery(GET_STEPZEN);

  if (error) return JSON.stringify(error)
  if (loading) return `Loading ...`

  return data.helloWorld.message
}

export default HelloWorld;
