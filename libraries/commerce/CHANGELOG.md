
# Changelog
---
### [2.5.0](https://github.com/shopgate/pwa-common-commerce/compare/v2.4.0...v2.5.0) - February 06, 2018
#### Added
- Observable `favoritesWillFetch`
- Observable `favoritesDidFetch`
- `getProducts` action now includes a `includeFilters` parameter.

#### Changed
- Extended `addFavorites` action with `immediate` variable that bypasses throttling of the action.

#### Fixed
- Fixed `getFavorites` selector object property check.

---
### [2.4.0](https://github.com/shopgate/pwa-common-commerce/compare/v2.3.0...v2.4.0) - February 05, 2018
#### Added
- Added a `includeFilter` option to `getProducts` action

#### Changed
- The `getSearchResults` action now uses the `getSearchPhrase` history selector from `pwa-common` instead of the navigator selector from `pwa-common-commerce`

---
### [2.3.0](https://github.com/shopgate/pwa-common-commerce/compare/v2.2.0...v2.3.0) - January 30, 2018
#### Added
- `PRODUCT_ITEM_NAME_BEFORE` portal ID.

---
### [2.2.0](https://github.com/shopgate/pwa-common-commerce/compare/v2.1.0...v2.2.0) - January 29, 2018
#### Added
- Add/Remove favorites actions, subscriptions and stream.
#### Changed
- Favorites reducers react on Add/Remove favorites actions by adding/removing a product to/from redux store on request action.
---

### [2.1.0](https://github.com/shopgate/pwa-common-commerce/compare/v2.0.0...v2.1.0) - January 25, 2018
#### Added
- Redux actions, reducer and selectors for favourites feature

---

### [2.0.0](https://github.com/shopgate/pwa-common-commerce/compare/v1.2.2...v2.0.0) - January 24, 2018
#### Changed
- Updated the `getCheckoutUrl` action to use the refactored "url" action creators from "pwa-common".
- The input param of the `getVariantsByProductId` selector, to reflect the default reselect signature.

#### Fixed
- `getVariantsByProductId` selector returns now the correct redux state instead of just a function.

---

### [1.2.2](https://github.com/shopgate/pwa-common-commerce/compare/v1.2.1...v1.2.2) - January 17, 2018
#### Fixed
- The reset of the currentProduct state when navigating through pages that belong to the product route.

#### Added
- Added constants for filtertypes `range` and `multiselect`


---

### [1.2.0](https://github.com/shopgate/pwa-common-commerce/compare/v1.1.4...v1.2.0) - January 08, 2018

#### Removed
- `CHECKOUT_PATH` constant

---

### [1.1.4](https://github.com/shopgate/pwa-common-commerce/compare/v1.1.3...v1.1.4) - January 05, 2018

#### Added
- Highlighting symbols around search suggestions are removed from pipeline response

---

### [1.1.3](https://github.com/shopgate/pwa-common-commerce/compare/v1.1.2...v1.1.3) - December 28, 2017

#### Changed
- Updated `@shopgate/pwa-common` to ^1.1.3

---

### [1.1.2](https://github.com/shopgate/pwa-common-commerce/compare/v1.1.1...v1.1.2) - December 22, 2017

#### Added
- Products with options can now be added to the cart
- Constants for options types (`OPTION_TYPE_SELECT` and `OPTION_TYPE_TEXT`)
- Selector `getAddToCartMetadata`
- Selector `getAddToCartOptions `

#### Changed
- Updated `@shopgate/pwa-common` to ^1.1.2
- Updated `@shopgate/pwa-core` to ^1.1.0

---

### [1.1.1](https://github.com/shopgate/pwa-common-commerce/compare/v1.1.0...v1.1.1) - December 22, 2017

#### Added
- React 16 support
- Dependency `react-hammerjs` ^0.5.3

#### Changed
- Updated `react` to ^16.2.0
- Updated `react-dom` to ^16.2.0

---

### [1.1.0](https://github.com/shopgate/pwa-common-commerce/compare/v1.0.6...v1.1.0) - December 22, 2017

#### Changed
- Updated `@shopgate/eslint-vonfig` to ^1.0.3
- Updated `@shopgate/pwa-common` to ^1.1.1
- Updated `@shopgate/pwa-unit-test` to ^1.3.0

---

### [1.0.6](https://github.com/shopgate/pwa-common-commerce/compare/v1.0.5...v1.0.6) - December 21, 2017

#### Changed
- Updated `@shopgate/pwa-common` to ^1.0.12
- Updated `@shopgate/pwa-core` to ^1.0.5

---

### [1.0.5](https://github.com/shopgate/pwa-common-commerce/compare/v1.0.4...v1.0.5) - December 15, 2017

#### Changed
- Updated `@shopgate/pwa-common` to ^1.0.11
- The getProduct action will now check if product data is available before attempting to process it

---

### [1.0.4](https://github.com/shopgate/pwa-common-commerce/compare/v1.0.3...v1.0.4) - December 11, 2017

#### Changed
- Updated `@shopgate/pwa-common` to ^1.0.5
- Updated `@shopgate/pwa-core` to ^1.0.4

---

### [1.0.3](https://github.com/shopgate/pwa-common-commerce/compare/v1.0.2...v1.0.3) - December 11, 2017

#### Added
- Callback for checkoutSuccess event that will reset the browser history and fetch a new cart

#### Changed
- Updated `@shopgate/pwa-common` to ^1.0.4
- Updated `@shopgate/pwa-core` to ^1.0.3
- The getFilters action will now abort when pipeline parameters are invalid

---

### [1.0.2](https://github.com/shopgate/pwa-common-commerce/compare/v1.0.1...v1.0.2) - December 7, 2017

#### Changed
- Updated `@shopgate/pwa-common` to ^1.0.3

---

### [1.0.1](https://github.com/shopgate/pwa-common-commerce/compare/v1.0.0...v1.0.1) - December 7, 2017

#### Changed
- Updated `@shopgate/pwa-common` to ^1.0.2
- Updated `@shopgate/pwa-core` to ^1.0.0
- Product rating and review selectors now reference the base product

#### Fixed
- Missing sort parameter added to getProducts pipeline when performing a search
