import { IResource } from '../fhir-types';

export const createHistoryBundle = (): IResource => ({
  resourceType: 'Bundle',
  id: '1d50d3af-0f15-43a4-aa51-273ccc9036ff',
  meta: { lastUpdated: '2018-01-06T13:19:58.306+01:00' },
  type: 'history',
  total: 9749,
  link: [
    { relation: 'self', url: 'http://localhost:8080/baseDstu3/_history' },
    {
      relation: 'next',
      url:
        'http://localhost:8080/baseDstu3?_getpages=4c79ed22-81a6-4d38-ab2f-37d5e736366a&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=history',
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
            '<div xmlns="http://www.w3.org/1999/xhtml"><table class="hapiPropertyTable"><tbody/></table></div>',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/46910',
      resource: {
        resourceType: 'Observation',
        id: '46910',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:25:20.670+01:00',
          profile: ['http://hl7.org/fhir/StructureDefinition/bodyweight'],
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">72 kg</div>',
        },
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '29463-7',
              display: 'Body Weight',
            },
            {
              system: 'http://loinc.org',
              code: '3141-9',
              display: 'Body weight Measured',
            },
            {
              system: 'http://snomed.info/sct',
              code: '27113001',
              display: 'Body weight',
            },
          ],
        },
        subject: { reference: 'Patient/46709' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      request: {
        method: 'POST',
        url: 'http://localhost:8080/baseDstu3/Observation/46910/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/46909',
      resource: {
        resourceType: 'Observation',
        id: '46909',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:25:20.658+01:00',
          profile: ['http://hl7.org/fhir/StructureDefinition/bodyweight'],
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">72 kg</div>',
        },
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '29463-7',
              display: 'Body Weight',
            },
            {
              system: 'http://loinc.org',
              code: '3141-9',
              display: 'Body weight Measured',
            },
            {
              system: 'http://snomed.info/sct',
              code: '27113001',
              display: 'Body weight',
            },
          ],
        },
        subject: { reference: 'Patient/46709' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      request: {
        method: 'POST',
        url: 'http://localhost:8080/baseDstu3/Observation/46909/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/46908',
      resource: {
        resourceType: 'Observation',
        id: '46908',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:25:20.651+01:00',
          profile: ['http://hl7.org/fhir/StructureDefinition/bodyweight'],
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">72 kg</div>',
        },
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '29463-7',
              display: 'Body Weight',
            },
            {
              system: 'http://loinc.org',
              code: '3141-9',
              display: 'Body weight Measured',
            },
            {
              system: 'http://snomed.info/sct',
              code: '27113001',
              display: 'Body weight',
            },
          ],
        },
        subject: { reference: 'Patient/46709' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      request: {
        method: 'POST',
        url: 'http://localhost:8080/baseDstu3/Observation/46908/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/46907',
      resource: {
        resourceType: 'Observation',
        id: '46907',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:25:20.644+01:00',
          profile: ['http://hl7.org/fhir/StructureDefinition/bodyweight'],
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">72 kg</div>',
        },
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '29463-7',
              display: 'Body Weight',
            },
            {
              system: 'http://loinc.org',
              code: '3141-9',
              display: 'Body weight Measured',
            },
            {
              system: 'http://snomed.info/sct',
              code: '27113001',
              display: 'Body weight',
            },
          ],
        },
        subject: { reference: 'Patient/46709' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      request: {
        method: 'POST',
        url: 'http://localhost:8080/baseDstu3/Observation/46907/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/46906',
      resource: {
        resourceType: 'Observation',
        id: '46906',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:25:20.636+01:00',
          profile: ['http://hl7.org/fhir/StructureDefinition/bodyweight'],
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">72 kg</div>',
        },
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '29463-7',
              display: 'Body Weight',
            },
            {
              system: 'http://loinc.org',
              code: '3141-9',
              display: 'Body weight Measured',
            },
            {
              system: 'http://snomed.info/sct',
              code: '27113001',
              display: 'Body weight',
            },
          ],
        },
        subject: { reference: 'Patient/46709' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      request: {
        method: 'POST',
        url: 'http://localhost:8080/baseDstu3/Observation/46906/_history/1',
      },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/46905',
      resource: {
        resourceType: 'Observation',
        id: '46905',
        meta: {
          versionId: '1',
          lastUpdated: '2017-12-29T16:25:20.629+01:00',
          profile: ['http://hl7.org/fhir/StructureDefinition/bodyweight'],
        },
        text: {
          status: 'generated',
          div: '<div xmlns="http://www.w3.org/1999/xhtml">72 kg</div>',
        },
        status: 'final',
        category: [
          {
            coding: [
              {
                system: 'http://hl7.org/fhir/observation-category',
                code: 'vital-signs',
                display: 'Vital Signs',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '29463-7',
              display: 'Body Weight',
            },
            {
              system: 'http://loinc.org',
              code: '3141-9',
              display: 'Body weight Measured',
            },
            {
              system: 'http://snomed.info/sct',
              code: '27113001',
              display: 'Body weight',
            },
          ],
        },
        subject: { reference: 'Patient/46709' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      request: {
        method: 'POST',
        url: 'http://localhost:8080/baseDstu3/Observation/46905/_history/1',
      },
    },
  ],
});
