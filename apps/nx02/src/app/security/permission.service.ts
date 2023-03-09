import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionService {
  constructor() {
    // private repo: repoPermission
  }

  async checkAccess(userName: string, operationId: string): Promise<boolean> {
    // const permissions = await this.repo.getPermissionFor(userName);
    return true;
  }
}
