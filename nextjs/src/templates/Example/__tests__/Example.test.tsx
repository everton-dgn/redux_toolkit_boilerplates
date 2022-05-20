import { screen } from '@testing-library/react'
import { Example } from '..'
import { renderWithProviders } from 'utils'

describe('[Template] Example', () => {
  it('should render a children and a title', () => {
    renderWithProviders(
      <Example>
        <p data-testid="select_template">Test Template</p>
      </Example>
    )

    const title = screen.getByRole('heading', { name: 'Template Example' })
    const children = screen.getByTestId('select_template')

    expect(children).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})
