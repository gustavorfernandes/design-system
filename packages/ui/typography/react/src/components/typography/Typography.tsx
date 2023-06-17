import objStr from 'obj-str'

import { useMemo } from 'react'

import styles from './styles.module.css'

import { addExtraClassNames } from 'add-extra-class-names'

type TypographyVariant = 'h1' | 'h2' | 'text'

type TypographyProps<C extends React.ElementType> = {
  as?: C
  children: React.ReactNode
  variant?: TypographyVariant
} & React.ComponentPropsWithoutRef<C>

export const generateTypographyClassNames = (
  variant: TypographyVariant,
  classNames: string | undefined
) =>
  addExtraClassNames(
    objStr({
      [styles.typography]: true,
      [styles[`typography__${variant}`]]: true,
    }),
    classNames
  )

export const Typography = <C extends React.ElementType = 'span'>({
  as,
  children,
  variant = 'text',
  ...rest
}: TypographyProps<C>) => {
  const Tag = as || 'span'

  const classNames = useMemo(
    () => generateTypographyClassNames(variant, rest.className),
    [variant, rest.className]
  )

  return (
    <Tag {...rest} className={classNames}>
      {children}
    </Tag>
  )
}

export default Typography