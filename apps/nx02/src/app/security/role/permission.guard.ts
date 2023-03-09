import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PermissionService } from '../permission.service';

interface Permission {
  /**  /admin/copmpany */
  route: string;
  /** get post head */
  method: 'get' | 'put' | 'post' | 'delete' | 'head';
}

interface User {
  name: string;
  permissions: Permission[];
}

/**
 * User.permissions:   ruta metodo
 */
@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private permissionService: PermissionService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const operationId = this.reflector.get<string>(
      'operationId',
      context.getHandler()
    );
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return await this.permissionService.checkAccess(user.name, operationId);
  }
}
