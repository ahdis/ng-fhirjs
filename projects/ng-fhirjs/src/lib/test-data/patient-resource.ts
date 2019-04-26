import { IResource } from '../fhir-types';

export const createPatientResource = (): IResource => ({
  resourceType: 'Patient',
  id: '46912',
  meta: {
    versionId: '1',
    lastUpdated: '2018-01-04T10:48:32.744+01:00',
  },
  text: {
    status: 'generated',
    div:
      '<div xmlns="http://www.w3.org/1999/xhtml">Franz Müller, 4.12.1971</div>',
  },
  name: [
    {
      family: 'Müller',
      given: 'Franz',
    },
  ],
  gender: 'male',
  birthDate: '1971-12-04',
  address: [
    {
      line: ['Leidensweg 10'],
      city: 'Specimendorf',
      postalCode: '9876',
    },
  ],
});
