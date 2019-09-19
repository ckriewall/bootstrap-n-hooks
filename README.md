# react2019

Clone the repo or perform the manual installation to practice scaffolding a modern app. Emphasis is placed on:

- React [Arrow Function Components](https://www.robinwieruch.de/react-function-component#react-arrow-function-component), not classes or SFCs.
- React [Hooks](https://reactjs.org/docs/hooks-intro.html) for component state rather than classes

## Getting Started

### Clone the Repo

Clone this repo for a React app with support for:

- [Font Awesome](https://fontawesome.com) - Easy icons
- [React Bootstrap](https://react-bootstrap.github.io/) - Styling
- [React Router](https://reacttraining.com/react-router/) - SPA routing

```bash
git clone https://github.com/ckriewall/react2019.git myproject
```

### Manual Installation

If you'd rather build this app from scratch, perform the steps below.

- [Run create-react-app](#run-create-react-app)
- [Remove CRA bloat](#remove-cra-bloat)
- [Install Font Awesome](#install-font-awesome)
- [Install Bootstrap and React Bootstrap](#install-bootstrap-and-react-bootstrap)
- [Install React Router](#install-react-router)
- [Install axios](#install-axios)
- [Update dependencies](#update-dependencies)
- [Define components](#define-components)
- [Configure routes](#configure-routes)
- [Start the application](#start-the-application)

#### Run create-react-app

```bash
npx create-react-app myproject
```

#### Remove CRA bloat

```bash
rm -i src/App.css src/App.test.js src/index.css src/logo.svg src/serviceworker.js
```

In `src\index.js` delete...

```javascript
import './index.css';
```

and

```javascript
import * as serviceWorker from './serviceWorker';
```

and

```javascript
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

#### Install Font Awesome

- Create a [Font Awesome Kit](https://fontawesome.com/start)
- Copy the kit code, e.g:
  `<script src="https://kit.fontawesome.com/<my_kit_id>.js"></script>`
- Paste the kit code into `public\index.html` above the `<title>` tag

```html
<script src="https://kit.fontawesome.com/<my_kit_id>.js"></script>
<title>React App</title>
```

#### Install Bootstrap and React-Bootstrap

Official pages for [React-Bootstrap](https://react-bootstrap.github.io/)

```bash
yarn add react-bootstrap bootstrap
```

In `src/index.js` add a link to the Bootstrap stylesheet (above `ReactDOM.render`)

```javascript
//Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
```

#### Install React Router

Official pages for [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

```bash
yarn add react-router-dom
```

#### Install axios

Official pages for [axios](https://github.com/axios/axios)

```bash
yarn add axios
```

#### Update dependencies

Delete `yarn.lock`, then...

```bash
yarn install
```

#### Define Components

Functional components with arrow functions are essential to modern react.

- Define [`src\components\nav\HeaderNav.js`](https://github.com/ckriewall/react2019/blob/master/src/components/nav/HeaderNav.js) - for Bootstrap navigation
- Define [`src\components\GitHub.js`](https://github.com/ckriewall/react2019/blob/master/src/components/GitHub.js) - for an `axios` API call
- Define [`src\components\Home.js`](https://github.com/ckriewall/react2019/blob/master/src/components/Home.js)

#### Configure Routes

In `src\App.js`

```jsx
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/nav/HeaderNav';
import Home from './components/Home';
import Simpsons from './components/Simpsons';
import GitHub from './components/GitHub';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
      </Fragment>

      <Container>
        <Route exact path='/' component={Home} />
        <Route path='/github' component={GitHub} />
        <Route path='/simpsons' component={Simpsons} />
      </Container>
    </BrowserRouter>
  );
};

export default App;
```

#### Start the application

```bash
yarn start
```

## Deployment

Add additional notes about how to deploy this on a live system

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

- _Initial work_ - [C Kriewall](https://github.com/ckriewall)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [React Front to Back](https://www.udemy.com/modern-react-front-to-back/) by [Traversy Media](https://www.traversymedia.com/)
