# Contributing to ng-fihrjs

## Publish a new version to npm
To publish a new version to npm follow these steps:

````
git checkout master (can also be done via pull request)
cd projects/ng-fhirjs
yarn version
# enter the new version for example 0.3.1
git push
````

This will update the `package.json` of the ng-fhirjs module and commit a git tag with the new version. 
If a git tag on the master branch is pushed a build to publish the module to npm is triggered.
