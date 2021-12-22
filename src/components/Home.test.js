import React from 'react'
import {screen, render, waitForElementToBeRemoved} from '@testing-library/react'
import App from '../App'
import useFeaturedBanners from '../utils/hooks/useFeaturedBanners'

beforeEach(() => render(<App />))

describe('when the Home page is mounted', () => {
  it('must display the title', () => {
    expect(screen.getByText(/Home Page2/i)).toBeInTheDocument()
  })
})

describe('rendering the App component', () => {
  describe('rendering the App', () => {
    it('shows home items on successful state cycle', async () => {
      expect(screen.getByText(/loadingSlider/i)).toBeInTheDocument()
      await waitForElementToBeRemoved(() => screen.getByText(/loadingSlider/i))
      const sliderImg = screen.getByAltText('slider')
      // expect(sliderImg).toHaveAttribute(
      //   'src',
      //   'https://images.prismic.io/wizeline-academy/305e2781-5f25-4c00-bef7-1041b49def37_banner-1-2.jpeg?auto=compress,format&rect=103,0,1226,600&w=1440&h=705',
      // )
      expect(sliderImg).toHaveClass('sc-dkPtRN ejSbiq slider')
    })

    it('shows category items on successful state cycle', async () => {
      expect(screen.getByText(/loadingCategories/i)).toBeInTheDocument()
      await waitForElementToBeRemoved(() =>
        screen.getByText(/loadingCategories/i),
      )
      const div = screen.getByText('Decorate')
      expect(div).toHaveTextContent('Decorate')
    })

    it('shows featured product items on successful state cycle', async () => {
      expect(screen.getByText(/LoadingProducts/i)).toBeInTheDocument()
      await waitForElementToBeRemoved(() =>
        screen.getByText(/LoadingProducts/i),
      )
      const div = screen.getByText('Fair Isle Snowflake Lumbar Cushion Cover')
      expect(div).toHaveTextContent('Fair Isle Snowflake Lumbar Cushion Cover')
    })
  })
})
