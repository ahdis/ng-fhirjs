import { IResource } from '../fhir-types';

export const createNameSearchResultBundle = (): IResource => ({
  resourceType: 'Bundle',
  id: '5c0d355a-84f9-428f-a824-89e094cac8fd',
  meta: { lastUpdated: '2018-01-06T15:54:31.544+01:00' },
  type: 'searchset',
  total: 58,
  link: [
    {
      relation: 'self',
      url:
        'http://localhost:8080/baseDstu3/Patient?name%3Aexact=Muster&name%3Aexact=Felix',
    },
    {
      relation: 'next',
      url:
        'http://localhost:8080/baseDstu3?_getpages=10f7c8e6-c582-4ad1-8e92-05e5f0035229&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=searchset',
    },
  ],
  entry: [
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
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Somenarrative</div>',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/5005',
      resource: {
        resourceType: 'Patient',
        id: '5005',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-06T09:57:56.227+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/5007',
      resource: {
        resourceType: 'Patient',
        id: '5007',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-06T10:04:15.365+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/5009',
      resource: {
        resourceType: 'Patient',
        id: '5009',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-06T10:06:24.691+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/5011',
      resource: {
        resourceType: 'Patient',
        id: '5011',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-06T10:37:43.283+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/5013',
      resource: {
        resourceType: 'Patient',
        id: '5013',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-06T11:46:46.042+01:00',
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">Somenarrative</div>',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/5015',
      resource: {
        resourceType: 'Patient',
        id: '5015',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-06T11:47:11.300+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/5017',
      resource: {
        resourceType: 'Patient',
        id: '5017',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-06T11:47:35.219+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Patient/10003',
      resource: {
        resourceType: 'Patient',
        id: '10003',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-07T18:39:53.275+01:00',
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
