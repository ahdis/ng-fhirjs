import { IResource } from '../fhir-types';

export const createCapabilityStatementResource = (): IResource => ({
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
});
