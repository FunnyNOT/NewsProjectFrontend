// src/__tests__/Footer.test.js
import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from './Footer'

test('renders footer content', () => {
  const { getByText, getByAltText } = render(<Footer />)

  // Assert the presence of specific text content
  expect(getByText('© 2024 News Project')).toBeInTheDocument()
  expect(getByText('Created by:')).toBeInTheDocument()
  expect(getByText('News Project')).toBeInTheDocument()

  // Assert the presence of the logo (modify the alt text as needed)
  expect(getByAltText('Logo')).toBeInTheDocument()
})

test('contains the correct link', () => {
  const { getByText } = render(<Footer />)

  // Assert that the link text is present and contains an href attribute
  const linkElement = getByText('News Project')
  expect(linkElement).toBeInTheDocument()
  expect(linkElement.closest('a')).toHaveAttribute('href')
})

test('renders correctly', () => {
  const { container } = render(<Footer />)
  expect(container).toMatchSnapshot()
})
