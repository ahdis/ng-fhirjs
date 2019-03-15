import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { FhirJsHttpService, FHIR_HTTP_CONFIG } from './fhir-js-http.service';
import { Entry, FhirConfig, IResource, ReadObj, VReadObj } from './fhir-types';
import { createHistoryBundle } from './test-data/history-bundle';
import { createPatientResource } from './test-data/patient-resource';
import { createCapabilityStatementResource } from './test-data/capability-statement-resource';
import { createPatientEntry } from './test-data/patient-entry';
import { createPatientHistoryBundle } from './test-data/patient-history-bundle';
import { createResourceHistoryBundle } from './test-data/resource-history-bundle';
import { createBundleTransactionEntry } from './test-data/bundle-transaction-entry';
import { createTransactionResponseBundle } from './test-data/transaction-response-bundle';
import { createNextSearchResultBundle } from './test-data/next-search-result-bundle';
import { createSearchResultBundle } from './test-data/search-result-bundle';
import { createPrevSearchResultBundle } from './test-data/prev-search-result-bundle';
import { createBirthDateSearchResultBundle } from './test-data/birth-date-search-result-bundle';
import { createNameSearchResultBundle } from './test-data/name-search-result-bundle';
import { createOperationOutcomeResource } from './test-data/operation-outcome-resource';

export const FHIR_JS_CONFIG: FhirConfig = {
  baseUrl: 'http://localhost:8080/baseDstu3',
  credentials: 'same-origin',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'X-Another-Custom': 'Another Value',
  },
};

describe('FhirJsHttpService', () => {
  let injector: TestBed;
  let service: FhirJsHttpService;
  let httpMock: HttpTestingController;

  const patientV1 = createPatientResource();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FhirJsHttpService,
        { provide: FHIR_HTTP_CONFIG, useValue: FHIR_JS_CONFIG },
      ],
    });
    injector = getTestBed();
    service = injector.get(FhirJsHttpService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#conformance', () => {
    it('should return an conformance statement', () => {
      const resource = createCapabilityStatementResource();

      service.conformance({}).then(response => {
        expect(response.data.resourceType).toBe('CapabilityStatement');
        expect(response.data.status).toBe('active');
      });

      const req = httpMock.expectOne(`${FHIR_JS_CONFIG.baseUrl}/metadata`);
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      expect(req.request.headers.get('Access-Control-Allow-Origin')).toBe('*');
      expect(req.request.headers.get('X-Another-Custom')).toBe('Another Value');
      req.flush(resource);
    });
  });

  describe('#create', () => {
    it('should create a patient resource', () => {
      const entry = createPatientEntry();

      service.create(entry).then(response => {
        expect(response.data.resourceType).toBe('Patient');
        expect(response.status).toBe(201);
        expect(response.data.id).toBe('46912');
        expect(response.data.meta.id.versionId).toBe('1');
      });

      const req = httpMock.expectOne(`${FHIR_JS_CONFIG.baseUrl}/Patient`);
      expect(req.request.method).toBe('POST');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      req.flush(patientV1, {
        headers: {
          connection: 'close',
          date: 'Thu, 04 Jan 2018 09: 48: 32 GMT',
          'x-powered-by':
            'HAPI FHIR 3.1.0 REST Server (FHIR Server; FHIR 3.0.1/DSTU3)',
          etag: 'W/"1"',
          'last-modified': 'Thu,04 Jan 2018 09: 48: 32 GMT',
          location: 'http://localhost:8080/baseDstu3/Patient/46912/_history/1',
          'content-type': 'application/json+fhir;charset=utf-8',
          server: 'Jetty(9.4.z-SNAPSHOT)',
        },
        status: 201,
        statusText: 'OK',
      });
    });
  });

  describe('#read, #vread', () => {
    it('should return the patient with id 46912', () => {
      const read: ReadObj = { id: '46912', type: 'Patient' };

      service.read(read).then(response => {
        expect(response.status).toBe(200);
        expect(response.data.id).toBe('46912');
        expect(response.data.meta.id.versionId).toBe('1');
      });

      const req = httpMock.expectOne(`${FHIR_JS_CONFIG.baseUrl}/Patient/46912`);
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      req.flush(patientV1);
      httpMock.verify();
    });

    it('should return the patient with id 46912, version 1', () => {
      const read: VReadObj = { id: '46912', versionId: '1', type: 'Patient' };

      service.vread(read).then(response => {
        expect(response.status).toBe(200);
        expect(response.data.id).toBe('46912');
        expect(response.data.meta.id.versionId).toBe('1');
      });

      const req = httpMock.expectOne(
        `${FHIR_JS_CONFIG.baseUrl}/Patient/46912/_history/1`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      req.flush(patientV1);
    });
  });

  describe('#history, #historyType, #resourceHistory', () => {
    it('should return a bundle with the history, paged', () => {
      const bundle = createHistoryBundle();

      service.history({ debug: true }).then(response => {
        expect(response.data.resourceType).toBe('Bundle');
        expect(response.status).toBe(200);
        expect(response.data.id).toBe('1d50d3af-0f15-43a4-aa51-273ccc9036ff');
      });

      const req = httpMock.expectOne(`${FHIR_JS_CONFIG.baseUrl}/_history`);
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      req.flush(bundle);
      httpMock.verify();
    });

    it('should return a bundle with the history of resource type Patient, paged', () => {
      const bundle = createPatientHistoryBundle();

      service.typeHistory({ debug: true, type: 'Patient' }).then(response => {
        expect(response.data.resourceType).toBe('Bundle');
        expect(response.status).toBe(200);
        expect(response.data.id).toBe('5889353a-0e81-4ec1-84cc-601c47a130c2');
      });

      const req = httpMock.expectOne(
        `${FHIR_JS_CONFIG.baseUrl}/Patient/_history`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      req.flush(bundle);
      httpMock.verify();
    });

    it('should return a bundle with the history of a resource, paged', () => {
      const bundle = createResourceHistoryBundle();

      service
        .resourceHistory({ id: '46921', type: 'Patient' })
        .then(response => {
          expect(response.data.resourceType).toBe('Bundle');
          expect(response.status).toBe(200);
          expect(response.data.id).toBe('ce895fc4-f55a-44ee-87ff-24709acf1901');
        });

      const req = httpMock.expectOne(
        `${FHIR_JS_CONFIG.baseUrl}/Patient/46921/_history`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      req.flush(bundle);
    });
  });

  describe('#update', () => {
    it('Update an existing resource by its id', () => {
      const entry = createPatientEntry({
        id: '46915',
        familyName: 'Muster',
        givenName: 'Fälix',
      });

      service.update(entry).then(response => {
        expect(response.data.resourceType).toBe('Patient');
        expect(response.status).toBe(200);
        expect(response.data.id).toBe('46915');
        expect(response.data.meta.id.versionId).toBe('2');
        expect(response.data.meta.id.lastUpdated).toBe(
          '2018-01-06T14:34:32.520+01:00'
        );
      });

      const req = httpMock.expectOne(`${FHIR_JS_CONFIG.baseUrl}/Patient/46915`);
      expect(req.request.method).toBe('PUT');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');
      entry.resource.meta = {
        versionId: '2',
        lastUpdated: '2018-01-06T14:34:32.520+01:00',
      };
      req.flush(entry.resource, {
        headers: {
          connection: 'close',
          date: 'Sat, 06 Jan 2018 13:34:32 GMT',
          'x-powered-by':
            'HAPI FHIR 3.1.0 REST Server (FHIR Server; FHIR 3.0.1/DSTU3)',
          etag: 'W/"2"',
          'last-modified': 'Sat, 06 Jan 2018 13:34:32 GMT',
          location: 'http://localhost:8080/baseDstu3/Patient/46915/_history/2',
          'content-type': 'application/json+fhir;charset=utf-8',
          server: 'Jetty(9.4.z-SNAPSHOT)',
        },
        status: 200,
        statusText: 'OK',
      });
    });
  });

  describe('#transaction', () => {
    it('should perform a transaction', () => {
      const entry = createBundleTransactionEntry();

      service.transaction(entry).then(response => {
        expect(response.status).toBe(200);
        expect(response.data.resourceType).toBe('Bundle');
        expect(response.data.id).toBe('6001d10d-047e-4d2a-a76a-f09c1ffc320c');
        expect(response.data.type).toBe('transaction-response');
      });

      const req = httpMock.expectOne(`${FHIR_JS_CONFIG.baseUrl}`);
      expect(req.request.method).toBe('POST');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');

      const bundle = createTransactionResponseBundle();

      req.flush(bundle, {
        headers: {
          connection: 'close',
          date: 'Sat, 06 Jan 2018 14:25:48 GMT',
          'x-powered-by':
            'HAPI FHIR 3.1.0 REST Server (FHIR Server; FHIR 3.0.1/DSTU3)',
          location:
            'http://localhost:8080/baseDstu3/Bundle/6001d10d-047e-4d2a-a76a-f09c1ffc320c',
          'content-type': 'application/json+fhir;charset=utf-8',
          server: 'Jetty(9.4.z-SNAPSHOT)',
        },
        status: 200,
        statusText: 'OK',
      });
    });
  });

  describe('#search', () => {
    const searchresult = createSearchResultBundle();
    const searchnextresult = createNextSearchResultBundle();
    const searchprevresult = createPrevSearchResultBundle();

    it('should search for patients with a birthdate in 1974', () => {
      service
        .search({ type: 'Patient', query: { birthdate: 1974 } })
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.data.resourceType).toBe('Bundle');
          expect(response.data.id).toBe('e55e2713-b0ac-474e-affb-00d745e2b073');
          expect(response.data.type).toBe('searchset');
          expect(response.data.total).toBe(66);
        });

      const req = httpMock.expectOne(
        `${FHIR_JS_CONFIG.baseUrl}/Patient?birthdate=1974`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');

      const bundle = createBirthDateSearchResultBundle();

      req.flush(bundle);
      httpMock.verify();
    });

    it('should search for patients with an exact name', () => {
      service
        .search({
          type: 'Patient',
          query: {
            name: { $and: [{ $exact: 'Muster' }, { $exact: 'Felix' }] },
          },
        })
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.data.resourceType).toBe('Bundle');
          expect(response.data.id).toBe('5c0d355a-84f9-428f-a824-89e094cac8fd');
          expect(response.data.type).toBe('searchset');
          expect(response.data.total).toBe(58);
        });

      const req = httpMock.expectOne(
        `${FHIR_JS_CONFIG.baseUrl}/Patient?name:exact=Muster&name:exact=Felix`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');

      const bundle = createNameSearchResultBundle();
      req.flush(bundle);
      httpMock.verify();
    });

    it('should search for observations for a patient specified with an id', () => {
      service
        .search({ type: 'Observation', query: { subject: 'Patient/47126' } })
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.data.resourceType).toBe('Bundle');
          expect(response.data.id).toBe('bd15a1c0-748b-409c-a71a-e09b6dbbabf8');
          expect(response.data.type).toBe('searchset');
          expect(response.data.total).toBe(200);
        });

      const req = httpMock.expectOne(
        `${FHIR_JS_CONFIG.baseUrl}/Observation?subject=Patient%2F47126`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');

      req.flush(searchresult);
      httpMock.verify();
    });

    it('next page of observations for previous search', () => {
      service.nextPage({ bundle: searchresult }).then(response => {
        expect(response.status).toBe(200);
        expect(response.data.resourceType).toBe('Bundle');
        expect(response.data.id).toBe('561eda7d-ab70-48be-a334-62e1705b4bdc');
        expect(response.data.type).toBe('searchset');
        expect(response.data.total).toBe(200);
      });

      const req = httpMock.expectOne(
        `${
          FHIR_JS_CONFIG.baseUrl
        }?_getpages=0f69d55b-d5ad-448f-b473-37f8a668ebe4&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=searchset`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');

      req.flush(searchnextresult);
      httpMock.verify();
    });

    it('previous page of observations for previous search', () => {
      service.prevPage({ bundle: searchnextresult }).then(response => {
        expect(response.status).toBe(200);
        expect(response.data.resourceType).toBe('Bundle');
        expect(response.data.id).toBe('1e4c68d5-bf8c-483f-88cc-de965a8f441e');
        expect(response.data.type).toBe('searchset');
        expect(response.data.total).toBe(200);
      });

      const req = httpMock.expectOne(
        `${
          FHIR_JS_CONFIG.baseUrl
        }?_getpages=0f69d55b-d5ad-448f-b473-37f8a668ebe4&_getpagesoffset=0&_count=10&_pretty=true&_bundletype=searchset`
      );
      expect(req.request.method).toBe('GET');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');

      req.flush(searchprevresult);
      httpMock.verify();
    });
  });

  describe('#delete', () => {
    it('should delete a patient resource', () => {
      const entry: Entry = {
        resource: patientV1,
      };

      service.delete(entry).then(response => {
        expect(response.data.resourceType).toBe('OperationOutcome');
      });

      const req = httpMock.expectOne(`${FHIR_JS_CONFIG.baseUrl}/Patient/46912`);
      expect(req.request.method).toBe('DELETE');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.headers.get('Content-Type')).toBe('application/json');

      const operationOutcome = createOperationOutcomeResource();

      req.flush(operationOutcome, {
        headers: {
          connection: 'close',
          date: 'Thu, 04 Jan 2018 09: 48: 32 GMT',
          'x-powered-by':
            'HAPI FHIR 3.1.0 REST Server (FHIR Server; FHIR 3.0.1/DSTU3)',
          etag: 'W/"1"',
          'last-modified': 'Thu,04 Jan 2018 09: 48: 32 GMT',
          location: 'http://localhost:8080/baseDstu3/Patient/46912/_history/1',
          'content-type': 'application/json+fhir;charset=utf-8',
          server: 'Jetty(9.4.z-SNAPSHOT)',
        },
        status: 200,
        statusText: 'OK',
      });
    });
  });
});
