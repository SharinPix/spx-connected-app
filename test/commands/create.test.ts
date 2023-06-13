import { expect, test } from '@oclif/test';

describe('create', () => {
  test
    .stdout()
    .command(['create'])
    .it('runs hello', (ctx) => {
      expect(ctx.stdout).to.contain('hello world');
    });

  test
    .stdout()
    .command(['create', '--name', 'Astro'])
    .it('runs hello --name Astro', (ctx) => {
      expect(ctx.stdout).to.contain('hello Astro');
    });
});
