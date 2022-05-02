import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function HelloWorld() {
  const data = useStaticQuery(graphql`
    query MyStepZenQuery {
      stepzen {
        helloWorld {
          message
        }
      }
    }
  `);

  return <>{data.stepzen.helloWorld.message}</>;
}
