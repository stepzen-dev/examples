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

/** A version of the API. */
export type ApiVersion = {
  __typename?: 'ApiVersion'
  /** The human-readable name of the version. */
  displayName: Scalars['String']
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/concepts/about-apis/versioning). */
  supported: Scalars['Boolean']
}

/** An auto-generated type for paginating through multiple ProductVariants. */
export type APIConnection = {
  __typename?: 'APIConnection'
  /** Variants on fetch call to StepZen endpoint */
  variables?: APIVariables
}

export type APIVariables = {
  __typename?: 'APIVariables'
  /** id for Products. */
  id?: Scalars['ID']
  /** audience for Products. */
  audience?: Scalars['String']
  /** lists of Products. */
  list?: Scalars['String']
  /** lists of Slugs for Pages. */
  slug?: Scalars['String']
}