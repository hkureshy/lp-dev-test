# Getting Started

```
> npm install
> npm run dev
```
### Project Structure


When running `npm run dev`, webpack will automagically create a `main.bundle.js` file for you, which is what the `index.html` files look at when rendering the page. The project has one main directory `/src` which houses all of the contents of the app. Inside of that directory, houses the `/actions`, `/reducers`, and `/components` subdirectories, as well as an `index.js` file as the apps true entry point.

`/actions` and `/reducers` will house any necessary redux code, where the `/components` directory will house all of your component files. Any reusable components will go in the `/common` subdirectory inside of `/components`.

### Naming Conventions and Code Styling
The goal is to provide a company-wide standard for what we name files and how we name them. We have modeled much of our boilerplate off of [AirBnB's style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [Stephen Grider's folder structures](https://github.com/StephenGrider/ReduxSimpleStarter.git). When using this repo, ensure that you have the `linter` and `linter-eslint` packages installed for your code editor. Once installed, you can check the 'Fix errors on save' checkbox in the `linter-eslint` settings. This will attempt to resolve any styling errors that you have in your app. The goal is to submit all commits with no errors. The following is a list of rules that are not defined within the `.eslintrc` file, with a brief example underneath each.

* **Directories** should be **camel-cased**, and should be short, descriptive phrases describing their purpose.
  ```
  /components
  ```

* **Components** should be **capitalized**, and should be short, descriptive phrases describing their purpose.
  ```
  SignupForm.js
  ```

* **Styling** is done via the `sass` directory and gets compiled down into the `style.css` folder in public.

* **Import Statements** should be defined as the file being imported when possible, and should be **capitalized** when possible.
  ```
  import Button from './common/Button';
  ```
