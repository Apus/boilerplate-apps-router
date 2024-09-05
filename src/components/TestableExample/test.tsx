import { render, screen } from '@testing-library/react'

import TestableExample from '.'

describe('<TestableExample />', () => {
  it('should render the heading', () => {
    // const { container } = render(<TestableExample />)
    render(<TestableExample />)

    expect(
      screen.getByRole('heading', { name: /test me/i }),
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
