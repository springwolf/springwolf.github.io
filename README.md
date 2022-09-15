[![Deploy to GitHub Pages](https://github.com/springwolf/springwolf.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/springwolf/springwolf.github.io/actions/workflows/deploy.yml)

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Latest docs are deployed to [https://springwolf.github.io](https://springwolf.github.io).

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

1. Run `$ npm run build`.
2. Run `$ npm run serve` to verify build was correct.
3. Run `$ GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy`
