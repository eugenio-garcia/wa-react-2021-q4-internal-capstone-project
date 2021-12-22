import {rest} from 'msw'

export const handlers = [
  rest.get(
    `/documents/search?ref=${apiRef}&q=${encodeURIComponent(
      '[[at(document.type, "banner")]]',
    )}&lang=en-us&pageSize=5`,
    (_, res, ctx) => {
      return res(
        ctx.delay(1500),
        ctx.json([
          {
            page: 1,
            results_per_page: 5,
            results_size: 3,
            total_results_size: 3,
            total_pages: 1,
            next_page: null,
            prev_page: null,
            results: [
              {
                id: 'YWYpQRIAACkA3RZr',
                uid: null,
                url: null,
                type: 'banner',
                href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWYpQRIAACkA3RZr%22%29+%5D%5D',
                tags: [],
                first_publication_date: '2021-10-13T00:33:08+0000',
                last_publication_date: '2021-10-13T00:33:08+0000',
                slugs: [
                  'amazing-finishes---bedroom',
                  'acabados-increibles---recamara',
                ],
                linked_documents: [],
                lang: 'en-us',
                alternate_languages: [
                  {
                    id: 'YWYpFRIAAC8A3RWi',
                    type: 'banner',
                    lang: 'es-mx',
                  },
                ],
                data: {
                  title: 'AMAZING FINISHES - BEDROOM',
                  description: [
                    {
                      type: 'paragraph',
                      text: 'Provides great stability',
                      spans: [],
                    },
                  ],
                  cta_link: '#',
                  cta_target: '_parent',
                  main_image: {
                    dimensions: {
                      width: 1440,
                      height: 705,
                    },
                    alt: 'AMAZING FINISHES - BEDROOM',
                    copyright: null,
                    url: 'https://images.prismic.io/wizeline-academy/edaf28da-2e46-4f75-8a69-a972119f40ed_banner-3-2.jpeg?auto=compress,format&rect=0,0,1429,700&w=1440&h=705',
                  },
                },
              }
        ]),
      )
    },
  ),
  rest.get(
    `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "category")]]',
      )}&lang=en-us&pageSize=30`,
    (_, res, ctx) => {
      return res(
        ctx.delay(1500),
        ctx.json([
            {
                "id": "YWHx-xIAAC0Ayj7i",
                "uid": null,
                "url": null,
                "type": "category",
                "href": "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHx-xIAAC0Ayj7i%22%29+%5D%5D",
                "tags": [],
                "first_publication_date": "2021-10-09T23:33:05+0000",
                "last_publication_date": "2021-10-12T23:45:23+0000",
                "slugs": ["bed--bath"],
                "linked_documents": [],
                "lang": "en-us",
                "alternate_languages": [
                  {
                    "id": "YWHx7xIAACsAyj6p",
                    "type": "category",
                    "lang": "es-mx"
                  }
                ],
                "data": {
                  "name": "Bed & Bath",
                  "main_image": {
                    "dimensions": {
                      "width": 621,
                      "height": 398
                    },
                    "alt": "Bath",
                    "copyright": null,
                    "url": "https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398"
                  }
                }
              }
        ]),
      )
    },
  ),
]
