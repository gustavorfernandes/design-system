import { describe, it, expect } from 'vitest';

import { addExtraClassNames } from './'

describe('addExtraClassNames', () => {
  it('should return the existing class names when extra class names is not provided', () => {
    const classNames = 'class1 class2'
    const extraClassNames = undefined
    const result = addExtraClassNames(classNames, extraClassNames)
    expect(result).toBe(classNames)
  })

  it('should return the existing class names when extra class names is an empty string', () => {
    const classNames = 'class1 class2'
    const extraClassNames = ''
    const result = addExtraClassNames(classNames, extraClassNames)
    expect(result).toBe(classNames)
  })

  it('should return the existing class names when extra class names is a string with only spaces', () => {
    const classNames = 'class1 class2'
    const extraClassNames = ' '
    const result = addExtraClassNames(classNames, extraClassNames)
    expect(result).toBe(classNames)
  })

  it('should return the existing class names and extra class names when extra class names is a string with class names', () => {
    const classNames = 'class1 class2'
    const extraClassNames = 'class3 class4'
    const result = addExtraClassNames(classNames, extraClassNames)
    expect(result).toBe(`${classNames} ${extraClassNames}`)
  })

  it('should return the existing class names and extra class names when extra class names is a string with class names and spaces', () => {
    const classNames = 'class1 class2'
    const extraClassNames = ' class3 class4 '
    const result = addExtraClassNames(classNames, extraClassNames)
    expect(result).toBe(`${classNames} ${extraClassNames.trim()}`)
  })

  it('should return the existing class names and extra class names when extra class names is a string with class names and spaces and new lines', () => {
    const classNames = 'class1 class2'
    const extraClassNames = ' class3 class4\nclass5 class6 '

    const result = addExtraClassNames(classNames, extraClassNames)

    expect(result).toBe(`class1 class2 class3 class4 class5 class6`)
  })

  it('should return the existing class names and extra class names when extra class names is a string with class names and spaces and new lines and tabs', () => {
    const classNames = 'class1 class2'
    const extraClassNames = ' class3 class4\nclass5 class6\tclass7 class8 '

    const result = addExtraClassNames(classNames, extraClassNames)

    expect(result).toBe(
      `class1 class2 class3 class4 class5 class6 class7 class8`
    )
  })

  it('should return the existing class names and extra class names when extra class names is a string with class names and spaces and new lines and tabs and multiple spaces', () => {
    const classNames = 'class1 class2'
    const extraClassNames = ' class3 class4\nclass5 class6\tclass7 class8  '

    const result = addExtraClassNames(classNames, extraClassNames)

    expect(result).toBe(
      `class1 class2 class3 class4 class5 class6 class7 class8`
    )
  })

  it('should return the existing class names and extra class names when extra class names is a string with class names and spaces and new lines and tabs and multiple spaces and multiple new lines', () => {
    const classNames = 'class1 class2'
    const extraClassNames = ' class3 class4\nclass5 class6\tclass7 class8  \n'

    const result = addExtraClassNames(classNames, extraClassNames)

    expect(result).toBe(
      `class1 class2 class3 class4 class5 class6 class7 class8`
    )
  })
})
