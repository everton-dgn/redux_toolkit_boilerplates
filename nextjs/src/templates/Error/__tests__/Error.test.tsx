import { screen } from '@testing-library/react'
import { Error } from '..'
import { renderWithProviders } from 'utils'

describe('[Template] Error', () => {
  it('should render a children and a title', () => {
    renderWithProviders(
      <Error>
        <p data-testid="select_template">Test Template</p>
      </Error>
    )

    const title = screen.getByRole('heading', { name: 'Template Error' })
    const children = screen.getByTestId('select_template')

    expect(children).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})
