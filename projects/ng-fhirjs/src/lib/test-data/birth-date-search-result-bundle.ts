import { IResource } from '../fhir-types';

export const createBirthDateSearchResultBundle = (): IResource => ({
  resourceType: 'Bundle',
  id: 'e55e2713-b0ac-474e-affb-00d745e2b073',
  meta: { lastUpdated: '2018-01-06T15:41:26.456+01:00' },
  type: 'searchset',
  total: 66,
  link: [
    {
      relation: 'self',
      url: 'http://localhost:8080/baseDstu3/Patient?birthdate=1974',
    },
    {
      relation: 'next',
      url:
        'http://localhost:8080/baseDstu3?_getpages=4f8ab64f-df66-4184-8093-98271f655dee&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=searchset',
    },
  ],
  entry: [
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/4953',
      resource: {
        resourceType: 'Patient',
        id: '4953',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-05T16:02:07.636+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: 'official',
            family: 'Chalmers',
            given: ['Peter', 'James'],
          },
        ],
        gender: 'male',
        birthDate: '1974-12-25',
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/4955',
      resource: {
        resourceType: 'Patient',
        id: '4955',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-05T16:04:59.076+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: 'official',
            family: 'Chalmers',
            given: ['Peter', 'James'],
          },
        ],
        gender: 'male',
        birthDate: '1974-12-25',
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/4957',
      resource: {
        resourceType: 'Patient',
        id: '4957',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-05T16:09:08.836+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: 'official',
            family: 'Chalmers',
            given: ['Peter', 'James'],
          },
        ],
        gender: 'male',
        birthDate: '1974-12-25',
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/4959',
      resource: {
        resourceType: 'Patient',
        id: '4959',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-05T16:09:59.726+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: 'official',
            family: 'Chalmers',
            given: ['Peter', 'James'],
          },
        ],
        gender: 'male',
        birthDate: '1974-12-25',
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/4961',
      resource: {
        resourceType: 'Patient',
        id: '4961',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-05T16:13:45.361+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: 'official',
            family: 'Chalmers',
            given: ['Peter', 'James'],
          },
        ],
        gender: 'male',
        birthDate: '1974-12-25',
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/4962',
      resource: {
        resourceType: 'Patient',
        id: '4962',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-05T16:22:14.431+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: 'official',
            family: 'Chalmers',
            given: ['Peter', 'James'],
          },
        ],
        gender: 'male',
        birthDate: '1974-12-25',
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/4964',
      resource: {
        resourceType: 'Patient',
        id: '4964',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-05T16:25:45.860+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: 'official',
            family: 'Chalmers',
            given: ['Peter', 'James'],
          },
        ],
        gender: 'male',
        birthDate: '1974-12-25',
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/4966',
      resource: {
        resourceType: 'Patient',
        id: '4966',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-05T16:26:33.928+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Some narrative</div>',
        },
        active: true,
        name: [
          {
            use: 'official',
            family: 'Chalmers',
            given: ['Peter', 'James'],
          },
        ],
        gender: 'male',
        birthDate: '1974-12-25',
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/4968',
      resource: {
        resourceType: 'Patient',
        id: '4968',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-05T17:11:52.118+01:00',
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
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/5003',
      resource: {
        resourceType: 'Patient',
        id: '5003',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-06T09:48:22.053+01:00',
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
      search: { mode: 'match' },
    },
  ],
});
