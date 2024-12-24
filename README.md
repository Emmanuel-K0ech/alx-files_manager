# 0x04. Files Manager

This project is a culmination of various back-end concepts learned in this trimester, including authentication, NodeJS, MongoDB, Redis, pagination, and background processing.

## Objective
The goal is to build a simple platform that allows users to:
- Authenticate via a token.
- List all files.
- Upload new files.
- Change file permissions.
- View files.
- Generate thumbnails for images.

The project provides guidance but encourages flexibility in implementation, such as organizing code into multiple files (e.g., using a `utils` folder).

### Why this project?
While similar services exist in real life, this project serves as a learning opportunity to integrate several back-end technologies and create a functional product.

**Enjoy building!**

---

## Resources
Here are some resources to help you get started:
- [Node JS Getting Started](https://nodejs.dev/)
- [Process API Documentation](https://nodejs.org/api/process.html)
- [Express Getting Started](https://expressjs.com/en/starter/installing.html)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://nodemon.io/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Bull (Redis-based queue)](https://github.com/OptimalBits/bull)
- [Image Thumbnail](https://github.com/sindresorhus/image-thumbnail)
- [Mime-Types](https://www.npmjs.com/package/mime-types)
- [Redis Documentation](https://redis.io/documentation)

---

## Learning Objectives
By the end of this project, you will be able to:
- Create an API with Express.
- Authenticate users.
- Store data in MongoDB.
- Use Redis for temporary data storage.
- Set up and use a background worker.

---

## Requirements
- **Editors**: `vi`, `vim`, `emacs`, or Visual Studio Code.
- **Platform**: Your code will run on Ubuntu 18.04 LTS using Node.js (version 12.x.x).
- **Coding Standards**:
  - All files must end with a new line.
  - Use the `.js` file extension.
  - Your code will be checked using `ESLint` with the Airbnb style guide.
- **Mandatory**: Include a `README.md` at the root of the project folder.

### Running the project
1. Install dependencies:
   ```bash
   npm install
   ```
2. Use the provided scripts in `package.json` for linting, testing, or running the server/worker.

---

## Provided Files

### `package.json`
```json
{
  "name": "files_manager",
  "version": "1.0.0",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "start-server": "nodemon --exec babel-node --presets @babel/preset-env ./server.js",
    "start-worker": "nodemon --exec babel-node --presets @babel/preset-env ./worker.js",
    "dev": "nodemon --exec babel-node --presets @babel/preset-env",
    "test": "./node_modules/.bin/mocha --require @babel/register --exit"
  },
  "dependencies": {
    "bull": "^3.16.0",
    "chai-http": "^4.3.0",
    "express": "^4.17.1",
    "image-thumbnail": "^1.0.10",
    "mime-types": "^2.1.27",
    "mongodb": "^3.5.9",
    "redis": "^2.8.0",
    "sha1": "^1.1.1",
    "uuid": "^8.2.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.0",
    "@babel/core": "^7.8.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.8.2",
    "@babel/register": "^7.8.0",
    "chai": "^4.2.0",
    "chai-http": "^4.3.0",
    "mocha": "^6.2.2",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}
```

### `.eslintrc.js`
```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ],
};
```

### `babel.config.js`
```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

---

## Final Note
Don’t forget to run:
```bash
npm install
```
to install the required dependencies before starting your project!
```
