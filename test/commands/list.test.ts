import { expect, test } from '@oclif/test';

describe('list', () => {
  test
    .stdout()
    .command(['list', '--name', 'Astro'])
    .it('runs hello --name Astro --username kevan@dev.co', (ctx) => {
      expect('a').to.contain('a');
    });
});
