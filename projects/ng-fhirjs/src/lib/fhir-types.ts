// Type definitions fhir.js
// Project: https://github.com/FHIR/fhir.js

/** resource interface */
export interface IResource {
  resourceType: string;
  id?: string;
  meta?: any;
  text?: any;
  [others: string]: any;
}

export interface Auth {
  bearer?: string;
  user?: string;
  pass?: string;
}
export interface FhirConfig {
  baseUrl: string;
  auth?: Auth;
  credentials: string;
  headers?: { [name: string]: any };
}
export interface Minimal {
  debug?: boolean;
}
export interface RequestObj extends Minimal {
  method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS';
  url: string;
  headers?: any;
  data?: any;
}
export interface ResponseObj {
  status: number;
  headers?: any;
  config: any;
  data: IResource;
}

/** set the debug property property to true to get console logging activated */

/** FHIR Resource Type */
export interface ResourceType extends Minimal {
  type: string;
}
export interface ReferenceObj extends Minimal {
  reference: string;
}
export interface BundleObj extends Minimal {
  bundle: any;
}
export interface ReadObj extends ResourceType {
  id: string;
}
export interface QueryObj extends ResourceType {
  query: any;
}
export interface VReadObj extends ReadObj {
  versionId: string;
}
export interface Adapter extends Minimal {
  http: (args: any) => Promise<any>;
  defer?: any;
}

/** Create Objects */
export interface Tag {
  term: string;
  schema: string;
  label: string;
}
export interface Entry extends Minimal {
  resource: IResource;
  category?: Tag[];
}

/** Interface defintion to fhir.js */
export interface IFhir {
  /** Get a capability statement for the system */
  conformance(empty: Minimal): Promise<ResponseObj>;

  /** Create a new resource with a server assigned id */
  create(entry: Entry): Promise<ResponseObj>;

  /** Read the current state of the resource */
  read(resource: ReadObj): Promise<ResponseObj>;

  /** Retrieve the change history for all resources */
  history(empty: Minimal): Promise<ResponseObj>;

  /** Retrieve the change history for a particular resource type */
  typeHistory(query: ResourceType): Promise<ResponseObj>;

  /** Retrieve the change history for a particular resource */
  resourceHistory(query: ReadObj): Promise<ResponseObj>;

  /** Read the state of a specific version of the resource */
  vread(query: VReadObj): Promise<ResponseObj>;

  /** Update an existing resource by its id (or create it if it is new) */
  update(entry: Entry): Promise<ResponseObj>;

  /** Delete a resource */
  delete(query: Entry): Promise<ResponseObj>;

  /** The transaction interactions submit a set of actions to perform on a server in a single HTTP request/response. */
  transaction(bundle: Entry): Promise<ResponseObj>;

  /** searches a set of resources based on some filter criteria */
  search(query: QueryObj): Promise<ResponseObj>;

  /** returns the next results in a series of pages */
  nextPage(query: BundleObj): Promise<ResponseObj>;

  /** returns the previous results in a series of pages */
  prevPage(query: BundleObj): Promise<ResponseObj>;

  /** These functions below are not yet typescripted because the exact funticionality is not clear */

  /** Validate a resource, but see see issue here first: https://github.com/FHIR/fhir.js/issues/93 */
  /* validate(query: any): any; */

  /** POST on /Document ? */
  /* document(query: any): any; */

  /** GET on /Profile/:type ? */
  /* profile(query: any): any; */

  /** resolves a referenced resources, don't now how ho pass in the defer() function */
  /* resolve(ref: ReferenceObj): Promise<ResponseObj>; */
}
