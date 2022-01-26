import Meta from '../components/Meta'
import Layout from '../components/Layout'
import matter from 'gray-matter'
import Prism from 'prismjs'
import beautify from 'js-beautify/js'
import 'prismjs/components/prism-graphql'
import 'prism-themes/themes/prism-shades-of-purple.css'
import axios from 'axios'

import { getFields } from '../lib/api'
import QueryFields from '../components/stickers/queryFields'
import Arguments from '../components/stickers/queryArguments'
import Connect from '../components/stickers/connect'

class RequestStickers extends React.Component {
  constructor() {
    super()
    this.state = {
      queryData: [],
      queryFields: [],
      queryState: 'waiting',
      notificationStyle: 'hide',
      policyMessage: 'notification',
      stateClass: 'hide',
      stateRequired: false,
      countSelections: 1,
      internationalValidation: 'true',
      errors: {},
      playButtonStyle: 'play-button',
      demoResponse: `/*
Press the run button after adding your shipping details so we can snail-mail you stickers!
*/`,
    }
    this.onInputchange = this.onInputchange.bind(this)
    this.onCountrychange = this.onCountrychange.bind(this)
    this.onConsentchange = this.onConsentchange.bind(this)
  }

  handleDemoClick = async (keys, e) => {
    e.preventDefault()
    const result = {}
    const absent = keys.filter((e) => !this.state.queryFields.includes(e))

    // this for loop inserts values from form fields into state
    for (let index = 0; index < this.state.queryFields.length; ++index) {
      result[this.state.queryFields[index]] = this.state.queryData[index]
    }
    // this for loop inserts an empty string for empty fields so that the Airtable will not return an error.
    for (let index = 0; index < absent.length; ++index) {
      if (absent[index] === 'receive_news') {
        result[absent[index]] = false
      } else {
        result[absent[index]] = ''
      }
    }
    if (result.receive_news) {
      result.receive_news = JSON.parse(result.receive_news)
    }
    //args to be used in Airtable query
    let args = JSON.stringify(result)
    args = args.replace(/"([^"]+)":/g, '$1:').replace(/\uFFFF/g, '\\"')
    args = args.substring(1, args.length - 1)
    this.setState({
      queryState: 'sent',
      demoResponse: '<span className="token comment">/* Loading... */</span>',
    })
    // body query will be this.props.query
    let validationQuery = ''
    let addressValidity = ''
    // This if-else checks if address2 has been filled out and adds it to the address for "strict" validation testing
    if (this.state.address2 === undefined) {
      addressValidity = `${this.state.address}`
    } else {
      addressValidity = `${this.state.address}, ${this.state.address2}`
    }
    if (this.state.internationalValidation === 'false') {
      validationQuery = `
        mutation MyMutation {
              lob_us_verification(
                primary_line: "${addressValidity}"
                city: "${this.state.city}"
                state: "${this.state.state}"
                zip_code: "${this.state.postal_code}"
              ) {
                deliverability
                deliverability_analysis {
                  ews_match
                  dpv_footnotes
                }
              }
            }
          `
    } else {
      validationQuery = `
        mutation MyMutation {
          lob_intl_verification(
            primary_line: "${addressValidity}"
            city: "${this.state.city}"
            state: "${this.state.state}"
            postal_code: "${this.state.postal_code}"
            country: "${this.state.country}"
          ) {
            deliverability
            country
          }
        }
      `
    }

    let airtableShipment = `
        mutation MyMutation {
            createShipment(
              ${args}
            ) {
              createdTime
              id
              fields {
                ${keys}
              }
            }
          }
        `

    let bodyLob = { query: validationQuery }
    let bodyAirtable = { query: airtableShipment }

    await axios.post('/api/stickersnewquery', bodyLob).then((res) => {
      let response = ``
      if (this.state.internationalValidation === 'false') {
        if (res.data.data.data.lob_us_verification === null) {
          response = `{
              "data": {
                "lob_us_verification": null
              },
              "errors": [
                {
                  "message": "Connector: HTTP Error: Unprocessable Entity. Double-check your address?",
                  "path": [
                    "lob_us_verification"
                  ]
                }
              ]
            }`
          this.setState({
            demoResponse: beautify(response),
          })
        }
        if (
          res.data.data.data.lob_us_verification.deliverability ===
          'deliverable'
        ) {
          return axios
            .post('/api/stickersairtableshipment', bodyAirtable)
            .then((res) => {
              response = beautify(JSON.stringify(res.data.data), {
                indent_size: 2,
              })
              this.setState({
                demoResponse: beautify(JSON.stringify(res.data.data), {
                  indent_size: 2,
                }),
                playButtonStyle: 'hide',
                notificationStyle: 'notification',
                policyMessage: 'hide',
              })
            })
        } else {
          this.setState({
            demoResponse: beautify(JSON.stringify(res.data.data), {
              indent_size: 2,
            }),
          })
        }
      } else {
        if (res.data.data.data.lob_intl_verification === null) {
          response = `{
              "data": {
                "lob_intl_verification": null
              },
              "errors": [
                {
                  "message": "Connector: HTTP Error: Unprocessable Entity. Double-check your address?",
                  "path": [
                    "lob_intl_verification"
                  ]
                }
              ]
            }`
          this.setState({
            demoResponse: beautify(response),
          })
        }
        if (
          res.data.data.data.lob_intl_verification.deliverability ===
          'deliverable'
        ) {
          return axios
            .post('/api/stickersairtableshipment', bodyAirtable)
            .then((res) => {
              response = beautify(JSON.stringify(res.data.data), {
                indent_size: 2,
              })
              this.setState({
                demoResponse: beautify(JSON.stringify(res.data.data), {
                  indent_size: 2,
                }),
                playButtonStyle: 'hide',
                notificationStyle: 'notification',
                policyMessage: 'hide',
              })
            })
        } else {
          this.setState({
            demoResponse: beautify(JSON.stringify(res.data.data), {
              indent_size: 2,
            }),
          })
        }
      }
    })
    // .catch(function (error) {
    //   if (error.response) {
    //     console.log(error.response.data)
    //     console.log(error.response.status)
    //     console.log(error.response.headers)
    //   } else if (error.request) {
    //     console.log(error.request)
    //   } else {
    //     console.log('Error', error.message)
    //   }
    //   console.log(error.config)
    // })
  }
  //concats input as it's entered
  onInputchange(event) {
    event.preventDefault()
    const { name, value } = event.target
    let errors = this.state.errors
    const validCityRegex = RegExp(
      /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/i
    )
    const validPostalRegex = RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/i)

    switch (name) {
      case 'address':
        errors.address =
          value.length < 7 ? 'Address must be 5 characters long.' : undefined
        break
      case 'city':
        errors.city = validCityRegex.test(value)
          ? undefined
          : 'City is not valid.'
        break
      case 'postal_code':
        if (this.state.internationalValidation === 'false') {
          errors.postal_code = validPostalRegex.test(value)
            ? undefined
            : 'Zipcode is not valid.'
          break
        } else {
          errors.postal_code = undefined
        }
      default:
        break
    }
    this.setState({ errors, [name]: value }, () => {})
    if (Object.values(errors).every((er) => er === undefined)) {
      this.setState({
        playButtonStyle: 'play-button',
      })
    } else {
      this.setState({
        playButtonStyle: 'hide',
      })
    }
    this.setState({
      [name]: value,
      queryData: this.state.queryData.concat([value]),
      queryFields: this.state.queryFields.concat([name]),
    })
  }

  //concats input of boolean checkbox as it's entered
  onConsentchange(event, toggle) {
    // Bringing in the toggle state that is opposite of the value since we did not implement a callback function.
    const { name } = event.target
    this.setState({
      [name]: toggle,
      queryData: this.state.queryData.concat([toggle]),
      queryFields: this.state.queryFields.concat([name]),
    })
  }

  //concats input of dropdown as it's entered
  onCountrychange(event) {
    let {
      countSelections,
      postal_code,
      errors,
      queryData,
      queryFields,
    } = this.state

    this.setState((prevState) => {
      return { countSelections: prevState.countSelections + 1 }
    })

    const validPostalRegex = RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/i)
    if (event.target.value === 'US' && countSelections > 1) {
      errors.postal_code = validPostalRegex.test(postal_code)
        ? undefined
        : 'Zipcode is not valid.'
    } else {
      errors.postal_code = undefined
    }

    if (event.target.value === 'US') {
      this.setState({
        internationalValidation: 'false',
      })
    } else {
      this.setState({
        internationalValidation: 'true',
      })
    }
    if (event.target.value) {
      this.setState({
        stateRequired: true,
        stateClass: 'show-field',
      })
    } else {
      this.setState({
        stateRequired: false,
        stateClass: 'hide',
      })
    }
    if (errors.postal_code !== undefined) {
      this.setState({
        playButtonStyle: 'hide',
      })
    }
    this.setState({
      [event.target.name]: event.target.value,
      queryData: queryData.concat([event.target.value]),
      queryFields: queryFields.concat([event.target.name]),
    })
  }
  // rendering component
  render() {
    const fields = this.props.fields.addresses.fields
    var keys = Object.keys(fields)
    return (
      <Layout>
        <Meta {...this.props.frontmatter.meta} includeSegment={true} />
        <div className="hero interactive-hero">
          <div className="container">
            <div className="grid">
              <header className="hero-header sticker-header">
                <Connect
                  headline="Run the GraphQL call to get free stickers!"
                  description="Enter your shipping address and run the GraphQL call. That’s it! The call runs against a StepZen endpoint and we ship your stickers."
                  styles="content-stickers"
                />
              </header>

              <div className="hero-content">
                <section className="codedemo">
                  <div
                    className="codedemo-display"
                    data-state={this.state.queryState}
                  >
                    <div className="codedemo-input">
                      <span className="codedemo-tab">GraphQL</span>
                      <div className="codedemo-codeWrap">
                        <div className="codedemo-code">
                          <form
                            id="query-form"
                            onSubmit={(e) => this.handleDemoClick(keys, e)}
                          >
                            <pre className="  language-graphql">
                              <Arguments
                                fields={keys}
                                onInputchange={this.onInputchange}
                                onCountrychange={this.onCountrychange}
                                onConsentchange={this.onConsentchange}
                                stateClass={this.state.stateClass}
                                stateRequired={this.state.stateRequired}
                                internationalValidation={
                                  this.state.internationalValidation
                                }
                                errors={this.state.errors}
                              />
                              <QueryFields
                                fields={keys}
                                onInputchange={this.onInputchange}
                              />
                            </pre>
                            <button
                              type="submit"
                              form="query-form"
                              value="Submit"
                              className={this.state.playButtonStyle}
                              data-demo-play
                              aria-label="Run Demo GraphQL Mutation"
                            >
                              Run
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="codedemo-output">
                      <span className="codedemo-tabResult">Result</span>
                      <div className="codedemo-codeResult">
                        <div className="codedemo-code">
                          <pre className="  language-graphql">
                            <code
                              className="result-code language-graphql"
                              dangerouslySetInnerHTML={{
                                __html: this.state.demoResponse,
                              }}
                            ></code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={this.state.notificationStyle}>
                    <div className="notification-message">
                      <p>Ready to spin up your own GraphQL API with StepZen?</p>
                    </div>
                    <a href="" className="button color9">
                      <span>Sign up!</span>
                    </a>
                  </div>
                  <div className={this.state.policyMessage}>
                    <div className="notification-message">
                      <p className="small">
                        We’re committed to your privacy. Your data is handled
                        with care in accordance with the StepZen{' '}
                        <a href="/privacy" target="_blank">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RequestStickers

// pre-renders page
export async function getServerSideProps(context) {
  const fields = await getFields()
  const content = await import(`../content/stickers.md`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
      fields: fields,
    },
  }
}
