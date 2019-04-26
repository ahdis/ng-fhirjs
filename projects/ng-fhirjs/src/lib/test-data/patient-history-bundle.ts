import { IResource } from '../fhir-types';

export const createPatientHistoryBundle = (): IResource => ({
  resourceType: 'Bundle',
  id: '5889353a-0e81-4ec1-84cc-601c47a130c2',
  meta: { lastUpdated: '2018-01-06T14:21:32.802+01:00' },
  type: 'history',
  total: 2149,
  link: [
    {
      relation: 'self',
      url: 'http://localhost:8080/baseDstu3/Patient/_history',
    },
    {
      relation: 'next',
      url:
        'http://localhost:8080/baseDstu3?_getpages=b65b6eaf-00d0-403f-a83e-73eef7166ab4&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=history',
    },
  ],
  entry: [
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46913',
      resource: {
        resourceType: 'Patient',
        id: '46913',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-04T10:55:48.382+01:00',
        },
        text: {
          status: 'generated',
          div:
            '<div xmlns="http://www.w3.org/1999/xhtml">Franz Müller, 4.12.1971</div>',
        },
        name: [{ family: 'Müller', given: ['Franz'] }],
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
        url: 'http://localhost:8080/baseDstu3/Patient/46913/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46912',
      resource: {
        resourceType: 'Patient',
        id: '46912',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-04T10:48:32.744+01:00',
        },
        text: {
          status: 'generated',
          div:
            '<div xmlns="http://www.w3.org/1999/xhtml"><table class="hapiPropertyTable"><tbody/></table></div>',
        },
      },
      request: {
        method: 'POST',
        url: 'http://localhost:8080/baseDstu3/Patient/46912/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46911',
      resource: {
        resourceType: 'Patient',
        id: '46911',
        meta: {
          versionId: '2',
          lastUpdated: '2017-12-29T16:25:20.805+01:00',
        },
        text: {
          status: 'generated',
          div:
            '<divxmlns="http://www.w3.org/1999/xhtml"><table class="hapiPropertyTable"><tbody/></table></div>',
        },
      },
      request: {
        method: 'DELETE',
        url: 'http://localhost:8080/baseDstu3/Patient/46911/_history/2',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46911',
      resource: {
        resourceType: 'Patient',
        id: '46911',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:25:20.798+01:00',
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
        url: 'http://localhost:8080/baseDstu3/Patient/46911/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46710',
      resource: {
        resourceType: 'Patient',
        id: '46710',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:25:18.723+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
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
        url: 'http://localhost:8080/baseDstu3/Patient/46710/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46709',
      resource: {
        resourceType: 'Patient',
        id: '46709',
        meta: {
          versionId: '2',
          lastUpdated: '2017-12-29T16:25:18.689+01:00',
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
        url: 'http://localhost:8080/baseDstu3/Patient/46709/_history/2',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46709',
      resource: {
        resourceType: 'Patient',
        id: '46709',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:25:18.595+01:00',
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
        url: 'http://localhost:8080/baseDstu3/Patient/46709/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46708',
      resource: {
        resourceType: 'Patient',
        id: '46708',
        meta: {
          versionId: '2',
          lastUpdated: '2017-12-29T16:24:29.529+01:00',
        },
        text: {
          status: 'generated',
          div:
            '<div xmlns="http://www.w3.org/1999/xhtml"><table class="hapiPropertyTable"><tbody/></table></div>',
        },
      },
      request: {
        method: 'DELETE',
        url: 'http://localhost:8080/baseDstu3/Patient/46708/_history/2',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46708',
      resource: {
        resourceType: 'Patient',
        id: '46708',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:24:29.516+01:00',
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
        url: 'http://localhost:8080/baseDstu3/Patient/46708/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/46507',
      resource: {
        resourceType: 'Patient',
        id: '46507',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:24:26.533+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
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
        method: 'PUT',
        url: 'http://localhost:8080/baseDstu3/Patient/46507/_history/1',
      },
    },
  ],
});
