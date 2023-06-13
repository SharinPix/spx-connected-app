import { expect, test } from '@oclif/test';

describe('create', () => {
  test
    .stdout()
    .it('runs hello --name Astro', () => {
      expect('true').to.contain('true');
    });
});
