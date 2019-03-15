import { Injectable } from '@angular/core';
import { evaluate } from 'fhirpath';

@Injectable({
  providedIn: 'root',
})
export class FhirPathService {
  evaluate(fhir: any, fhirPath: string): any {
    return evaluate(fhir, fhirPath);
  }
}
