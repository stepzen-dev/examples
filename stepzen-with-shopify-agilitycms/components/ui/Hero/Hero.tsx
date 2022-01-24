import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
interface HeroProps {
  className?: string
  headline: string
  description: string
  hero_boolean: boolean
  link: string
  image: string
}

const Hero: FC<HeroProps> = ({
  headline,
  description,
  hero_boolean,
  link,
  image,
}) => {
  if (hero_boolean === true) {
    return (
      <div className="bg-accent-9 border-b border-t border-accent-2">
        <Container>
          <div className={s.root}>
          <div>
              {image && (
                <Image
                  quality="85"
                  src={image}
                  alt="hero-image"
                  height={520}
                  width={520}
                  layout="fixed"
                />
              )}
            </div>
            <h2 className={s.title}>{headline}</h2>
            <div className={s.description}>
              <p>{description}</p>
              <Link href={`/product/${link}`}>
                <a className="text-white pt-3 font-bold hover:underline flex flex-row cursor-pointer w-max-content">
                  Learn More
                  <ArrowRight width="20" heigh="20" className="ml-1" />
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    )
  } else {
    return null
  }
}

export default Hero
