import { match } from 'ts-pattern'

/**
 * Add extra class names to the existing class names
 *
 * Why?
 * In cases where you have something like rest.className, you can use this function to add the extra class names to the existing class names
 *
 * Example:
 * const classNames = addExtraClassNames('class1 class2', rest.className)
 *
 * @param classNames - existing class names
 * @param extraClassNames - extra class names
 * @returns
 */
export const addExtraClassNames = (
  classNames: string,
  extraClassNames?: string
) => {
  return match(extraClassNames)
    .with(' ', () => classNames)
    .with('', () => classNames)
    .with(undefined, () => classNames)
    .otherwise(
      value =>
        `${classNames} ${value
          .replace(/[\r\n]/gm, ' ')
          .replace(/\t+/g, ' ')
          .trim()}`
    )
}
