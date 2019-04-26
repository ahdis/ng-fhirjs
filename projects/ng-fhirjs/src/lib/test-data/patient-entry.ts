import { Entry } from '../fhir-types';

export const createPatientEntry = ({
  id = '',
  familyName = 'Müller',
  givenName = 'Franz',
} = {}): Entry => ({
  resource: {
    resourceType: 'Patient',
    text: {
      status: 'generated',
      div: `<div xmlns="http://www.w3.org/1999/xhtml">${givenName} ${familyName}, 4.12.1971</div>`,
    },
    ...(typeof id === 'string' && id.length > 0 ? { id } : {}),
    name: [
      {
        family: familyName,
        given: givenName,
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
  },
});
