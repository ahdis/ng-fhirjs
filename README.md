[![Build Status](https://travis-ci.com/ahdis/ng-fhirjs.svg?branch=master)](https://travis-ci.com/ahdis/ng-fhirjs)

# ng-fhirjs

ng-fhirjs is an angular module for [fhir.js](https://github.com/FHIR/fhir.js). It uses HttpClient from @angular/common/http as a http adapter and provides a typescript interface to the fhir.js interface. The fhir-js-http service can be dynamically injected into your components. A testsuite has been added to verify the interface, however the interface covers not yet the complete functionality of the fhir.js implementation. Pull requests appreciated!

ng-fhirjs now also integrates [fhirpath.js](https://github.com/lhncbc/fhirpath.js/)

## Usage

See [ng-fhir-sample](https://github.com/ahdis/ng-fhir-sample) for an example how to use it.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Package the library for using it independently

The service is packaged with the help of [Angular CLI](https://angular.io/guide/creating-libraries).

```
yarn build
# If you use npm in your new project (not needed for Yarn)
yarn pack --cwd dist/ng-fhirjs --filename ng-fhirjs.tgz
```

Add ng-fhirjs as dependency to a new project (using [Yarn](https://yarnpkg.com/)):

```
yarn add file:../ng-fhirjs/dist/ng-fhirjs
```

or NPM

```
npm install ../ng-fhirjs/ng-fhirjs.tgz
```

## Development

### Linking to local npm modules

If a fork of fhir.js is used you can link to the fork version in the following way.

```
cd /somepath/fhir.js
npm link
    /usr/local/lib/node_modules/fhir.js -> /somepath/fhir.js
cd /someotherpath/ng-fhirjs
npm link fhir.js
   /someotherpath/node_modules/fhir.js -> /usr/local/lib/node_modules/fhir.js -> /somepaht/fhir.js
```

## Building

```
yarn install
yarn build
```

## License

MIT License

Copyright 2018 ahdis gmbh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
