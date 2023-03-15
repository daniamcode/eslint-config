How to configure eslint:

1) add ESlint and Error Lens extensions in VSCode. In ESling extension make sure that changes apply on save files

2) add .eslintrc file with rules
3) npm i -D @babel/eslint-parser eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react

4) add babel.config.js file if needed

--------------------------------------------

another option (preferred):

1) remove .eslintrc file
2) uninstall previous dependencies
3) npm i -D standard
4) add in package.json:
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
}

We can see an example in index.js (errors dissapear on saving file) or in App.jsx (React example)

--------------------------------------------

we can extend standard config by installing some dependencies (this is used by midudev):

npm i -D babel-eslint eslint-config-standard eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react   

maybe I need npm i -D @babel/core

and now we can add in package.json:

"eslintConfig": {
    "parser": "babel-eslint",
    "extends": ["standard", "standard-jsx", "standard-react"]
}