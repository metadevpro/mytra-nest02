import { SetMetadata } from '@nestjs/common';
import { ERoles } from './roles.enum';

export const Roles = (...roles: ERoles[]) => SetMetadata('roles', roles);
