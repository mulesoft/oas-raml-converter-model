import {Type} from "serializer.ts/Decorators";

export class Annotation {
  name: string
  @Type(() => Definition)
  definition: Definition | any
  @Type(() => Annotation)
  annotations: undefined | Annotation[]
}

export class AnnotationType {
  name: string
  displayName: undefined | string
  description: undefined | string
  allowedTargets: undefined | string[]
  @Type(() => Definition)
  definition: Definition
  required: undefined | boolean
}

export class BaseUri {
  host: undefined | string;
  basePath: undefined | string;
  protocol: undefined | string;
  uri: undefined | string;
  @Type(() => Annotation)
  annotations: undefined | Annotation[];
}

export class Body {
  mimeType: undefined | string;
  name: string;
  @Type(() => Definition)
  definition: undefined | Definition;
  description: undefined | string;
  required: undefined | boolean;
  hasParams: undefined | boolean;
  @Type(() => Annotation)
  annotations: undefined | Annotation[];
}

export class Definition {
  name: string;
  type: undefined | string;
  internalType: undefined | string;
  @Type(() => Definition)
  compositionType: undefined | Definition[];
  reference: undefined | string;
  fileReference: undefined | string;
  @Type(() => Definition)
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
  @Type(() => Definition)
  items: undefined | Definition;
  @Type(() => Definition)
  itemsList: undefined | Definition[];
  @Type(() => Definition)
  additionalProperties: undefined | (boolean | Definition);
  discriminator: undefined | string;
  xml: undefined | string;
  example: undefined | any;
  definitions: undefined | any;
  @Type(() => Annotation)
  annotations: undefined | Annotation[];

  jsonValue: undefined | string;
  fileTypes: undefined | string[];
  discriminatorValue: undefined | any;
  facets: undefined | any[]; //swagger extension
  examples: undefined | any;
  @Type(() => Definition)
  schema: undefined | Definition;
  schemaPath: undefined | string;
  displayName: undefined | string;
  collectionFormat: undefined | string;
  allowEmptyValue: undefined | boolean;

  allOf: undefined | any[];
  exclusiveMaximum: undefined | boolean;
  exclusiveMinimum: undefined | boolean;
  readOnly: undefined | boolean;
  @Type(() => ExternalDocumentation)
  externalDocs: undefined | ExternalDocumentation;
  title: undefined | string;
  invalidJsonExample: undefined | boolean;

  error: undefined | any
  warning: undefined | any

  expanded: undefined | boolean

}

export class ExternalDocumentation {
  url: undefined | string;
  description: undefined | string;
  @Type(() => Annotation)
  annotations: undefined | Annotation[];
}

export class Header {
  _in: undefined | string;
  name: string;
  @Type(() => Definition)
  definition: undefined | Definition;
  description: undefined | string;
  required: undefined | boolean;
  @Type(() => Annotation)
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
  @Type(() => InfoData)
  contact: undefined | InfoData
  @Type(() => InfoData)
  license: undefined | InfoData
  @Type(() => Annotation)
  annotations: undefined | Annotation[]
}

export class InfoData {
  name: undefined | string
  url: undefined | string
  email: undefined | string
  @Type(() => Annotation)
  annotations: undefined | Annotation[]
}

export class Item {
  name: string
  value: undefined | any

  error: undefined | any
  warning: undefined | any
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
  @Type(() => Parameter)
  parameters: undefined | Parameter[] // query parameters
  @Type(() => Response)
  responses: undefined | Response[]
  name: undefined | string // displayName / operationId
  @Type(() => Header)
  headers: undefined | Header[]
  @Type(() => Body)
  bodies: undefined | Body[]
  @Type(() => Body)
  formBodies: undefined | Body[]
  @Type(() => Item)
  is: undefined | Item[]
  produces: undefined | string[]
  consumes: undefined | string[]
  @Type(() => Annotation)
  annotations: undefined | Annotation[]
  @Type(() => SecurityRequirement)
  securedBy: undefined | SecurityRequirement[]
  tags: undefined | string[]
  summary: undefined | string
  @Type(() => ExternalDocumentation)
  externalDocs: undefined | ExternalDocumentation
  protocols: undefined | string[]
  @Type(() => Parameter)
  queryStrings: undefined | Parameter[]
  deprecated: undefined | boolean
}

export class Parameter {
  _in: undefined | string
  name: string
  @Type(() => Definition)
  definition: undefined | Definition
  displayName: undefined | string
  description: undefined | string
  required: undefined | boolean
  hasParams: undefined | boolean
  reference: undefined | string
  @Type(() => Annotation)
  annotations: undefined | Annotation[]
}

export class Resource {
  path: undefined | string
  relativePath: undefined | string
  description: undefined | string
  displayName: undefined | string
  @Type(() => Item)
  is: undefined | Item[]
  @Type(() => Parameter)
  parameters: undefined | Parameter[]
  @Type(() => Parameter)
  baseUriParameters: undefined | Parameter[]
  @Type(() => Item)
  resourceType: undefined | Item[]
  @Type(() => Method)
  methods: undefined | Method[]
  @Type(() => SecurityRequirement)
  securedBy: undefined | SecurityRequirement[]
  @Type(() => Annotation)
  annotations: undefined | Annotation[]
  @Type(() => Resource)
  resources: undefined | Resource[]

  error: undefined | any
  warning: undefined | any
}

export class ResourceType {
  name: string
  usage: undefined | string
  @Type(() => Resource)
  resource: undefined | Resource
}

export class Response {
  httpStatusCode: undefined | string
  name: undefined | string
  description: undefined | string
  @Type(() => Header)
  headers: undefined | Header[]
  @Type(() => Body)
  bodies: undefined | Body[]
  reference: undefined | string
  hasParams: undefined | boolean
  globalResponseDefinition: undefined | string
  @Type(() => Annotation)
  annotations: undefined | Annotation[]
}

export class Root {
  info: Info
  protocols: undefined | string[]
  @Type(() => BaseUri)
  baseUri: undefined | BaseUri
  @Type(() => MediaType)
  mediaType: undefined | MediaType
  @Type(() => SecurityDefinition)
  securityDefinitions: undefined | SecurityDefinition[]
  @Type(() => Resource)
  resources: undefined | Resource[]
  @Type(() => Definition)
  types: undefined | Definition[]
  @Type(() => Tag)
  tags: undefined | Tag[]
  @Type(() => ExternalDocumentation)
  externalDocs: undefined | ExternalDocumentation
  @Type(() => Item)
  documentation: undefined | Item[]
  @Type(() => Parameter)
  baseUriParameters: undefined | Parameter[]
  @Type(() => ResourceType)
  resourceTypes: undefined | ResourceType[]
  @Type(() => Trait)
  traits: undefined | Trait[]
  @Type(() => AnnotationType)
  annotationTypes: undefined | AnnotationType[]
  @Type(() => Annotation)
  annotations: undefined | Annotation[]
  @Type(() => Resource)
  resourceAnnotations: undefined | Resource
  @Type(() => Response)
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
  @Type(() => SecurityScope)
  scopes: undefined | SecurityScope[]
  @Type(() => Method)
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
  @Type(() => ExternalDocumentation)
  externalDocs: undefined | ExternalDocumentation
}

export class Trait {
  name: string
  usage: undefined | string
  @Type(() => Method)
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
