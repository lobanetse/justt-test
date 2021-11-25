export const SWAGGER_API_ROOT = 'api/docs';
export const SWAGGER_API_NAME = 'Service API';
export const SWAGGER_API_DESCRIPTION = 'Service API Description';
export const SWAGGER_API_CURRENT_VERSION = '1.0';

export enum Tags {
  customer = 'Customer',
  transaction = 'Transaction',
}

export const TagsDescription = {
  [Tags.customer]: 'Customer description',
  [Tags.transaction]: 'Transaction description',
};
