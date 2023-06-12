import { execCmd, TestSession } from '@salesforce/cli-plugins-testkit';

describe('list NUTs', () => {
  let session: TestSession;

  before(async () => {
    session = await TestSession.create({ devhubAuthStrategy: 'NONE' });
  });

  after(async () => {
    await session?.clean();
  });

  it('should display provided name', () => {
    const name = 'World';
    const command = `list --name ${name}`;
    execCmd(command, { ensureExitCode: 0 });
  });
});
