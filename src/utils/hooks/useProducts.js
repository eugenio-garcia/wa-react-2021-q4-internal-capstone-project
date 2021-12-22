import {useState, useEffect} from 'react'
import API_BASE_URL from '../constants'
import useLatestAPI from './useLatestAPI'

export default function useProducts(size) {
  const {ref: apiRef, isLoading: isApiMetadataLoading} = useLatestAPI()
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }))

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getProducts() {
      try {
        setProducts({data: {}, isLoading: true})

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]&q=[[at(document.tags, ["Featured"])]]',
          )}&lang=en-us&pageSize=${size}`,
          {
            signal: controller.signal,
          },
        )
        const data = await response.json()

        setProducts({data, isLoading: false})
      } catch (err) {
        setProducts({data: {}, isLoading: false})
      }
    }

    getProducts()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading, size])

  return [products, setProducts]
}
