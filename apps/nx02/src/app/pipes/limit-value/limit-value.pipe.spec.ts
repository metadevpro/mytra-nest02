import { LimitValuePipe } from './limit-value.pipe';

describe('LimitValuePipe', () => {
  it('should be defined', () => {
    expect(new LimitValuePipe(20)).toBeDefined();
  });
});
