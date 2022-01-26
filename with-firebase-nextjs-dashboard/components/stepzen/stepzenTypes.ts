export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** An ISO-8601 encoded UTC date time string. Example value: `"2019-07-03T20:47:55Z"`. */
  DateTime: any
  /** A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: `"29.99"`. */
  Decimal: any
  /** A string containing HTML code. Example value: `"<p>Grey cotton knit sweater.</p>"`. */
  HTML: any
  /** A monetary value string. Example value: `"100.57"`. */
  Money: any
  /**
   * An RFC 3986 and RFC 3987 compliant URI string.
   *
   * Example value: `"https://johns-apparel.myshopify.com"`.
   *
   */
  URL: any
}

/** An auto-generated type for paginating through multiple ProductVariants. */
export type APIConnection = {
  __typename?: 'APIConnection'
  /** Variants on fetch call to StepZen endpoint */
  variables?: APIVariables
}

export type APIVariables = {
  __typename?: 'APIVariables'
  /** id for Person. */
  id?: string
  /** Email for Person. */
  email?: Scalars['String']
}