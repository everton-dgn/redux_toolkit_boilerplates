import { screen } from '@testing-library/react'
import T from 'theme'
import { renderWithProviders } from 'utils'
import RenderTextByBreakpoint from '..'
import { size } from 'mocks'

size(T.windowSizes.sm)

describe('[Component] RenderTextByBreakpoint', () => {
  it('should render the text específico para o breakpoint sm', () => {
    renderWithProviders(<RenderTextByBreakpoint />)
    const mobile = screen.getByText('Breakpoint Mobile, "sm": 0px - 599px')
    expect(mobile).toBeInTheDocument()
  })

  it('should render the text específico para o breakpoint md', () => {
    size(T.windowSizes.md)
    renderWithProviders(<RenderTextByBreakpoint />)
    const tablet = screen.getByText('Breakpoint Tablet, "md": 600px - 1023px')
    expect(tablet).toBeInTheDocument()
  })

  it('should render the text específico para o breakpoint lg', () => {
    size(T.windowSizes.lg)
    renderWithProviders(<RenderTextByBreakpoint />)
    const desktop = screen.getByText('Breakpoint Desktop, "lg": 1024px - ∞px')
    expect(desktop).toBeInTheDocument()
  })
})
