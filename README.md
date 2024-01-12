# Redux Toolkit

- install @redux/toolkit and react-redux
- Build our
- Connect our store to our App
- Slice Cart(Slice). (Different sections in cart as slices)
- dispatch(action)
- Selector

# Types of testing

- Unit Testing - Testing components in isolation
- Integration Testing - Testing the integration of units
- End to End Testing - e2e testing - Testing complete flow from login to logout

# Setting up testing

- install react testing library as devDependency
- install jest as devDependency
- install babel from babel site
- configured babel by creating babel.config.js file and pasting the content copied from babel site
- Configiure parcelrc file to disable default babel transpilation in order to make babel for jest work which is added in babel.conifig.js file

- jest configuration using npx jest --init
  use jsDom which is an environment to run test cases
- install jsdom library
- install @babel/preset-react - To give JSX support while writing test cases
- install @testing-library/jest-dom for  .toBeInTheDocument type functions while writing test cases
- add in babel config file
- 