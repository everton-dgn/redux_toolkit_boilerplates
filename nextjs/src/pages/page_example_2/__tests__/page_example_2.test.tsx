import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'utils'
import PageExample2 from '../index.page'
import { mockedPush, mockedPrefetch } from 'mocks'

describe('[Page] PageExample2', () => {
  it('should go to another page by clicking the button', () => {
    renderWithProviders(<PageExample2 />)

    const btn = screen.getByRole('button', { name: 'Return' })

    userEvent.click(btn)
    userEvent.hover(btn)

    expect(mockedPush).toHaveBeenCalledTimes(1)
    expect(mockedPrefetch).toHaveBeenCalledTimes(2)
    expect(mockedPush).toHaveBeenCalledWith('/')
    expect(mockedPrefetch).toHaveBeenCalledWith('/')
  })
})
