import { expect, test } from '@oclif/test';

describe('list', () => {
  test
    .stdout()
    .it('runs hello --name Astro --username kevan@dev.co', () => {
      expect('a').to.contain('a');
    });
});
