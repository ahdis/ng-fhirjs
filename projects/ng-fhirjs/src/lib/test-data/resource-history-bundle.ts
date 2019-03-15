import { IResource } from '../fhir-types';

export const createResourceHistoryBundle = (): IResource => ({
  resourceType: 'Bundle',
  id: 'ce895fc4-f55a-44ee-87ff-24709acf1901',
  meta: { lastUpdated: '2018-01-06T15:06:12.162+01:00' },
  type: 'history',
  total: 2,
  link: [
    {
      relation: 'self',
      url: 'http://localhost:8080/baseDstu3/Patient/46921/_history',
    },
  ],
  entry: [
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46921',
      resource: {
        resourceType: 'Patient',
        id: '46921',
        meta: {
          versionId: '2',
          lastUpdated: '2018-01-06T15:06:12.128+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Fälix Müster</div>',
        },
        name: [{ family: 'Muster', given: ['Fälix'] }],
        gender: 'male',
        birthDate: '1971-12-04',
        address: [
          {
            line: ['Leidensweg 10'],
            city: 'Specimendorf',
            postalCode: '9876',
          },
        ],
      },
      request: {
        method: 'PUT',
        url: 'http://localhost:8080/baseDstu3/Patient/46921/_history/2',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46921',
      resource: {
        resourceType: 'Patient',
        id: '46921',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T15:06:12.060+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Fälix Müster</div>',
        },
        name: [{ family: 'Müster', given: ['Fälix'] }],
        gender: 'male',
        birthDate: '1971-12-04',
        address: [
          {
            line: ['Leidensweg 10'],
            city: 'Specimendorf',
            postalCode: '9876',
          },
        ],
      },
      request: {
        method: 'POST',
        url: 'http://localhost:8080/baseDstu3/Patient/46921/_history/1',
      },
    },
  ],
});
