import { FC } from 'react'

interface TypographyType {
  className?: string
}

export const Typography: FC<TypographyType> = ({ children, className }) => {
  return <p className={`text-white tracking-wide text-lg sm:text-xl text-justify font-body ${className}`}>{children}</p>
}

export const TypographyHeader: FC<{}> = ({ children }) => {
  return <h1 className='text-white font-body font-black text-3xl 2xl:text-6xl mb-8'>{children}</h1>
}

export default Typography;