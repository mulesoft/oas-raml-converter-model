export class Annotation {
  name: string
  definition: Definition | any
  annotations: undefined | Annotation[]
}

export class AnnotationType {
  name: string
  displayName: undefined | string
  description: undefined | string
  allowedTargets: undefined | string[]
  definition: Definition
  required: undefined | boolean
}

export class BaseUri {
  host: undefined | string;
  basePath: undefined | string;
  protocol: undefined | string;
  uri: undefined | string;
  annotations: undefined | Annotation[];
}

export class Body {
  mimeType: undefined | string;
  name: string;
  definition: undefined | Definition;
  description: undefined | string;
  required: undefined | boolean;
  hasParams: undefined | boolean;
  annotations: undefined | Annotation[];
}

export class Definition {
  name: string;
  type: undefined | string;
  internalType: undefined | string;
  compositionType: undefined | Definition[];
  reference: undefined | string;
  fileReference: undefined | string;
  properties: undefined | Definition[];
  propsRequired: undefined | string[];
  required: undefined | boolean;
  format: undefined | string;
  description: undefined | string;
  _default: undefined | any;
  multipleOf: undefined | number;
  maximum: undefined | number;
  minimum: undefined | number;
  maxLength: undefined | number;
  minLength: undefined | number;
  pattern: undefined | string;
  maxItems: undefined | number;
  minItems: undefined | number;
  uniqueItems: undefined | boolean;
  maxProperties: undefined | number;
  minProperties: undefined | number;
  _enum: undefined | string[];
  items: undefined | Definition;
  itemsList: undefined | Definition[];
  additionalProperties: undefined | (boolean|Definition);
  discriminator: undefined | string;
  xml: undefined | string;
  example: undefined | any;
  definitions: undefined | any;
  annotations: undefined | Annotation[];

  jsonValue: undefined | string;
  fileTypes: undefined | string;
  discriminatorValue: undefined | any;
  facets: undefined | any[]; //swagger extension
  examples: undefined | any;
  schema: undefined | Definition;
  schemaPath: undefined | string;
  displayName: undefined | string;
  collectionFormat: undefined | string;
  allowEmptyValue: undefined | boolean;

  allOf: undefined | any[];
  exclusiveMaximum: undefined | boolean;
  exclusiveMinimum: undefined | boolean;
  readOnly: undefined | boolean;
  externalDocs: undefined | ExternalDocumentation;
  title: undefined | string;
  invalidJsonExample: undefined | boolean;

  error: undefined | any
  warning: undefined |  any

}

export class ExternalDocumentation {
  url: undefined | string;
  description: undefined | string;
  annotations: undefined | Annotation[];
}

export class Header {
  _in: undefined | string;
  name: string;
  definition: undefined | Definition;
  description: undefined | string;
  required: undefined | boolean;
  annotations: undefined | Annotation[];
  hasParams: undefined | boolean;
  displayName: undefined | string;
  reference: undefined | string;
}

export class Info {
  title: string
  description: undefined | string
  version: undefined | (string | number)
  termsOfService: undefined | string
  contact: undefined | InfoData
  license: undefined | InfoData
  annotations: undefined | Annotation[]
}

export class InfoData {
  name: undefined | string
  url: undefined | string
  email: undefined | string
  annotations: undefined | Annotation[]
}

export class Item {
  name: string
  value: undefined | any
}

export class MediaType {
  mimeTypes: string[] // consumes + produces
  consumes: undefined | string[]
  produces: undefined | string[]
}

export class Method {
  method: string // get, put, post, delete, options, head, patch
  description: undefined | string
  path: undefined | string
  parameters: undefined | Parameter[] // query parameters
  responses: undefined | Response[]
  name: undefined | string // displayName / operationId
  headers: undefined | Header[]
  bodies: undefined | Body[]
  formBodies: undefined | Body[]
  is: undefined | Item[]
  produces: undefined | string[]
  consumes: undefined | string[]
  annotations: undefined | Annotation[]
  securedBy: undefined | SecurityRequirement[]
  tags: undefined | string[]
  summary: undefined | string
  externalDocs: undefined | ExternalDocumentation
  protocols: undefined | string[]
  queryStrings: undefined | Parameter[]
  deprecated: undefined | boolean
}

export class Parameter {
  _in: undefined | string
  name: string
  definition: undefined | Definition
  displayName: undefined | string
  description: undefined | string
  required: undefined | boolean
  hasParams: undefined | boolean
  reference: undefined | string
  annotations: undefined | Annotation[]
}

export class Resource {
  path: undefined | string
  relativePath: undefined | string
  description: undefined | string
  displayName: undefined | string
  is: undefined | Item[]
  parameters: undefined | Parameter[]
  baseUriParameters: undefined | Parameter[]
  resourceType: undefined | Item[]
  methods: undefined | Method[]
  securedBy: undefined | SecurityRequirement[]
  annotations: undefined | Annotation[]
  resources: undefined | Resource[]

  error: undefined | any
  warning: undefined | any
}

export class ResourceType {
  name: string
  usage: undefined | string
  resource: undefined | Resource
}

export class Response {
  httpStatusCode: undefined | string
  name: undefined | string
  description: undefined | string
  headers: undefined | Header[]
  bodies: undefined | Body[]
  reference: undefined | string
  hasParams: undefined | boolean
  globalResponseDefinition: undefined | string
  annotations: undefined | Annotation[]
}

export class Root {
  info: Info
  protocols: undefined | string[]
  baseUri: undefined | BaseUri
  mediaType: undefined | MediaType
  securityDefinitions: undefined | SecurityDefinition[]
  resources: undefined | Resource[]
  types: undefined | Definition[]
  tags: undefined | Tag[]
  externalDocs: undefined | ExternalDocumentation
  documentation: undefined | Item[]
  baseUriParameters: undefined | Parameter[]
  resourceTypes: undefined | ResourceType[]
  traits: undefined | Trait[]
  annotationTypes: undefined | AnnotationType[]
  annotations: undefined | Annotation[]
  resourceAnnotations: undefined | Resource
  responses: undefined | Response[]

  error: undefined | any
  warning: undefined | any
}

export class SecurityDefinition {
  schemaName: string
  type: string // basic, apiKey, oauth2, oauth1, digest, x-other
  description: undefined | string
  authorization: undefined | string[] // implicit, password, application, accessCode
  authorizationUrl: undefined | string
  tokenUrl: undefined | string // tokenUrl - tokenCredentialsUri  - accessTokenUri
  scopes: undefined | SecurityScope[]
  describedBy: undefined | Method
  requestTokenUri: undefined | string
  displayName: undefined | string
  signatures: undefined | string[]
  _in: undefined | string
  name: undefined | string
}

export class SecurityRequirement {
  name: string;
  scopes: string[];
}

export class SecurityScope {
  value: string
  description: undefined | string
}

export class Tag {
  name: string
  description: undefined | string
  externalDocs: undefined | ExternalDocumentation
}

export class Trait {
  name: string
  usage: undefined | string
  method: undefined | Method
}

export default {
  Annotation,
  AnnotationType,
  BaseUri,
  Body,
  Definition,
  ExternalDocumentation,
  Header,
  Info,
  InfoData,
  Item,
  MediaType,
  Method,
  Parameter,
  Resource,
  ResourceType,
  Response,
  Root,
  SecurityDefinition,
  SecurityRequirement,
  SecurityScope,
  Tag,
  Trait
}
