import { getTestBed, TestBed } from '@angular/core/testing';

import { FhirPathService } from './fhirpath.service';
import { IResource } from './fhir-types';
import { createCapabilityStatementCernerResource } from './test-data/capability-statement-cerner';

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

  describe('#oauthuritests', () => {
    const resource = createCapabilityStatementCernerResource();

    it('oauthUriToken', () => {
      expect(
        service.evaluate(
          resource,
          "rest.security.extension.where(url='http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris).extension.where(url='token').valueUri"
        )[0]
      ).toBe(
        'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/token'
      );
      expect(
        service.evaluateToString(
          resource,
          "rest.security.extension.where(url='http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris').extension.where(url='token').valueUri"
        )
      ).toBe(
        'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/token'
      );
      expect(service.getOauthUriToken(resource)).toBe(
        'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/token'
      );
    });

    it('oauthUriAuthorize', () => {
      expect(
        service.evaluate(
          resource,
          "rest.security.extension.where(url='http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris').extension.where(url='authorize').valueUri"
        )[0]
      ).toBe(
        'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/personas/provider/authorize'
      );
      expect(
        service.evaluateToString(
          resource,
          "rest.security.extension.where(url='http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris').extension.where(url='authorize').valueUri"
        )
      ).toBe(
        'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/personas/provider/authorize'
      );
      expect(service.getOauthUriAuthorize(resource)).toBe(
        'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/personas/provider/authorize'
      );
    });
  });
});
