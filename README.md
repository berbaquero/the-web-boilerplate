# The Web Boilerplate

> A simple, small and React-based boilerplate for web projects

Primarily using React for dynamic _and_ static UI building and Sass for CSS pre-processing.

### Get it

Just hit the '**Download ZIP**' button to get the project and start from there!

_If you `git clone` the repo, you'll get the development history from it, which you probably don't want for your own project._

### Run it

Run these commands on your terminal to use the boilerplate

```coffee
npm install # to get the required packages

npm start # to develop

npm run build # to build the whole project
```

### Work it

You have 3 main working folders, located inside the `app` folder:

* `scripts` — contains all your JS modules and JSX components
* `styles` — contains all your 
* `templates` — contains the React components that will be rendered to static HTML files.

### React for static HTML files

Besides using React for building your dynamic UIs, this boilerplate also uses React for creating any JSX component in the `app/templates` folder into static HTML files. So the whole UI building is done in one awesome consistent way.

To create HTML files from React, just run on your terminal:

```coffee
# on project root
node build $reactFile1 $reactFile2 $reactFile3 ...
```

Where `$reactFileN` is the list of names of the react components in the `app/templates` folder you want to render into HTML.

#### Limitations for React components for static HTML compiling
* The component files must have the `.jsx` extension.
* When `require`-ing these components inside other components, the extension must be left out. For example: `var Component = require('./component');` even though the filename is `component.jsx`.
* Doesn't currently support ES6 syntax.
