import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Typography from './Typography'

describe('Typography', () => {
  it('should render the component', () => {
    render(<Typography />)

    expect(screen.getByText('Typography')).toBeInTheDocument()
  })
})
