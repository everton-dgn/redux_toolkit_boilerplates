import { screen } from '@testing-library/react'
import { Default } from '..'
import { renderWithProviders } from 'utils'

describe('[Template] Default', () => {
  it('should render a children and a title', () => {
    renderWithProviders(
      <Default>
        <p data-testid="select_template">Test Template</p>
      </Default>
    )

    const title = screen.getByRole('heading', { name: 'Template Default' })
    const children = screen.getByTestId('select_template')

    expect(children).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})
