import { IResource } from '../fhir-types';

export const createCapabilityStatementCernerResource = (): IResource => ({
  resourceType: 'CapabilityStatement',
  url:
    'https://fhir-ehr.sandboxcerner.com/r4/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/metadata',
  name: 'CernerCapabilityStatement',
  title: 'Cerner Capability Statement',
  status: 'active',
  publisher: 'Cerner',
  date: '2019-03-25',
  description: 'Cerner implementation of FHIR on top of Millennium',
  kind: 'instance',
  implementation: {
    description: 'Cerner implementation of FHIR on top of Millennium',
    url:
      'https://fhir-ehr.sandboxcerner.com/r4/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca',
  },
  fhirVersion: '4.0.0',
  format: ['json', 'application/fhir+json'],
  patchFormat: ['application/json-patch+json'],
  rest: [
    {
      mode: 'server',
      documentation: 'Cerner implementation of FHIR on top of Millennium',
      security: {
        extension: [
          {
            url:
              'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
            extension: [
              {
                url: 'token',
                valueUri:
                  'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/token',
              },
              {
                url: 'authorize',
                valueUri:
                  'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/personas/provider/authorize',
              },
            ],
          },
        ],
        cors: true,
        service: [
          {
            coding: [
              {
                system:
                  'http://terminology.hl7.org/CodeSystem/restful-security-service',
                code: 'SMART-on-FHIR',
              },
            ],
            text:
              'OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).',
          },
        ],
        description: 'OAuth2 plus SMART extensions',
      },
      resource: [
        {
          type: 'CapabilityStatement',
          interaction: [
            {
              code: 'read',
            },
          ],
        },
        {
          type: 'AllergyIntolerance',
          interaction: [
            {
              code: 'read',
            },
            {
              code: 'search-type',
            },
          ],
          searchParam: [
            {
              name: '_id',
              definition: 'http://hl7.org/fhir/R4/SearchParameter/Resource-id',
              type: 'token',
              documentation:
                'A single or comma separated list of AllergyIntolerance ids. It is a required field if the patient field is not given.',
            },
            {
              name: 'patient',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/clinical-patient',
              type: 'reference',
              documentation:
                'Who the sensitivity is for. It is a required field if the _id field is not given.',
            },
            {
              name: 'clinical-status',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/AllergyIntolerance-clinical-status',
              type: 'token',
              documentation: 'Certainty of the allergy or intolerance.',
            },
          ],
        },
        {
          type: 'Encounter',
          interaction: [
            {
              code: 'read',
            },
            {
              code: 'search-type',
            },
            {
              code: 'create',
            },
            {
              code: 'patch',
            },
          ],
          searchParam: [
            {
              name: '_id',
              definition: 'http://hl7.org/fhir/R4/SearchParameter/Resource-id',
              type: 'token',
              documentation:
                'A single or comma separated list of Encounter ids. It is a required field if the patient or subject fields are not given.',
            },
            {
              name: '_count',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/Resource-count',
              type: 'number',
              documentation:
                'The maximum number of results to return. Not honored when  is set.',
            },
            {
              name: 'patient',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/clinical-patient',
              type: 'reference',
              documentation:
                'The patient present at the encounter. It is a required field if the _id or subject fields are not given.',
            },
            {
              name: 'subject',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/Encounter-subject',
              type: 'reference',
              documentation:
                'The patient present at the encounter. It is a required field if the _id or patient fields are not given.',
            },
          ],
        },
        {
          type: 'OperationDefinition',
          interaction: [
            {
              code: 'read',
            },
          ],
        },
        {
          type: 'Patient',
          interaction: [
            {
              code: 'read',
            },
            {
              code: 'search-type',
            },
            {
              code: 'create',
            },
            {
              code: 'patch',
            },
          ],
          searchParam: [
            {
              name: '_id',
              definition: 'http://hl7.org/fhir/R4/SearchParameter/Resource-id',
              type: 'token',
              documentation: 'A single or comma separated list of Patient ids.',
            },
            {
              name: 'identifier',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/Patient-identifier',
              type: 'token',
              documentation: 'A patient identifier. ',
            },
            {
              name: 'name',
              definition: 'http://hl7.org/fhir/R4/SearchParameter/Patient-name',
              type: 'string',
              documentation: 'The beginning of any name of the patient. ',
            },
            {
              name: 'given',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/individual-given',
              type: 'string',
              documentation: 'The beginning of the given name of the patient.',
            },
            {
              name: 'family',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/individual-family',
              type: 'string',
              documentation:
                'The beginning of the family name of the patient. ',
            },
            {
              name: 'address-postalcode',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/individual-address-postalcode',
              type: 'string',
              documentation: 'The postal code of the address of the patient. ',
            },
            {
              name: 'birthdate',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/individual-birthdate',
              type: 'date',
              documentation: 'The date of birth of the patient. ',
            },
            {
              name: 'phone',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/individual-phone',
              type: 'token',
              documentation: 'The value of the phone number of the patient. ',
            },
            {
              name: 'email',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/individual-email',
              type: 'token',
              documentation: 'The value of the email address of the patient. ',
            },
            {
              name: 'gender',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/individual-gender',
              type: 'token',
              documentation: 'The administrative gender of the patient. ',
            },
            {
              name: '_count',
              definition:
                'http://hl7.org/fhir/R4/SearchParameter/Resource-count',
              type: 'number',
              documentation:
                'The maximum number of results to return. Not honoured when',
            },
          ],
        },
        {
          type: 'Practitioner',
          interaction: [
            {
              code: 'read',
            },
            {
              code: 'search-type',
            },
          ],
          searchParam: [
            {
              name: '_id',
              definition: 'http://hl7.org/fhir/R4/SearchParameter/Resource-id',
              type: 'token',
              documentation:
                'A single or comma separated list of Practitioner ids.',
            },
          ],
        },
        {
          type: 'StructureDefinition',
          interaction: [
            {
              code: 'read',
            },
          ],
        },
      ],
    },
  ],
});
