import cn from 'classnames'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { FC, useEffect, useState } from 'react'
import s from './ProductView.module.css'
import { Swatch, ProductSlider } from '@components/product'
import { Button, Container, Text, useUI } from '@components/ui'
import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import { useAddItem } from '@framework/cart'
import { SelectedOptions } from '../helpers'
import ProductTag from '../ProductTag'
import WishlistButton from '@components/wishlist/WishlistButton'
import checkout from 'pages/api/checkout'

interface ProductViewProps {
  product: Product
  // relatedProducts: Product[]
}

const ProductView: FC<ProductViewProps> = ({ product }) => {
  const { price } = usePrice({
    amount: product.productGraphql.variants.edges[0].node.price,
    baseAmount: product.productGraphql.variants.edges[0].node.price,
    currencyCode: 'USD',
  })
  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [choices, setChoices] = useState<SelectedOptions>({})

  useEffect(() => {
    let optionals = product.options
    if (product.productGraphql.options) {
      optionals = product.productGraphql.options
    }
    // Selects the default option
    optionals.forEach((v: any) => {
      setChoices((choices) => ({
        ...choices,
        [v.name.toLowerCase()]: v.values[0].toLowerCase(),
      }))
    })
  }, [])

  // const variant = getVariant(product, choices)

  const addToCart = async () => {
    let uppercaseSize = choices?.size?.toUpperCase()
    let uppercaseColor = choices?.color?.toUpperCase()

    let titleMatch = `${uppercaseSize} / ${uppercaseColor}`
    let checkoutVariant
    product.productGraphql.variants.edges.map((variant: any) => {
      if(variant.node.title.toUpperCase() === titleMatch) {
        checkoutVariant = variant.node.storefrontId
      }
    });
    setLoading(true)
    try {
      await addItem({
        productId: `${product.productGraphql.storefrontId}`,
        variantId: checkoutVariant ? `${checkoutVariant}` : `${product.productGraphql.variants.edges[1].node.storefrontId}`,
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      console.log('err', err)
      setLoading(false)
    }
  }

  return (
      <Container className="max-w-none w-full" clean>
        <div className={cn(s.root, 'fit')}>
          <div className={cn(s.main, 'fit')}>
      <NextSeo
        title={product.name ? product.name : product.title}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name ? product.name : product.title,
          description: product.description,
          images: [
            {
              url: product.productGraphql.images.edges[0].node.src!!,
              width: 400,
              height: 300,
              alt: product.name ? product.name : product.title,
            },
          ],
        }}
      />
          <ProductTag
              name={product.title || "Product"}
              price={`${product.productGraphql.variants.edges[0].node.price} USD`}
              fontSize={32}
            />

          <div className={s.sliderContainer}>
            <ProductSlider key={product.agilityId}>
              {product.productGraphql.images.edges.map((image: any, i: any) => (
                <div key={i} className={s.imageContainer}>
                  <Image
                    className={s.img}
                    src={image.node.src!}
                    alt={image.node.alt || 'Product Image'}
                    width={1050}
                    height={1050}
                    priority={i === 0}
                    quality="85"
                  />
                </div>
              ))}
            </ProductSlider>
          </div>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.productGraphql?.options.map((opt: any) => (
              <div className="pb-4" key={opt.name}>
                <h2 className="uppercase font-medium">{opt.name}</h2>
                <div className="flex flex-row py-4">
                  {opt.values.map((v: any, i: number) => {
                    const active = (choices as any)[opt.name.toLowerCase()]

                    return (
                      <Swatch
                        key={`${opt.name}-${i}`}
                        active={v.toLowerCase() === active}
                        variant={opt.name}
                        color={opt.name.toLowerCase() === 'color' ? v : ''}
                        label={v}
                        onClick={() => {
                          setChoices((choices) => {
                            return {
                              ...choices,
                              [opt.name.toLowerCase()]: v.toLowerCase(),
                            }
                          })
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}

            <div className="pb-14 break-words w-full max-w-xl">
              <Text html={product.descriptionHtml || product.description} />
            </div>
          </section>
          <div>
            <Button
              aria-label="Add to Cart"
              type="button"
              className={s.button}
              onClick={addToCart}
              loading={loading}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
