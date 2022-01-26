import { Countries, States } from './dropDowns'
import React, { useState } from 'react'

function Arguments(props) {
  const [toggle, setToggle] = useState(true)
  let [checkState, setCheckState] = useState(false)
  const fields = props.fields
  let addressInput = []
  let stateInput = []
  let countryInput = []
  let address2Input = []
  let postalInput = []
  let firstnameInput = []
  let lastnameInput = []
  let cityInput = []
  let emailInput = []
  let marketingConsentInput = []
  for (var i = 0; i < fields.length; i++) {
    if (fields[i] === 'state') {
      stateInput.push(fields[i])
    } else if (fields[i] === 'country') {
      countryInput.push(fields[i])
    } else if (fields[i] === 'address2') {
      address2Input.push(fields[i])
    } else if (fields[i] === 'city') {
      cityInput.push(fields[i])
    } else if (fields[i] === 'postal_code') {
      postalInput.push(fields[i])
    } else if (fields[i] === 'firstname') {
      firstnameInput.push(fields[i])
    } else if (fields[i] === 'lastname') {
      lastnameInput.push(fields[i])
    } else if (fields[i] === 'email') {
      emailInput.push(fields[i])
    } else if (fields[i] === 'receive_news') {
      marketingConsentInput.push(fields[i])
    } else {
      addressInput.push(fields[i])
    }
  }
  const addressField = addressInput.map((field) => (
    <li key={field} className="show-field">
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `${field}:`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <input
        name={`${field}`}
        autoComplete="address-line1"
        type="text"
        className="code-input query-inputs"
        onChange={props.onInputchange}
        placeholder={`${field}`}
        required
      />
      {props.errors[`${field}`] && (
        <div className="error-message">{props.errors[`${field}`]}</div>
      )}
      <br />
    </li>
  ))
  const firstnameField = firstnameInput.map((field) => (
    <li key={field} className="show-field">
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `${field}:`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <input
        name={`${field}`}
        autoComplete="given-name"
        type="text"
        className="code-input query-inputs"
        onChange={props.onInputchange}
        placeholder={`${field}`}
        required
      />
      {props.errors[`${field}`] && (
        <div className="error-message">{props.errors[`${field}`]}</div>
      )}
      <br />
    </li>
  ))
  const lastnameField = lastnameInput.map((field) => (
    <li key={field} className="show-field">
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `${field}:`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <input
        name={`${field}`}
        autoComplete="family-name"
        type="text"
        className="code-input query-inputs"
        onChange={props.onInputchange}
        placeholder={`${field}`}
        required
      />
      {props.errors[`${field}`] && (
        <div className="error-message">{props.errors[`${field}`]}</div>
      )}
      <br />
    </li>
  ))
  const emailField = emailInput.map((field) => (
    <li key={field} className="show-field">
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `${field}:`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <input
        name={`${field}`}
        autoComplete="email"
        type="text"
        className="code-input query-inputs"
        onChange={props.onInputchange}
        placeholder={`${field}`}
      />
      <br />
    </li>
  ))
  const cityField = cityInput.map((field) => (
    <li key={field} className="show-field">
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `${field}:`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <input
        name={`${field}`}
        autoComplete="address-level2"
        type="text"
        className="code-input query-inputs"
        onChange={props.onInputchange}
        placeholder={`${field}`}
        required
      />
      {props.errors[`${field}`] && (
        <div className="error-message">{props.errors[`${field}`]}</div>
      )}
      <br />
    </li>
  ))
  const postalField = postalInput.map((field) => (
    <li className={props.stateClass} key={field}>
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `${field}:`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <input
        name={`${field}`}
        autoComplete="postal-code"
        type="text"
        className="code-input query-inputs"
        onChange={props.onInputchange}
        placeholder={`${field}`}
        required
      />
      {props.errors[`${field}`] && (
        <div className="error-message">{props.errors[`${field}`]}</div>
      )}
      <br />
    </li>
  ))
  const listAddress2 = address2Input.map((field) => (
    <li key={field} className="show-field">
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `${field}:`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <input
        name={`${field}`}
        autoComplete="address-line2"
        type="text"
        className="code-input query-inputs"
        onChange={props.onInputchange}
        placeholder={`${field}`}
      />
      <br />
    </li>
  ))
  let stateField = {}
  if (props.internationalValidation === 'false') {
    stateField = stateInput.map((field) => (
      <li className={props.stateClass} key={field}>
        <code
          className="  language-graphql"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              `${field}:`,
              Prism.languages.graphql,
              'graphql'
            ),
          }}
        ></code>
        <select
          name={`${field}`}
          autoComplete="address-level1"
          className="code-input query-inputs"
          onChange={props.onInputchange}
          required={props.stateRequired}
          defaultValue={'DEFAULT'}
        >
          <States />
        </select>
        <br />
      </li>
    ))
  } else {
    stateField = stateInput.map((field) => (
      <li className={props.stateClass} key={field}>
        <code
          className="  language-graphql"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              `${field}:`,
              Prism.languages.graphql,
              'graphql'
            ),
          }}
        ></code>
        <input
          name={`${field}`}
          autoComplete="address-level1"
          type="text"
          className="code-input query-inputs"
          onChange={props.onInputchange}
          placeholder={`${field}`}
          required={props.stateRequired}
        />
        <br />
      </li>
    ))
  }
  const countryField = countryInput.map((field) => (
    <li key={field} className="show-field">
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `${field}:`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <select
        name={`${field}`}
        autoComplete="country-name"
        className="code-input query-inputs"
        onChange={props.onCountrychange}
        required
        defaultValue={'DEFAULT'}
      >
        <Countries />
      </select>
      <br />
    </li>
  ))
  const marketingConsentField = marketingConsentInput.map((field) => (
    <li key={field} className="show-field checkbox">
      <code
        className="update language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `Update me on StepZen news:`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <input
        className="update-checkbox"
        onChange={(e) => {
          setCheckState((prevState) => !prevState)
          setToggle((prevState) => !prevState)
          props.onConsentchange(e, toggle)
        }}
        type="checkbox"
        name="receive_news"
        value={checkState}
        checked={checkState}
      />
      <br />
    </li>
  ))
  return (
    <>
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `{
  location (`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
      <ul className="query-arguments">
        {firstnameField}
        {lastnameField}
        {emailField}
        {addressField}
        {listAddress2}
        {cityField}
        {countryField}
        {postalField}
        {stateField}
        {marketingConsentField}
      </ul>
      <code
        className="  language-graphql"
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            `  ) {
`,
            Prism.languages.graphql,
            'graphql'
          ),
        }}
      ></code>
    </>
  )
}

export default Arguments
