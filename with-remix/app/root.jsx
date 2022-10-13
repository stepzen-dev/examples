import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';

export const meta = () => ({
  charset: 'utf-8',
  title: 'Remix + StepZen Example',
  viewport: 'width=device-width,initial-scale=1',
});

export async function loader() {
  var graphql = JSON.stringify({
    query:
      'query SpaceXQueries { spacex_company { ceo cto cto_propulsion headquarters { address city state } } }',
  });

  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `apikey ${process.env.STEPZEN_API_KEY}`,
    },
    body: graphql,
  };

  const res = await fetch(
    process.env.STEPZEN_ENDPOINT,
    requestOptions,
  );
  const data = await res.json();
  return {
    data,
  };
}

export default function App() {
  const { data } = useLoaderData().data;

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <h1>GraphQL SpaceX data</h1>
        <p>
          CEO - {data.spacex_company.ceo}
          <br />
          CTO - {data.spacex_company.cto}
          <br />
          CTO Propulsion - {data.spacex_company.cto_propulsion}
          <br />
          Headquarters - {data.spacex_company.headquarters.address},{' '}
          {data.spacex_company.headquarters.city},{' '}
          {data.spacex_company.headquarters.state}
        </p>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
