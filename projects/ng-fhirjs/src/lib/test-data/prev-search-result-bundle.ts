import { IResource } from '../fhir-types';

export const createPrevSearchResultBundle = (): IResource => ({
  resourceType: 'Bundle',
  id: '1e4c68d5-bf8c-483f-88cc-de965a8f441e',
  meta: { lastUpdated: '2018-01-06T22:18:21.791+01:00' },
  type: 'searchset',
  total: 200,
  link: [
    {
      relation: 'self',
      url:
        'http://localhost:8080/baseDstu3?_getpages=0f69d55b-d5ad-448f-b473-37f8a668ebe4&_getpagesoffset=0&_count=10&_pretty=true&_bundletype=searchset',
    },
    {
      relation: 'next',
      url:
        'http://localhost:8080/baseDstu3?_getpages=0f69d55b-d5ad-448f-b473-37f8a668ebe4&_getpagesoffset=10&_count=10&_pretty=true&_bundletype=searchset',
    },
  ],
  entry: [
    {
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47529',
      resource: {
        resourceType: 'Observation',
        id: '47529',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.342+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47530',
      resource: {
        resourceType: 'Observation',
        id: '47530',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.355+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47531',
      resource: {
        resourceType: 'Observation',
        id: '47531',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.363+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47532',
      resource: {
        resourceType: 'Observation',
        id: '47532',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.370+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47533',
      resource: {
        resourceType: 'Observation',
        id: '47533',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.380+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47534',
      resource: {
        resourceType: 'Observation',
        id: '47534',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.387+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47535',
      resource: {
        resourceType: 'Observation',
        id: '47535',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.395+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47536',
      resource: {
        resourceType: 'Observation',
        id: '47536',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.401+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47537',
      resource: {
        resourceType: 'Observation',
        id: '47537',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.408+01:00',
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
      fullUrl: 'http://localhost:8080/baseDstu3/Observation/47538',
      resource: {
        resourceType: 'Observation',
        id: '47538',
        meta: {
          versionId: '1',
          lastUpdated: '2018-01-06T22:18:20.414+01:00',
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
