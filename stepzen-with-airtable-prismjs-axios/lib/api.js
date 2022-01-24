import glob from 'glob'

async function fetchAPI(query, variables) {
  const headers = {
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    'Content-Type': 'application/json',
  }

  const res = await fetch(`${process.env.STEPZEN_API_URL}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}


export async function getFields() {
  // Removed the need for fields to be queried directly from airtable
  // const data = await fetchAPI(
  //   `
  //     query MyQuery {
  //       addresses(id: "recywAkIvcmxTxlfu") {
  //         createdTime
  //         id
  //         fields {
  //           firstname
  //           lastname
  //           address
  //           address2
  //           city
  //           state
  //           postal_code
  //           country
  //         }
  //       }
  //     }
  //   `
  // )
  
  const data = 
  {
    addresses: {
      fields: {
        firstname: "", 
        lastname: "", 
        email: "", 
        address: "", 
        address2: "", 
        city: "", 
        state: "", 
        postal_code: "", 
        country: "",
        receive_news: true
      }
    }
  }

  return data
}