export class Annotation {
  name: string
  definition: Definition | any
  annotations?: Annotation[]
}

export class AnnotationType {
  name: string
  displayName?: string
  description?: string
  allowedTargets?: string[]
  definition: Definition
  required?: boolean
}

export class BaseUri {
  host?: string;
  basePath?: string;
  protocol?: string;
  uri?: string;
  annotations?: Annotation[];
}

export class Body {
  mimeType?: string;
  name: string;
  definition?: Definition;
  description?: string;
  required?: boolean;
  hasParams?: boolean;
  annotations?: Annotation[];
}

export class Definition {
  name: string;
  type?: string;
  internalType?: string;
  compositionType?: Definition[];
  reference?: string;
  fileReference?: string;
  properties?: Definition[];
  propsRequired?: string[];
  required?: boolean;
  format?: string;
  description?: string;
  _default?: any;
  multipleOf?: number;
  maximum?: number;
  minimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  _enum?: string[];
  items?: Definition;
  itemsList?: Definition[];
  additionalProperties?: (boolean|Definition);
  discriminator?: string;
  xml?: string;
  example?: any;
  definitions?: any;
  annotations?: Annotation[];

  jsonValue?: string;
  fileTypes?: string;
  discriminatorValue?: any;
  facets?: any[]; //swagger extension
  examples?: any;
  schema?: Definition;
  schemaPath?: string;
  displayName?: string;
  collectionFormat?: string;
  allowEmptyValue?: boolean;

  allOf?: any[];
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  readOnly?: boolean;
  externalDocs?: ExternalDocumentation;
  title?: string;
  invalidJsonExample?: boolean;
}

export class ExternalDocumentation {
  url?: string;
  description?: string;
  annotations?: Annotation[];
}

export class Header {
  _in?: string;
  name: string;
  definition?: Definition;
  description?: string;
  required?: boolean;
  annotations?: Annotation[];
  hasParams?: boolean;
  displayName?: string;
  reference?: string;
}

export class Info {
  title: string
  description?: string
  version?: (string | number)
  termsOfService?: string
  contact?: InfoData
  license?: InfoData
  annotations?: Annotation[]
}

export class InfoData {
  name?: string
  url?: string
  email?: string
  annotations?: Annotation[]
}

export class Item {
  name: string
  value?: any
}

export class MediaType {
  mimeTypes: string[] // consumes + produces
  consumes?: string[]
  produces?: string[]
}

export class Method {
  method: string // get, put, post, delete, options, head, patch
  description?: string
  path?: string
  parameters?: Parameter[] // query parameters
  responses?: Response[]
  name?: string // displayName / operationId
  headers?: Header[]
  bodies?: Body[]
  formBodies?: Body[]
  is?: Item[]
  produces?: string[]
  consumes?: string[]
  annotations?: Annotation[]
  securedBy?: SecurityRequirement[]
  tags?: string[]
  summary?: string
  externalDocs?: ExternalDocumentation
  protocols?: string[]
  queryStrings?: Parameter[]
  deprecated?: boolean
}

export class Parameter {
  _in?: string
  name: string
  definition?: Definition
  displayName?: string
  description?: string
  required?: boolean
  hasParams?: boolean
  reference?: string
  annotations?: Annotation[]
}

export class Resource {
  path?: string
  relativePath?: string
  description?: string
  displayName?: string
  is?: Item[]
  parameters?: Parameter[]
  baseUriParameters?: Parameter[]
  resourceType?: Item[]
  methods?: Method[]
  securedBy?: SecurityRequirement[]
  annotations?: Annotation[]
  resources?: Resource[]
}

export class ResourceType {
  name: string
  usage?: string
  resource?: Resource
}

export class Response {
  httpStatusCode?: string
  name?: string
  description?: string
  headers?: Header[]
  bodies?: Body[]
  reference?: string
  hasParams?: boolean
  globalResponseDefinition?: string
  annotations?: Annotation[]
}

export class Root {
  info: Info
  protocols?: string[]
  baseUri?: BaseUri
  mediaType?: MediaType
  securityDefinitions?: SecurityDefinition[]
  resources?: Resource[]
  types?: Definition[]
  tags?: Tag[]
  externalDocs?: ExternalDocumentation
  documentation?: Item[]
  baseUriParameters?: Parameter[]
  resourceTypes?: ResourceType[]
  traits?: Trait[]
  annotationTypes?: AnnotationType[]
  annotations?: Annotation[]
  resourceAnnotations?: Resource
  responses?: Response[]
}

export class SecurityDefinition {
  schemaName: string
  type: string // basic, apiKey, oauth2, oauth1, digest, x-other
  description?: string
  authorization?: string[] // implicit, password, application, accessCode
  authorizationUrl?: string
  tokenUrl?: string // tokenUrl - tokenCredentialsUri  - accessTokenUri
  scopes?: SecurityScope[]
  describedBy?: Method
  requestTokenUri?: string
  displayName?: string
  signatures?: string[]
  _in?: string
  name?: string
}

export class SecurityRequirement {
  name: string;
  scopes: string[];
}

export class SecurityScope {
  value: string
  description?: string
}

export class Tag {
  name: string
  description?: string
  externalDocs?: ExternalDocumentation
}

export class Trait {
  name: string
  usage?: string
  method?: Method
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
