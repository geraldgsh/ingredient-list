<!-- ABOUT THE PROJECT -->

## About The Project

Ingredient list app

### Built With

* [![React][React.js]][React-url]

<!-- GETTING STARTED -->

## Set-up GitHub Actions

This GitHub Action is going to run [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) to help you find style issues.

[Stylelint](https://stylelint.io/) is a linter for your stylesheets that helps you avoid errors and enforce conventions.

[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

Please do the following **steps in this order**:

1. In the first commit of your feature branch create a `.github/workflows` folder and add a copy of [`.github/workflows/linters.yml`](.github/workflows/linters.yml) to that folder.
    - **Remember** to use the file linked above
    - **Remember** that `.github` folder starts with a dot.
2. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
3. When you open your first pull request you should see the result of the GitHub Actions:

![gh actions checks](https://github.com/microverseinc/linters-config/blob/master/assets/images/gh-actions-eslint-stylelint-checks.png)

Click on the `Details` link to see the full output and the errors that need to be fixed:

![gh actions failing checks](https://github.com/microverseinc/linters-config/blob/master/assets/images/gh-actions-html-css-failing-checks.png)

## Set-up linters in your local env

### ESLint

1. Run `npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks` (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).

```
$ npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

+ eslint-config-airbnb@18.1.0
+ eslint-plugin-react@7.20.6
+ eslint-plugin-import@2.20.2
+ eslint-plugin-jsx-a11y@6.2.3
+ eslint-plugin-react-hooks@2.5.1
+ eslint@6.8.0
added 456 packages from 105 contributors, removed 150 packages, updated 1384 packages and audited 1851 packages in 264.998s

70 packages are looking for funding
```

2. Copy [.eslintrc.json](https://github.com/microverseinc/linters-config/blob/master/javascript/.eslintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
    - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run `npx eslint .` on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Stylelint](https://stylelint.io/user-guide/cli#autofixing-errors) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

### Stylelint

1. Run

   ```
   npm install --save-dev stylelint stylelint-scss stylelint-config-standard stylelint-csstree-validator
   ```

   (not sure how to use npm? Read [this](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).


```
$ npm install --save-dev stylelint stylelint-scss stylelint-config-standard stylelint-csstree-validator

+ stylelint-config-standard@20.0.0
+ stylelint-csstree-validator@1.8.0
+ stylelint-scss@3.17.2
+ stylelint@13.3.3
added 136 packages from 91 contributors, removed 10 packages, updated 6 packages and audited 1987 packages in 67.901s

113 packages are looking for funding
```

2. Copy [.stylelintrc.json](./.stylelintrc.json) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run
   ```
   npx stylelint "**/*.{css,scss}"
   ```
   on the root of your directory of your project.
5. Fix linter errors.
6. **IMPORTANT NOTE**: feel free to research [auto-correct options for Stylelint](https://stylelint.io/user-guide/cli#autofixing-errors) if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Future Features

1. 
2. 

### To begin

1. Clone Repo
2. 'npm install' to install dependencies
3. `yarn start` or 'npm start' on terminal
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### To test

1. `yarn test` or 'npm test' on terminal

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/ingredient-list/wiki) for more details. 

#### Live Demo
[Demo]()

#### Getting Started
Clone repo and open index.html with your favorite browser.

#### Prerequisites
Web browser like Chrome, Mozilla or similar.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/geraldgsh/ingredient-list](https://github.com/geraldgsh/ingredient-list

👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://twitter.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/ingredient-list/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 