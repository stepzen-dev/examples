import cn from 'classnames'
import { inherits } from 'util'
import s from './ProductTag.module.css'

interface ProductTagNoPriceProps {
  className?: string
  name: string
  fontSize?: number
}

const ProductTagNoPrice: React.FC<ProductTagNoPriceProps> = ({
  name,
  className = '',
  fontSize = 32,
}) => {
  return (
    <div className={cn(s.root, className)}>
      <h3 className={s.name}>
        <span
          className={cn({ [s.fontsizing]: fontSize < 32 })}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: `${fontSize}px`,
          }}
        >
          {name}
        </span>
      </h3>
    </div>
  )
}

export default ProductTagNoPrice
