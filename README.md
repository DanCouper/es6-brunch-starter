ES6 Module Starter

Boilerplate for ES6-based [Brunch](http://brunch.io/) app frontends. Brunch is used as the frontend build tool for [Phoenix](http://www.phoenixframework.org/); personal intended use is as a prototyping/isolated construction tool to quickly test Phoenix frontends.

Brunch has a set of conventions that attempt to simplify the build process, and in theory should allow almost zero config.

In addition to the core Brunch structure & plugins, a set of testing/analysis tools have been included (ESLint, Tape, Coveralls, Plato).

## Prior Art

Based on a my https://github.com/DanCouper/es6-module-starter.

## Usage

0. Install node and npm.
1. Install [Bower](http://bower.io/) if you wish: Brunch is working on better NPM integration, but works out-of-the-box with Bower, making things very easy.
2. Clone this repo: `git clone https://github.com/DanCouper/es6-module-starter`.
3. Install dependencies: `npm i`.
4. Edit info in `package.json`.
5. Reinitialize git, commit, then `hub create && git push origin master`.
6. Add the repo to your Coveralls account, then rename `coveralls.example.yml` to `coveralls.yml` and fill in the Coveralls repo key.
7. Add the repo to your Semaphore account: use `npm run tape` rather than `npm test`: `npm test` runs the tests + code coverage, and the fact the `coveralls.yml` file is .gitignored means they will all fail.
8. Hack away!

## Modules used/included

- [*Brunch*](http://brunch.io/) - extremely simple and nippy build tool.
- [*babel*](https://babeljs.io) - compiles ES6 source to ES5. The `--experimental` flag is also enabled so you can use ES7 features.
- [*tape*](https://github.com/substack/tape) and [*argg*](https://github.com/isao/argg) for simple, effective testing. A couple of good articles on tape: [Why I use Tape instead of Mocha & so should you](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4) by Eric Elliott, and [Buckle up with Tape](https://medium.com/@MarcFly1103/buckle-up-with-tape-1bd5e9e828) by Marco Romero.
- [*eslint*](http://eslint.org/) and *babel-eslint* to analyze your code for stylistic issues.
- [*plato*](https://github.com/es-analysis/plato) to analyze the complexity of your source code.

These are just defaults. Feel free to swap out eslint for jshint, or tape for mocha, or whatever you use for CI instead of coveralls.

## Layout

- `src/` - Your ES6 source code goes here.
- `src/tests/` - Your ES6 tests go here.
- `src/.eslintrc` - ESLint configuration
- `coverage/` - Code coverage reports are output here.
- `dist/` - Your generated ES5 source is output here. This directory is under gitignore.
- `.gitignore` - a sensible .gitignore file to prevent you from checking in generated source.
- `package.json` - Customize this to publish your own module.
- `.coveralls.example.yml` - Rename this to `coveralls.yml` & add your Coveralls repo token this if you use [coveralls](https://coveralls.io/) for code coverage.
- `README.md` - Delete all this and write your own.

## npm scripts

These scripts are the main way to interact with your module as you develop it.

- `compile` - run [babel](https://babeljs.io/) to compile your ES6 source to ES5. Output goes to the `dist/` directory.
- `lint` - run [ESLint](http://eslint.org/) on your ES6 source and reports any style errors.
- `tape` - test your code.
- `coverage` - run [Istanbul](https://gotwarlost.github.io/istanbul/) on your code to report coverage. Reports output in HTML to the `coverage/istanbul` directory.
- `istanbul` - run Istanbul, but output only lcov files for coveralls to read.
- `coveralls` - run coveralls, using Istanbul's lcov report as input.
- `plato` - run [plato](https://github.com/es-analysis/plato), a code analysis tool, on your generated source (plato doesn't support ES6 at the moment; as soon as it does I'll swap it to analyze ES6 source).
- `test` - run tape, Istanbul, and coveralls.
