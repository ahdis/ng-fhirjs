import { getTestBed, TestBed } from '@angular/core/testing';

import { FhirPathService } from './fhirpath.service';
import { IResource } from './fhir-types';

describe('FhirPathService', () => {
  let injector: TestBed;
  let service: FhirPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FhirPathService],
    });
    injector = getTestBed();
    service = injector.get(FhirPathService);
  });

  describe('#simplefhirpathtests', () => {
    const resource: IResource = {
      resourceType: 'CapabilityStatement',
      status: 'active',
      date: '2018-01-03T17:31:22+01:00',
      publisher: 'Not provided',
      kind: 'instance',
      software: {
        name: 'HAPI FHIR Server',
        version: '3.1.0',
      },
      implementation: {
        description: 'Example Server',
      },
      fhirVersion: '3.0.1',
      acceptUnknown: 'extensions',
      format: ['application/fhir+xml', 'application/fhir+json'],
    };

    it('CapabilityStatement.status', () => {
      expect(service.evaluate(resource, 'CapabilityStatement.status')[0]).toBe(
        'active'
      );
    });

    it('CapabilityStatement.date', () => {
      expect(service.evaluate(resource, 'CapabilityStatement.date')[0]).toBe(
        '2018-01-03T17:31:22+01:00'
      );
    });

    it('CapabilityStatement.software.name', () => {
      expect(
        service.evaluate(resource, 'CapabilityStatement.software.name')[0]
      ).toBe('HAPI FHIR Server');
    });
  });
});
