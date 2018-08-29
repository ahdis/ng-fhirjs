# ng-fhirjs

ng-fhirjs is an angular module for [fhir.js](https://github.com/FHIR/fhir.js). It uses HttpClient from @angular/common/http as a http adapter and provides a typescript interface to the fhir.js interface. The fhir-js-http service can be dynamically injected into your components. A testsuite has been added to verify the interface, however the interface covers not yet the complete functionality of the fhir.js implementation. Pull requests appreciated!

See [ng-fhir-sample](https://github.com/ahdis/ng-fhir-sample) for an example how to use it.

## usage
see app how to use the service

## running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## packag the library for using it independently
The service is packaged into library with the help [ng-packagr](https://github.com/dherges/ng-packagr), see the following [article(https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e) for help.

```
npm run-script packagr
cd dist
npm pack
```
new project:
```
npm install ../ng-fhirjs/dist/ng-fhirjs-0.2.0.tgz
```

instead of using `import { FhirJsHttpService, FHIR_HTTP_CONFIG }  './modules/ng-fhirjs/fhir-js-http.service'` 
use now `import { FhirJsHttpService, FHIR_HTTP_CONFIG } from 'ng-fhirjs';`


## development

### linking to local npm modules
if a fork of fhir.js is used you can link to the fork version in the folling way.

```
cd /somepath/fhir.js 
npm link
    /usr/local/lib/node_modules/fhir.js -> /somepath/fhir.js
cd /someotherpath/ng-fhirjs
npm link fhir.js
   /someotherpath/node_modules/fhir.js -> /usr/local/lib/node_modules/fhir.js -> /somepaht/fhir.js
```

## building

first time: 
npm install

```
npm run-script build
npm run packagr
```

## license

MIT License

Copyright 2018 ahdis gmbh
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.    