import { Entry } from '../fhir-types';

export const createBundleTransactionEntry = (): Entry => ({
  debug: true,
  resource: {
    resourceType: 'Bundle',
    id: 'bundle-transaction',
    meta: {
      lastUpdated: '2014-08-18T01:43:30Z',
    },
    type: 'transaction',
    entry: [
      {
        fullUrl: 'urn:uuid:61ebe359-bfdc-4613-8bf2-c5e300945f0a',
        resource: {
          resourceType: 'Patient',
          text: {
            status: 'generated',
            div:
              '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
          },
          active: true,
          name: [
            {
              use: 'official',
              family: 'Muster',
              given: ['Felix', 'Ulrich'],
            },
          ],
          gender: 'male',
          birthDate: '1974-12-25',
        },
        request: {
          method: 'POST',
          url: 'Patient',
        },
      },
    ],
  },
});
