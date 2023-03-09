import { SetMetadata } from '@nestjs/common';

export const OperationId = (operationId: string) =>
  SetMetadata('operationId', operationId);
