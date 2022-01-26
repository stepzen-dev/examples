import React, { Fragment } from 'react'

function QueryFields(props) {
  const fields = props.fields
  const returnFields = fields.map((field) => (
    <Fragment key={field}>
      <code
        className="return-fields language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `      ${field}`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <br />
    </Fragment>
  ))
  return (
    <>
      {returnFields}
      <code
        className="language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `   }
}`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
    </>
  )
}

export default QueryFields
