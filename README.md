# E-Commerce React Application

Home Page
![Demo](./homepage1.png)

Shop Page
![Demo](./shoppage3.png)

Sign In Page
![Demo](./signin1.png)

Checkout Page
![Demo](./checkoutpage.png)


## Basic Dependencies

```bash
yarn add sass
yarn add react-router-dom
yarn add firebase
yarn add redux redux-logger react-redux
yarn add reselect
yarn add redux-persist
yarn add lodash.memoize
yarn add react-stripe-checkout
```

## Lessons

Branch: "Lesson-1-SCSS"

*TBA

Branch: "Lesson-2-Props-and-styles"

*TBA

Branch: "Lesson-3-React-Routing"

*TBA

Branch: "Lesson-4-Header"

* Header or nav bar component
* `Link` from react-router-dom used in `Header` Component
* `Route`, `Switch` from react-router-dom used in `App` Component
* `BrowserRouter` from react-router-dom used in `Index.js` - contains App 


Branch: "Lesson-5-Firebase-Auth"

* Sign in and up page
* Sign In Component
* Form Input Component
* Custom Button Component
* Firebase Auth for Signing In and Out : Pop up window and `auth.onAuthStateChanged()`
* `ComponentWillUnmount()` and `componentDidMount()` Methods in App.js
* Preventing update in submit forms : `event.preventDefault();`

Branch: "Lesson-6-Firestore"

* Sign Up Component 
* Signing Up with email and password- `auth` async method - `createUserWithEmailAndPassword()`
* Query Reference (Document and Collection) in Firestore
* documentSnapshot object from documentRef object methods (`exists`,`data()`)
* documentRef object CRUD methods in Firestore (`set()`,`get()`)
* `async` funtion, and `await`
* Signing In using email and password : `auth` async method - `signInWithEmailAndPassword()`

Branch: "Lesson-7-Redux-intro"

* install redux: `yarn add redux redux-logger react-redux`
* Flux pattern : actions -> reducers -> store -> components
* actions -> middleware -> reducers -> root-reducers -> store -> components
* i.e `user.actions.js`- contains a function returning an object with type and payload properties
* i.e `user.reducer.js`- contains a constant variable and function with switch statement
* i.e `root-reducer.js`- combines all reducers. (`combineReducer` from 'redux')
* i.e `store.js`- creates a store. (`createStore`, `applyMiddleware` from 'redux')
* In `index.js`, all app component must be within `Provider`. (`Provider` from 'react-redux')
* Also in `index.js`, store is a property of `Provider`. (`store` from './redux/store')
* Connecting actions to component - `connect` from 'react-redux'
* if a state should stay in a component, use - `mapDispatchToProps`
* if a state is passed as props in a component, use - ` mapStatetoProps`

Branch: "Lesson-8-Redux-boolean-values"

* Cart Icon Component
* Cart Dropdown Component
* Added cart `reducer`, `actions`, and `types` in `./src/redux/cart`
* `hidden` state can be toggled on and off, withoud payload in actions
* `togglCartHidden` action was dispatch in cart icon
* `hidden` state were `mapStatetoProps` in `header` component
* hidden state (boolean) dictates if `Cart Dropdown` component should be hidden or not 

Branch: "Lesson-9-adding-cart-items"

* Add new `Custom Button` ClassName for Add to Cart
* Add new `cart.utils.js` containing a function for summarizing `cartItems` if multiple same item were added
* Uses  array function `find()` to get mulitple items with same id (same item)

Branch: "Lesson-10-Redux-props-to-component"

* Cart Item component
* cartItems were `mapStateToProps` to Card Dropdown
* Destructuring of objects for ex ... (next line)
* a state containing users and cart reducers are importe like (next line)
* state  ----> { cart : { cartItems }}

Branch: "Lesson-11-Selectors-in-Redux"

* `yarn add reselect`
* Memoization of number of items in cart
* input and output selectors
* `createSelector` - enables us to create memoized function of getting a sliced data
* `createStructuredSelector` - enables to connect selectors as props without mentioning the `state` variable
* map state to props can be access by `this.props.<variable-name>`

Branch: "Lesson-12-Cart-creation"

**correction: Checkout-creation**
  
* CheckOut Page and CheckOutItem Component
* `removeItem` fx in cart.actions.js to subtract 1 quantity in a cart
* `clearItemFromCart` fx to remove item in a cart using x button
* `toggleHidden` was dispatch using shorthand style in `CartDropdown` component
* `withRouter` from `react-router-dom` was used to have access to `history.push()` in Checkout Button
* number of items in the cart and total price were derived using selector
* array `reduce` method used to get total price and total items in the cart.
* array `map`, `find`, `filter` method used to add, remove and clear item in the cart.

Branch: "Lesson-13-Redux-persist"

* Intro to local storage and session storage
* `yarn add redux-persist`
* Mostly configurations: root-reducer -> store -> index.js
* `import { persistStore } from 'redux-persist'` in `store.js`
* `import  { persistReducer } from 'redux-persist';` - in root-reducer,.js
* `import storage from 'redux-persist/lib/storage';` - in root-reducer,.js (local storage)
* `import storageSession from 'redux-persist/lib/storage/session'';` (session storage)
* `import { PersistGate} from 'redux-persist/integration/react';` in index.js

Branch: "Lesson-14-Dynamic-routing"

**With Data flow and memoization from lodash**

* shop data and directory data was placed in redux
* shop data was converted from array of objects to an object of objects
* `Shop Page` was improved for dynamic routing of collections
* `Collection Page` was created to display all products in one collection.
* `Collection Overview Component` was created.
* `ownProps` - Second default variable of `mapStateToProps` were used...
* ... this time the match object given by a `Route` component from `react-router-dom`
* `yarn add lodash.memoize`
* memoize the additional input arguments in the selector `selectCollection`...
* ... this time the match object given by a `Route` component from `react-router-dom`

Branch: "Lesson-15-Stripe-checkout-payment-component"

* `yarn add react-stripe-checkout`
* `stripe-button` component created containing stripe checkout component
* `favicon.icon` and app name in `/public/index.html` was edited

Branch: "Lesson-16-Deploying-on-Heroku"

* Get heroku account - sign up.
* `brew tap heroku/brew && brew install heroku` - install heroku cli
* `heroku --version` - check version and if heroku cli was successfully installed
* `heroku login` - login heroku cli
* `https://github.com/mars/create-react-app-buildpack` - build pack... no need to npm or yarn build locally
* `heroku create $APP_NAME --buildpack mars/create-react-app` - set app name and buildpack
* `git push heroku master` - pushing the local master branch to your heroku app
* `heroku open` - open website
* if `process.env.NODE_ENV` is in production, logger must not included in middlewares in `/redux/store.js`

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
