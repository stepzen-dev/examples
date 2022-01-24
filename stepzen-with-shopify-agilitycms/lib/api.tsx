import { APIConnection } from '../framework/stepzen/schema'

async function fetchAPI(query: any, { variables }: APIConnection = {}) {
    const headers = {
      Authorization: `Apikey ${process.env.NEXT_STEPZEN_API_KEY}`,
      'Content-Type': 'application/json',
    }
  
    const res = await fetch(`${process.env.NEXT_STEPZEN_API_URL}`, {
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
  
  export async function getAllProductsWithId() {
    const data = await fetchAPI(`
      {
        productsRest {
              agilityId
            }
      }
    `)
    return data?.productsRest
  }
  
  export async function getAllProductsWithSlug() {
    const data = await fetchAPI(`
      {
        productsRest {
              slug
            }
      }
    `)
    return data?.productsRest
  }
  
  export async function getProduct(id: any) {
    
    const mainId = id
  
    const data = await fetchAPI(
      `
      query products($id: ID!) {
        productByAgilityId(agilityId: $id) {
            agilityId
            audience
            createdAt
            description
            image
            title
            hero
            type
            productGraphql {
              title
              id
              storefrontId
              handle
              images(first: 5) {
                edges {
                  node {
                    altText
                    height
                    id
                    src
                    width
                  }
                }
              }
              variants(first: 20) {
                edges {
                  node {
                    storefrontId
                    id
                    price
                    title
                  }
                }
              }
              options(first: 10) {
                id
                name
                position
                values
              }
            }
          }
      }
    `,
      {
        variables: {
          id: mainId,
        },
      }
    )
  
    return data
  }
  
  export async function getProductBySlug(slug: any) {
  
    const mainSlug = slug
  
    const data = await fetchAPI(
      `
      query products($slug: String!) {
        productByAgilitySlug(slug: $slug) {
            agilityId
            audience
            createdAt
            description
            image
            title
            hero
            type
            productGraphql {
              title
              id
              storefrontId
              handle
              images(first: 5) {
                edges {
                  node {
                    altText
                    height
                    id
                    src
                    width
                  }
                }
              }
              variants(first: 20) {
                edges {
                  node {
                    storefrontId
                    id
                    price
                    title
                  }
                }
              }
              options(first: 10) {
                id
                name
                position
                values
              }
            }
          }
      }
    `,
      {
        variables: {
          slug: mainSlug,
        },
      }
    )
  
    return data
  }
  
  export async function getAllProducts() {
    const data = await fetchAPI(
      `
        query products {
          productsRest {
              audience
              createdAt
              description
              image
              title
              agilityId
              hero
              type
              slug
            }
        }
      `
    )
  
    return data.productsRest
  }
  
  export async function getTypeFromAllProducts() {
    const data = await fetchAPI(
      `
        query products {
          productsRest {
              type
            }
        }
      `
    )

    // Finding the Types for Categories on Search Page
    let moreTypes = []
    for (let i = 0; i < data.productsRest.length; i++) {
      if (data.productsRest[i].type) {
        moreTypes.push(data.productsRest[i].type)
      }
    }
    moreTypes = [...new Set(moreTypes)]
    
    return moreTypes
  }