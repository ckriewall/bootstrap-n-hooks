# react2019

A simple app incorporating best practices for a React SPA. Emphasis is placed on:

- React [Arrow Function Components](https://www.robinwieruch.de/react-function-component#react-arrow-function-component)
- React [Hooks](https://reactjs.org/docs/hooks-intro.html)

## Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/343c414c-0ae3-4fa1-96d6-c60d0ffe8c05/deploy-status)](https://app.netlify.com/sites/react2019/deploys)

View the [demo on Netlify](https://react2019.netlify.com/).

## Getting Started

To use this project:

1. Clone the repo **OR**
2. Perform a manual installation

Both approaches result in the same product, namely a React app with support for:

- [Font Awesome](https://fontawesome.com) - Easy icons
- [React Bootstrap](https://react-bootstrap.github.io/) - Styling
- [React Router](https://reacttraining.com/react-router/) - SPA routing

### Option 1: Clone the Repo

```bash
git clone https://github.com/ckriewall/react2019.git myproject
cd myproject
yarn install
```

### Option 2: Manual Installation

Manual installation includes following tasks:

- [Run create-react-app](#run-create-react-app)
- [Remove CRA bloat](#remove-cra-bloat)
- [Install Font Awesome](#install-font-awesome)
- [Install Bootstrap and React Bootstrap](#install-bootstrap-and-react-bootstrap)
- [Install React Router](#install-react-router)
- [Install axios](#install-axios)
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

#### Define Components

Arrow Function Components can replace Class Components and SFCs. Build 3 Arrow Function Components to bring the app to life.

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

### Start the Application

```bash
yarn start
```

## Deploy to Netlify

- Install the [Netlify CLI](https://www.netlify.com/docs/cli/)
- Configure [Continuous Deployment](https://www.netlify.com/docs/continuous-deployment/)

### Add React-Router support

Netlify requires a [redirect rule](https://www.netlify.com/docs/redirects/) to support [React Router](https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/). For a React SPA, create `/public/redirects` (no file extension).

> To enable clean URLs in your Netlify deployed SPAs, add the following rule to your redirects file.

`/* /index.html 200`

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [React Front to Back](https://www.udemy.com/modern-react-front-to-back/) by [Traversy Media](https://www.traversymedia.com/)
