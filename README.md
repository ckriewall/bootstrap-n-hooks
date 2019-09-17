# react2019

A project for testing best practices in React.

## Getting Started

Cloning this repo provides access a React app with support for:

- [Font Awesome](https://fontawesome.com) - Easy icons
- [React Bootstrap](https://react-bootstrap.github.io/) - Styling
- [React Router](https://reacttraining.com/react-router/) - SPA routing
- [Yarn](https://yarnpkg.com) - Dependency management

### Installing

If you'd rather build this app from scratch, perform the steps below.

Run create-react-app

```bash
npx create-react-app myproject
```

Install Font Awesome

- Create a [Font Awesome Kit](https://fontawesome.com/start)
- Copy the kid code, e.g. `<script src="https://kit.fontawesome.com/<my_kit_id>.js"></script>`
- Past the kit code into public\index.html

```html
<link rel="apple-touch-icon" href="logo192.png" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<script src="https://kit.fontawesome.com/<my_kit_id>.js"></script>
<title>React App</title>
```

Install Bootstrap and React-Bootstrap

```bash
yarn add react-bootstrap bootstrap
```

Update dependencies

```bash
yarn install
```

Run the application

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
