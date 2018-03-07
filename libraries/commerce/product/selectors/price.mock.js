/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const basicProductState = {
  product: {
    productsById: {
      913: {
        isFetching: false,
        expires: 1497428462438,
        productData: {
          id: '913',
          name: 'This is a product with a very very long name -5-',
          manufacturer: '',
          identifiers: {
            sku: '857347363',
          },
          ageRating: 0,
          stock: {
            ignoreQuantity: true,
            quantity: 0,
            info: 'In stock',
            orderable: true,
            minOrderQuantity: 1,
            maxOrderQuantity: 10000,
          },
          rating: {
            count: 0,
            average: 0,
            reviewCount: 0,
          },
          flags: {
            hasChildren: false,
            hasVariants: false,
            hasOptions: false,
          },
          featuredImageUrl: 'https://img-cdn.shopgate.com/30188/1/fce216e970614ec94f701b4fc234d1908b48c3b097303c9698e3a6f46787cf3b',
          price: {
            currency: 'EUR',
            info: '',
            unitPrice: 89,
            unitPriceStriked: 0,
            unitPriceMin: 0,
            unitPriceNet: 89,
            unitPriceWithTax: 89,
            taxAmount: 0,
            taxPercent: 0,
            msrp: 0,
            tiers: [],
            unitPriceMax: 1000,
          },
          liveshoppings: [],
          highlight: true,
          availability: {
            text: 'In stock',
            state: 'ok',
          },
        },
      },
    },
    variantsByProductId: {},
    optionsByProductId: {},
    resultsByHash: {},
    currentProduct: {
      productId: '913',
      productVariantId: null,
      quantity: 1,
      options: {},
    },
  },
};

export const productWithOneOption = {
  product: {
    productsById: {
      1097: {
        isFetching: false,
        expires: 1497429212949,
        productData: {
          id: '1097',
          name: 'simple Product with options',
          manufacturer: '',
          identifiers: {
            sku: '12345667878754654',
          },
          ageRating: 0,
          stock: {
            ignoreQuantity: true,
            quantity: 0,
            info: 'In stock',
            orderable: true,
            minOrderQuantity: 1,
            maxOrderQuantity: 10000,
          },
          rating: {
            count: 0,
            average: 0,
            reviewCount: 0,
          },
          flags: {
            hasChildren: false,
            hasVariants: false,
            hasOptions: true,
          },
          featuredImageUrl: null,
          price: {
            currency: 'EUR',
            info: '',
            unitPrice: 10,
            unitPriceStriked: 0,
            unitPriceMin: 11,
            unitPriceNet: 10,
            unitPriceWithTax: 10,
            taxAmount: 0,
            taxPercent: 0,
            msrp: 0,
            tiers: [],
            unitPriceMax: 1000,
          },
          liveshoppings: [],
          highlight: false,
          availability: {
            text: 'In stock',
            state: 'ok',
          },
        },
      },
    },
    variantsByProductId: {},
    optionsByProductId: {
      1097: {
        isFetching: false,
        expires: 1497429213141,
        options: [
          {
            id: '1',
            type: 'select',
            label: 'Ball color',
            values: [
              {
                id: '1',
                label: 'Green Ball',
                unitPriceModifier: 1,
              },
              {
                id: '3',
                label: 'magic ball',
                unitPriceModifier: 1,
              },
              {
                id: '2',
                label: 'Red Ball',
                unitPriceModifier: 1.5,
              },
            ],
          },
        ],
      },
    },
    resultsByHash: {},
    currentProduct: {
      productId: '1097',
      productVariantId: null,
      quantity: 1,
      options: {},
    },
  },
};

export const productWithSelectedOptions = {
  ...productWithOneOption,
  product: {
    ...productWithOneOption.product,
    currentProduct: {
      ...productWithOneOption.product.currentProduct,
      options: {
        1: '1',
      },
    },
  },
};

export const productWithVariants = {
  product: {
    productsById: {
      dif01: {
        isFetching: false,
        expires: 1497432294167,
        productData: {
          id: 'dif01',
          name: 'Product with children that have different prices',
          manufacturer: '',
          identifiers: {
            sku: 'dif01',
          },
          ageRating: 0,
          stock: {
            ignoreQuantity: true,
            quantity: 0,
            info: '',
            orderable: true,
            minOrderQuantity: 0,
            maxOrderQuantity: 0,
          },
          rating: {
            count: 0,
            average: 0,
            reviewCount: 0,
          },
          flags: {
            hasChildren: false,
            hasVariants: true,
            hasOptions: false,
          },
          featuredImageUrl: null,
          price: {
            currency: 'EUR',
            info: '',
            unitPrice: 5,
            unitPriceStriked: 0,
            unitPriceMin: 15,
            unitPriceNet: 5,
            unitPriceWithTax: 5,
            taxAmount: 0,
            taxPercent: 0,
            msrp: 0,
            tiers: [],
            unitPriceMax: 1000,
          },
          liveshoppings: [],
          highlight: false,
          availability: {
            text: 'Verfügbar',
            state: 'ok',
          },
        },
      },
    },
    variantsByProductId: {
      dif01: {
        isFetching: false,
        expires: 1497432294379,
        variants: {
          products: [
            {
              id: 'dif01-exp',
              hasOptions: false,
              characteristics: {
                1: '1',
              },
            },
            {
              id: 'dif01-cheap',
              hasOptions: false,
              characteristics: {
                1: '2',
              },
            },
          ],
          characteristics: [
            {
              id: '1',
              label: 'Attribute',
              values: [
                {
                  id: '2',
                  label: 'Cheap',
                },
                {
                  id: '1',
                  label: 'Expensive',
                },
              ],
            },
          ],
        },
      },
    },
    optionsByProductId: {},
    resultsByHash: {},
    currentProduct: {
      productId: 'dif01',
      productVariantId: null,
      quantity: 1,
      options: {},
    },
  },

};

export const productWithSelectedVariant = {
  ...productWithVariants,
  product: {
    ...productWithVariants.product,
    productsById: {
      ...productWithVariants.product.productsById,
      'dif01-exp': {
        isFetching: false,
        expires: 1497432564083,
        productData: {
          id: 'dif01-exp',
          name: 'Product with children that have different prices - Expensive product',
          manufacturer: '',
          identifiers: {
            sku: 'dif01-exp',
          },
          ageRating: 0,
          stock: {
            ignoreQuantity: true,
            quantity: 0,
            info: '',
            orderable: true,
            minOrderQuantity: 0,
            maxOrderQuantity: 0,
          },
          rating: {
            count: 0,
            average: 0,
            reviewCount: 0,
          },
          flags: {
            hasChildren: false,
            hasVariants: false,
            hasOptions: false,
          },
          featuredImageUrl: null,
          price: {
            currency: 'EUR',
            info: '',
            unitPrice: 26,
            unitPriceStriked: 0,
            unitPriceMin: 0,
            unitPriceNet: 26,
            unitPriceWithTax: 26,
            taxAmount: 0,
            taxPercent: 0,
            msrp: 0,
            tiers: [],
            unitPriceMax: 1000,
          },
          liveshoppings: [],
          highlight: false,
          availability: {
            text: 'Verfügbar',
            state: 'ok',
          },
        },
      },
    },
    currentProduct: {
      ...productWithVariants.currentProduct,
      productVariantId: 'dif01-exp',
    },
  },

};

export const productWithVariantsAndOptions = {
  product: {
    productsById: {
      SG74: {
        isFetching: false,
        expires: 1497436381610,
        productData: {
          id: 'SG74',
          name: 'Produkt mit Optionen und Attributen',
          manufacturer: 'MANUFACTURER',
          identifiers: {
            sku: 'item_number_public-74',
            mpn: 'manufacturer_item_number-74',
          },
          ageRating: 0,
          stock: {
            ignoreQuantity: false,
            quantity: 100,
            info: 'Available_Text',
            orderable: true,
            minOrderQuantity: 0,
            maxOrderQuantity: 0,
          },
          rating: {
            count: 0,
            average: 0,
            reviewCount: 0,
          },
          flags: {
            hasChildren: false,
            hasVariants: true,
            hasOptions: false,
          },
          featuredImageUrl: 'https://img-cdn.shopgate.com/30187/1/0b63a9a326f1a87ee8e8abf5da5cf72c47a9cbfd4e80c1d53e289a79a86ed29f',
          price: {
            currency: 'EUR',
            info: '',
            unitPrice: 10.51,
            unitPriceStriked: 0,
            unitPriceMin: 11.51,
            unitPriceNet: 8.83,
            unitPriceWithTax: 10.51,
            taxAmount: 1.68,
            taxPercent: 19,
            msrp: 0,
            tiers: [],
            unitPriceMax: 1000,
          },
          liveshoppings: [],
          highlight: true,
          availability: {
            text: 'Available_Text',
            state: 'ok',
          },
        },
      },
      SG75: {
        isFetching: false,
        expires: 1497436387040,
        productData: {
          id: 'SG75',
          name: 'Kindprodukt 1 mit Optionen',
          manufacturer: 'MANUFACTURER',
          identifiers: {
            sku: 'item_number_public-75',
            mpn: 'manufacturer_item_number-75',
          },
          ageRating: 0,
          stock: {
            ignoreQuantity: false,
            quantity: 100,
            info: 'Available_Text',
            orderable: true,
            minOrderQuantity: 0,
            maxOrderQuantity: 0,
          },
          rating: {
            count: 0,
            average: 0,
            reviewCount: 0,
          },
          flags: {
            hasChildren: false,
            hasVariants: false,
            hasOptions: true,
          },
          featuredImageUrl: 'https://img-cdn.shopgate.com/30187/1/418315732cd28ab495acd3861f2d4a0d406b07c997d28b17d5a38446ae9122c3',
          price: {
            currency: 'EUR',
            info: '',
            unitPrice: 10.51,
            unitPriceStriked: 0,
            unitPriceMin: 11.51,
            unitPriceNet: 8.83,
            unitPriceWithTax: 10.51,
            taxAmount: 1.68,
            taxPercent: 19,
            msrp: 0,
            tiers: [],
            unitPriceMax: 1000,
          },
          liveshoppings: [],
          highlight: false,
          availability: {
            text: 'Available_Text',
            state: 'ok',
          },
        },
      },
      SG78: {
        isFetching: false,
        expires: 1497436396446,
        productData: {
          id: 'SG78',
          name: 'Kindprodukt 4 mit Optionen',
          manufacturer: 'MANUFACTURER',
          identifiers: {
            sku: 'item_number_public-78',
            mpn: 'manufacturer_item_number-78',
          },
          ageRating: 0,
          stock: {
            ignoreQuantity: false,
            quantity: 100,
            info: 'Available_Text',
            orderable: true,
            minOrderQuantity: 0,
            maxOrderQuantity: 0,
          },
          rating: {
            count: 0,
            average: 0,
            reviewCount: 0,
          },
          flags: {
            hasChildren: false,
            hasVariants: false,
            hasOptions: true,
          },
          featuredImageUrl: 'https://img-cdn.shopgate.com/30187/1/5470e69c84493a2e1eb9360fef3b0b1e545a69d7ebf67d86d8f245c130ed5994',
          price: {
            currency: 'EUR',
            info: '',
            unitPrice: 10.54,
            unitPriceStriked: 0,
            unitPriceMin: 11.54,
            unitPriceNet: 8.85,
            unitPriceWithTax: 10.54,
            taxAmount: 1.69,
            taxPercent: 19,
            msrp: 0,
            tiers: [],
            unitPriceMax: 1000,
          },
          liveshoppings: [],
          highlight: false,
          availability: {
            text: 'Available_Text',
            state: 'ok',
          },
        },
      },
      SG79: {
        isFetching: false,
        expires: 1497436425368,
        productData: {
          id: 'SG79',
          name: 'Kindprodukt 5 mit Optionen',
          manufacturer: 'MANUFACTURER',
          identifiers: {
            sku: 'item_number_public-79',
            mpn: 'manufacturer_item_number-79',
          },
          ageRating: 0,
          stock: {
            ignoreQuantity: false,
            quantity: 100,
            info: 'Available_Text',
            orderable: true,
            minOrderQuantity: 0,
            maxOrderQuantity: 0,
          },
          rating: {
            count: 0,
            average: 0,
            reviewCount: 0,
          },
          flags: {
            hasChildren: false,
            hasVariants: false,
            hasOptions: true,
          },
          featuredImageUrl: 'https://img-cdn.shopgate.com/30187/1/fa8f6a39cafe657d578ebe45a0dbbfbfe4884df834adf718db84fd256fbdcf79',
          price: {
            currency: 'EUR',
            info: '',
            unitPrice: 10.55,
            unitPriceStriked: 0,
            unitPriceMin: 11.55,
            unitPriceNet: 8.86,
            unitPriceWithTax: 10.55,
            taxAmount: 1.69,
            taxPercent: 19,
            msrp: 0,
            tiers: [],
            unitPriceMax: 1000,
          },
          liveshoppings: [],
          highlight: false,
          availability: {
            text: 'Available_Text',
            state: 'ok',
          },
        },
      },
      SG76: {
        isFetching: false,
        expires: 1497436434262,
        productData: {
          id: 'SG76',
          name: 'Kindprodukt 2 mit Optionen',
          manufacturer: 'MANUFACTURER',
          identifiers: {
            sku: 'item_number_public-76',
            mpn: 'manufacturer_item_number-76',
          },
          ageRating: 0,
          stock: {
            ignoreQuantity: false,
            quantity: 100,
            info: 'Available_Text',
            orderable: true,
            minOrderQuantity: 0,
            maxOrderQuantity: 0,
          },
          rating: {
            count: 0,
            average: 0,
            reviewCount: 0,
          },
          flags: {
            hasChildren: false,
            hasVariants: false,
            hasOptions: true,
          },
          featuredImageUrl: 'https://img-cdn.shopgate.com/30187/1/4720d364278292d92451f615c8350bbc26bdb5ea8b06e5cc9b9bb8ef3a964b0d',
          price: {
            currency: 'EUR',
            info: '',
            unitPrice: 10.52,
            unitPriceStriked: 0,
            unitPriceMin: 11.52,
            unitPriceNet: 8.84,
            unitPriceWithTax: 10.52,
            taxAmount: 1.68,
            taxPercent: 19,
            msrp: 0,
            tiers: [],
            unitPriceMax: 1000,
          },
          liveshoppings: [],
          highlight: false,
          availability: {
            text: 'Available_Text',
            state: 'ok',
          },
        },
      },
    },
    variantsByProductId: {
      SG74: {
        isFetching: false,
        expires: 1497436381810,
        variants: {
          products: [
            {
              id: 'SG79',
              hasOptions: true,
              characteristics: {
                1: '1',
              },
            },
            {
              id: 'SG78',
              hasOptions: true,
              characteristics: {
                1: '2',
              },
            },
            {
              id: 'SG77',
              hasOptions: true,
              characteristics: {
                1: '3',
              },
            },
            {
              id: 'SG76',
              hasOptions: true,
              characteristics: {
                1: '4',
              },
            },
            {
              id: 'SG75',
              hasOptions: true,
              characteristics: {
                1: '5',
              },
            },
          ],
          characteristics: [
            {
              id: '1',
              label: 'attribut1',
              values: [
                {
                  id: '5',
                  label: 'attribut1_1',
                },
                {
                  id: '4',
                  label: 'attribut1_2',
                },
                {
                  id: '3',
                  label: 'attribut1_3',
                },
                {
                  id: '2',
                  label: 'attribut1_4',
                },
                {
                  id: '1',
                  label: 'attribut1_5',
                },
              ],
            },
          ],
        },
      },
    },
    optionsByProductId: {
      SG75: {
        isFetching: false,
        expires: 1497436387244,
        options: [
          {
            id: '1',
            type: 'select',
            label: 'Option 1',
            values: [
              {
                id: '5',
                label: 'Value5',
                unitPriceModifier: 5,
              },
              {
                id: '4',
                label: 'Value4',
                unitPriceModifier: 4,
              },
              {
                id: '3',
                label: 'Value3',
                unitPriceModifier: 3,
              },
              {
                id: '2',
                label: 'Value2',
                unitPriceModifier: 2,
              },
              {
                id: '1',
                label: 'Value1',
                unitPriceModifier: 1,
              },
            ],
          },
        ],
      },
      SG78: {
        isFetching: false,
        expires: 1497436396627,
        options: [
          {
            id: '1',
            type: 'select',
            label: 'Option 1',
            values: [
              {
                id: '5',
                label: 'Value5',
                unitPriceModifier: 5,
              },
              {
                id: '4',
                label: 'Value4',
                unitPriceModifier: 4,
              },
              {
                id: '3',
                label: 'Value3',
                unitPriceModifier: 3,
              },
              {
                id: '2',
                label: 'Value2',
                unitPriceModifier: 2,
              },
              {
                id: '1',
                label: 'Value1',
                unitPriceModifier: 1,
              },
            ],
          },
        ],
      },
      SG79: {
        isFetching: false,
        expires: 1497436425568,
        options: [
          {
            id: '1',
            type: 'select',
            label: 'Option 1',
            values: [
              {
                id: '5',
                label: 'Value5',
                unitPriceModifier: 5,
              },
              {
                id: '4',
                label: 'Value4',
                unitPriceModifier: 4,
              },
              {
                id: '3',
                label: 'Value3',
                unitPriceModifier: 3,
              },
              {
                id: '2',
                label: 'Value2',
                unitPriceModifier: 2,
              },
              {
                id: '1',
                label: 'Value1',
                unitPriceModifier: 1,
              },
            ],
          },
        ],
      },
      SG76: {
        isFetching: false,
        expires: 1497436434474,
        options: [
          {
            id: '1',
            type: 'select',
            label: 'Option 1',
            values: [
              {
                id: '5',
                label: 'Value5',
                unitPriceModifier: 5,
              },
              {
                id: '4',
                label: 'Value4',
                unitPriceModifier: 4,
              },
              {
                id: '3',
                label: 'Value3',
                unitPriceModifier: 3,
              },
              {
                id: '2',
                label: 'Value2',
                unitPriceModifier: 2,
              },
              {
                id: '1',
                label: 'Value1',
                unitPriceModifier: 1,
              },
            ],
          },
        ],
      },
    },
    resultsByHash: {},
    currentProduct: {
      productId: 'SG74',
      productVariantId: null,
      quantity: 1,
      options: {},
    },
  },
};
