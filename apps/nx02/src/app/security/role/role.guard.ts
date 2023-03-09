import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ERoles } from '../roles.enum';

/**
 * User.roles: string[]
 */
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const endpointRoles = this.reflector.get<ERoles[]>(
      'roles',
      context.getHandler()
    );
    if (!endpointRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      return false;
    }

    return matchRoles(endpointRoles, user.roles || []);
  }
}

export const matchRoles = (
  endPointRoles: ERoles[],
  userRoles: string[]
): boolean => {
  const found = endPointRoles.find((re) =>
    userRoles.find((r) => r === re.toString())
  );
  return !!found;
};
