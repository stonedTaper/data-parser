export type DataType = 'string' | 'number' | 'boolean' | 'date' | 'object' | 'array';

export interface FieldDefinition {
  name: string;
  type: DataType;
  required?: boolean;
  defaultValue?: unknown;
  validator?: (value: unknown) => boolean;
}

export interface ParserOptions {
  strictMode?: boolean;
  allowUnknownFields?: boolean;
  dateFormat?: string;
}

export interface ParseResult<T> {
  data: T;
  errors: FieldError[];
  isValid: boolean;
}

export interface FieldError {
  field: string;
  message: string;
  receivedValue?: unknown;
  expectedType?: DataType;
}

export type DataRecord = Record<string, unknown>;

export type SchemaDefinition = Record<string, FieldDefinition>;