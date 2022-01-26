import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import commerce from '@lib/api/commerce'

import { getTypeFromAllProducts } from '../lib/api'

export async function getSearchStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise
  const typeList = await getTypeFromAllProducts()
  return {
    props: {
      pages,
      categories,
      brands,
      typeList
    },
    revalidate: 200,
  }
}

export type SearchPropsType = InferGetStaticPropsType<
  typeof getSearchStaticProps
>
