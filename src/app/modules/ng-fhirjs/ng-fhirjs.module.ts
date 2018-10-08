import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FHIR_HTTP_CONFIG, FhirJsHttpService } from './fhir-js-http.service';
import { FhirPathService } from './fhirpath.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [FhirJsHttpService, FhirPathService],
})
export class NgFhirjsModule { }
