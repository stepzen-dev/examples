import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { Layout } from '@components/common'
import { getAllProductsWithSlug, getProductBySlug } from '../../lib/api'
import { ProductView } from '@components/product'

export default function Slug(product: any) {
  const router = useRouter()

  console.log('router', router.isFallback)

  if (!router.isFallback && !product.product.productByAgilitySlug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <ProductView product={product?.product.productByAgilitySlug} />
        </>
      )}
    </>
  )
}

export async function getStaticProps(params: any) {
  const data = await getProductBySlug(params.params.slug)
  return {
    props: {
      product: data,
    },
  }
}

export async function getStaticPaths() {
  const products = await getAllProductsWithSlug()
  return {
    paths: products.map((node: any) => `/product/${node.slug}`),
    fallback: false,
  }
}

Slug.Layout = Layout
