import {
  Adapter,
  FhirConfig,
  IFhir,
  RequestObj,
  ResponseObj,
} from './fhir-types';

declare function fhir(x: FhirConfig, a: Adapter): IFhir;
declare function http(requestObj: RequestObj): Promise<ResponseObj>;
