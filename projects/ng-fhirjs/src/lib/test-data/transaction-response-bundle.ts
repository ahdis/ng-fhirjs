import { IResource } from '../fhir-types';

export const createTransactionResponseBundle = (): IResource => ({
  resourceType: 'Bundle',
  id: '6001d10d-047e-4d2a-a76a-f09c1ffc320c',
  type: 'transaction-response',
  link: [{ relation: 'self', url: 'http://localhost:8080/baseDstu3' }],
  entry: [
    {
      response: {
        status: '201 Created',
        location: 'Patient/46924/_history/1',
        etag: '1',
        lastModified: '2018-01-06T15:25:48.357+01:00',
      },
    },
  ],
});
