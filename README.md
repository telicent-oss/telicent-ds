<h1 align="center">
  Telicent Design System (DS)
</h1>

<p align="center">A component library containing common components with Telicent's &copy; unique brand styling. The components that are contained within this design system will be used across multiple projects. New components will meet the criteria for addition if they end up being used in at least 2 separate projects.</p>

#### Key Features

- **Components**. A growing list of prestyled components
- **Layouts**. Common layouts used in various Telicent applications

## 🌚 Usage

You can use the Telicent DS package to easily keep your project up-to-date with the latest components

1. Install the library

   If using yarn

   ```
   yarn add @telicent-oss/ds
   ```

   If using npm

   ```
   npm install @telicent-oss/ds
   ```

2. Import css styles

   Note: The order of css imports matters. In order to override the styles from
   the DS, the imports below should appear before the applications css file(s)
   import.

   ```
   import "@telicent-oss/ds/dist/style.css";

   // Adds fontawesome icon pack
   import "@telicent-oss/ds/dist/fontawesome.css";
   ```

3. Disable tailwind preflight (only if using tailwind in your application)

   In tailwind.config.[js | ts]

   ```
   {
    ...
      corePlugins: {
        preflight: false,
      }
      ...
   }
   ```

## Developer notes

### Pre-deployment

To test the components before pushing to a npm registry please perform the following steps:

```
git clone https://github.com/Telicent-oss/telicent-ds.git
cd telicent-ds
yarn install
yarn link #this will make it so you have a endpoint to link projects to
cd <project-root>/node_modules/react
yarn link # needs to be done or you app will throw errors due to clashing react instances
cd <project-root>/node_modules/react-dom # needs to be done or you app will throw errors due to clashing react instances

# Navigate to project you want to test the components in
cd /path/to/project
yarn link telicent/ds
yarn link react
yarn link react-dom
```

### Host libary viewer

To host the component library viewer

```
cd /path/to/project
yarn storybook
```

### Build library viewer

To build the library viewer so that it can be hosted on something like Nginx just type `yarn build-storybook`.
By default the output will be created in the storybook-static folder.

### Build components

To build the components ready for uploading to a package manager type `yarn build:babel`

### Publish Component Library

To publish this library to git packages:

- Bump package version in package.json
- push feature branch to git (this will kick off the chromatic action)
  - if there are changes in chromatic this will need to be reviewed
- raise a pull request
  - requires at least one reviewer to accept to merge
- merge pr in to main
- on the main branch raise a release
  - this will kick off chromatic and npm-publish actions

If all that passed, congrats you have successfully deployed your npm package!

### How to use published library in your apps

[Create a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) that has read permissions to Packages

Modify your ~/.npmrc file with the following:

```bash
prefix=/Users/dave/.npm
@telicent-oss:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken={GITHUB_PERSONAL_ACCESS_TOKEN}
```

To add to your app in the project root type `yarn add @telicent-oss/ds`

### How to publish a release candidate

In this section you will learn the steps required to publish a release candidate to test bleeding edge capabilities in your app.

- Set the version number in the package.json manually i.e. `1.1.2-rc1`
- Commit your changes to the branch you are currently working on.
- Create a tag `git tag <tag_name> <branch_name>`
- Push the tag `git push origin <tag_name>`

The workflow will now run and publish the package to [Telicent's private npm repo](https://github.com/Telicent-oss/telicent-ds/pkgs/npm/ds)
