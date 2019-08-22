import { IfNotEmptyDirective } from './shared/directives/if-not-empty.directive';

describe('IfNotEmptyDirective', () => {
  it('should create an instance', () => {
    const directive = new IfNotEmptyDirective();
    expect(directive).toBeTruthy();
  });
});
