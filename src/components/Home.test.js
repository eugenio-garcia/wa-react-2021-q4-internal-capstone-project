import React from 'react'
import {screen, render} from '@testing-library/react'
import App from '../App'
import useFeaturedBanners from '../utils/hooks/useFeaturedBanners'

beforeEach(() => render(<App />))

describe('when the Home page is mounted', () => {
  it('must display the title', () => {
    expect(screen.getByText(/Home Page2/i)).toBeInTheDocument()
  })

  it('uses the featured banners API', async function () {
    const {data: banners = {}, isLoading, error} = useFeaturedBanners()
  })
})
