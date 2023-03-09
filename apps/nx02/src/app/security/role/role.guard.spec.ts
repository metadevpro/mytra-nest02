import { Reflector } from '@nestjs/core';
import { ERoles } from '../roles.enum';
import { RoleGuard, matchRoles } from './role.guard';

describe('RoleGuard', () => {
  it('should be defined', () => {
    expect(new RoleGuard({} as Reflector)).toBeDefined();
  });
});

describe('matchRoles', () => {
  it('should return false if there are no endpoint roles', () => {
    expect(matchRoles([], ['a', 'b', 'c'])).toBe(false);
  });
  it('should return false if endpoint has roles and users nas no match', () => {
    expect(matchRoles([ERoles.Admin], ['a', 'b', 'c'])).toBe(false);
  });
  it('should return true if endpoint has roles and users has a role matching', () => {
    expect(
      matchRoles([ERoles.Admin, ERoles.Finance], ['a', 'b', 'Finance'])
    ).toBe(true);
  });
});
