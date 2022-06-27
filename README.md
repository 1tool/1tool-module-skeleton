<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">1tool-module-skeleton</h3>

  <p align="center">
   SDK For developing 1Tool modules.
    <br />
    <a href="https://my.1tool.com/suite/api/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://my.1tool.com/">1Tool</a>
    ·
    <a href="https://github.com/1tool/1tool-module-skeleton/issues">Report Bug</a>
    ·
    <a href="https://github.com/1tool/1tool-module-skeleton/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#creating-a-new-module">Creating a new module</a></li>
      </ul>
    </li>
    <li><a href="#project-structure">Project structure</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![1Tool][product-screenshot]](https://www.1tool.com)

1Tool module skeleton is a front-end setup for scaffolding 1Tool modules independently from backend. We provide this code, so anyone can build modules on top of the 1Tool suite api.

Here's why:
* Easy and fast setup without the hurdles of setting up a backend server.
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like setting up an authorized api or state management from scratch

Of course, no template will serve all modules since your needs may be different. So we'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

Use the `Getting started` section to get started.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Vue.js 3](https://vuejs.org)
* [Pinia](https://pinia.vuejs.org)
* [PrimeVue](https://www.primefaces.org/primevue/)
* [Vue-i18n](https://vue-i18n.intlify.dev/)
* [TailwindCSS](https://tailwindcss.com/)
* [Vue-router](https://router.vuejs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You should have an user account at 1Tool suite and be familiar with the following technologies:
- Tailwind CSS
- Vue3 ecosystem
  - vue routing
  - composition api
  - pinia state management
  - vue single file components (SFC)


### Installation

1. Obtain an API Key at [https://my.1tool.com/suite/api](https://my.1tool.com/suite/api/docs#/Auth/post_api_auth_user)
2. Clone the repo
   ```sh
   git clone https://github.com/1tool/1tool-module-skeleton.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API token and tenant id in meta tags of `public/index.html`
   ```html
    <meta name="tenant-id" content="API_TENANT">
    <meta name="auth-token" content="API_TOKEN">
   ```



### Usage
To start a development server simple run
```sh
npm run watch
```
<p align="right">(<a href="#top">back to top</a>)</p>



### Creating a new module
There is a Demo app provided in `src/apps/Demo`. To get started with a new module there's a few steps to take:

- Simply duplicate `Demo` folder and give it a name of the new module; i.e.: `ProjectSettings`.
- Replace all occurences of `Demo` with `NewModule` and `demo` with `newmodule` in the newly created folder.
- Rename `apps/NewModule/views/Demo.vue` to `apps/NewModule/views/NewModule.vue`
- Replace `data-module="Demo"` to `data-module="NewModule"` in `public/index.html` frontend mount point.
<p align="right">(<a href="#top">back to top</a>)</p>



## Project structure
The entry point of the application is defined in `public/index.html`:
```html
<div id="frontend-canvas" data-module="Demo"></div>
```

Everything you need to worry about is in `src/apps`. The rest of the code is just a setup that get's provided by 1Tool.
```
src/apps/
`-- Module
    |-- api
    |   `-- index.js   - provides authorized api client
    |-- components
    |   `-- *.vue      - a place to store your vue SFC components
    |-- lang
    |   `-- index.js   - contains translation language lines
    |-- router
    |   `-- routes.js  - defines module routes and views
    |-- store
    |   `-- index.js   - pinia application state
    |-- views
    |   `-- Module.vue - base module view
    `-- index.js
```
<p align="right">(<a href="#top">back to top</a>)</p>



## Links
A list of links to documentation pages:
- [1Tool API](https://my.1tool.com/suite/api/docs) - documentation of api endpoints
- [Vue.js](https://vuejs.org/guide/introduction.html) - vue3 documentation
- [Pinia](https://pinia.vuejs.org/introduction.html) - state management documentation
- [PrimeVue](https://www.primefaces.org/primevue/) - component library documentation
- [vue-i18n](https://vue-i18n.intlify.dev/guide/) - language layer documentation
- [TailwindCSS](https://tailwindcss.com/) - css framework documentation
- [vue-router](https://router.vuejs.org/guide/) - routing documentation
<p align="right">(<a href="#top">back to top</a>)</p>



## License
Distributed under the MIT License. See `LICENSE` for more information.
<p align="right">(<a href="#top">back to top</a>)</p>



## FAQ
### Where can I obtain an api token?
You can obtain an api token with authorizing your user against the `auth/user` api endpoint: [Read more on api documentation.](https://my.1tool.com/suite/api/docs#/Auth/post_api_auth_user)
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/1tool/1tool-module-skeleton.svg?style=for-the-badge
[contributors-url]: https://github.com/1tool/1tool-module-skeleton/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/1tool/1tool-module-skeleton.svg?style=for-the-badge
[forks-url]: https://github.com/1tool/1tool-module-skeleton/network/members
[stars-shield]: https://img.shields.io/github/stars/1tool/1tool-module-skeleton.svg?style=for-the-badge
[stars-url]: https://github.com/1tool/1tool-module-skeleton/stargazers
[issues-shield]: https://img.shields.io/github/issues/1tool/1tool-module-skeleton.svg?style=for-the-badge
[issues-url]: https://github.com/1tool/1tool-module-skeleton/issues
[license-shield]: https://img.shields.io/github/license/1tool/1tool-module-skeleton.svg?style=for-the-badge
[license-url]: https://github.com/1tool/1tool-module-skeleton/blob/master/LICENSE
[product-screenshot]: images/screenshot.png
