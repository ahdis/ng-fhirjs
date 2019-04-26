import { IResource } from '../fhir-types';

export const createNextSearchResultBundle = (): IResource => ({
  resourceType: 'Bundle',
  id: '561eda7d-ab70-48be-a334-62e1705b4bdc',
  meta: { lastUpdated: '2018-01-06T22:18:21.786+01:00' },
  type: 'searchset',
  total: 200,
  link: [
    {
      relation: 'self',
      url:
        'http://localhost:8080/baseDstu3?_getpages=0f69d55b-d5ad-448f-b473-37f8a668ebe4&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=searchset',
    },
    {
      relation: 'next',
      url:
        'http://localhost:8080/baseDstu3?_getpages=0f69d55b-d5ad-448f-b473-37f8a668ebe4&_getpagesoffset=20&_count=10&_pretty=true&_bundletype=searchset',
    },
    {
      relation: 'prev',
      url:
        'http://localhost:8080/baseDstu3?_getpages=0f69d55b-d5ad-448f-b473-37f8a668ebe4&_getpagesoffset=0&_count=10&_pretty=true&_bundletype=searchset',
    },
  ],
  entry: [
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47539',
      resource: {
        resourceType: 'Observation',
        id: '47539',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.419+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47540',
      resource: {
        resourceType: 'Observation',
        id: '47540',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.425+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47541',
      resource: {
        resourceType: 'Observation',
        id: '47541',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.431+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47542',
      resource: {
        resourceType: 'Observation',
        id: '47542',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.437+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47543',
      resource: {
        resourceType: 'Observation',
        id: '47543',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.444+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47544',
      resource: {
        resourceType: 'Observation',
        id: '47544',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.449+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47545',
      resource: {
        resourceType: 'Observation',
        id: '47545',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.455+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47546',
      resource: {
        resourceType: 'Observation',
        id: '47546',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.461+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47547',
      resource: {
        resourceType: 'Observation',
        id: '47547',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.467+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47548',
      resource: {
        resourceType: 'Observation',
        id: '47548',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.473+01:00',
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
        subject: { reference: 'Patient/47528' },
        effectiveDateTime: '2017-12-01',
        valueQuantity: {
          value: 72,
          unit: 'kg',
          system: 'http://unitsofmeasure.org',
          code: 'kg',
        },
      },
      search: { mode: 'match' },
    },
  ],
});
