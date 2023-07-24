# <img src="static/img/logo_s.png" alt="Logo" width="100"/> Springwolf Website 
[![Build](https://github.com/springwolf/springwolf.github.io/actions/workflows/build.yml/badge.svg)](https://github.com/springwolf/springwolf.github.io/actions/workflows/build.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8dc370e2-1578-4a72-a729-747929a94400/deploy-status)](https://app.netlify.com/sites/springwolf/deploys)

Latest docs are deployed to
- [https://www.springwolf.dev](https://www.springwolf.dev)
- Fallback: [https://springwolf.github.io](https://springwolf.github.io)

## Updating the website & documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

The [docs](docs) folder contains all pages in Markdown format.

### Local Development

```bash
npm install
```
Make sure that you have installed all the dependencies in your local environment. You only need to run this command the first time
or after dependencies are updated.

```bash
npm start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

## Language Style

The [vale](https://vale.sh) tool is used to verify the language style.
After installing, run to verify the documentation
```bash
vale docs/
```