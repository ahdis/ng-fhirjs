/// <reference path="./fhirpath.d.ts" />
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Inject, InjectionToken } from '@angular/core';

const ifhirpath = require('fhirpath');

@Injectable()
export class FhirPathService {

  evaluate(fhir: any, fhirPath: string): any {
    return ifhirpath.evaluate(fhir, fhirPath);
  }

}
