import { render, screen } from '@testing-library/react'

import Typography from './Typography'

describe('Typography component', () => {
  test('renders children correctly', () => {
    const text = 'Hello, World!'
    render(<Typography>{text}</Typography>)
    const typographyElement = screen.getByText(text)
    expect(typographyElement).toBeInTheDocument()
  })

  test('applies correct variant class', () => {
    const variant = 'h1'
    render(<Typography variant={variant}>Heading 1</Typography>)
    const typographyElement = screen.getByText('Heading 1')
    expect(typographyElement).toHaveClass('typography__h1')
  })

  test('applies custom class names', () => {
    const customClassName = 'custom-class'
    render(<Typography className={customClassName}>Text</Typography>)
    const typographyElement = screen.getByText('Text')
    expect(typographyElement).toHaveClass(customClassName)
  })

  test('applies default "text" variant if no variant is provided', () => {
    render(<Typography>Default variant</Typography>)
    const typographyElement = screen.getByText('Default variant')
    expect(typographyElement).toHaveClass('typography__text')
  })

  test('renders with the specified HTML element', () => {
    render(<Typography as="h1">Heading 1</Typography>)
    const headingElement = screen.getByRole('heading', { level: 1 })
    expect(headingElement).toBeInTheDocument()
  })
})
