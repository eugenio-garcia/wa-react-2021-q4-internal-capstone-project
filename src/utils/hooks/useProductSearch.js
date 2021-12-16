import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductSearch(searchTerm) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });
        console.log(searchTerm);

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]&q=[[fulltext(document, "')}${searchTerm}${('")]]'
          )}&lang=en-us&pageSize=20`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProducts({ data, isLoading: false });
      } catch (err) {
        setProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return products;
}