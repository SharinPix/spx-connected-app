import { SfCommand, Flags } from '@salesforce/sf-plugins-core';
import { Messages, AuthInfo, Connection } from '@salesforce/core';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('spx-connected-app', 'connected.list');

export type ConnectedAppResult = { fullName: string };

export default class ConnectedAppList extends SfCommand<ConnectedAppResult> {
  public static readonly summary = messages.getMessage('summary');
  public static readonly description = messages.getMessage('description');
  public static readonly examples = messages.getMessages('examples');

  public static readonly flags = {
    name: Flags.string({
      summary: messages.getMessage('flags.name.summary'),
      char: 'n',
      required: true,
    }),
    username: Flags.string({
      summary: messages.getMessage('flags.username.summary'),
      char: 'u',
      required: false,
    }),
  };

  public async run(): Promise<ConnectedAppResult> {
    // parse the provided flags
    const { flags } = await this.parse(ConnectedAppList);

    this.log(`Connecting to ${flags.username}...`);

    // Initialize the authorization for the provided username
    const authInfo = await AuthInfo.create({ username: flags.username });

    // Create a connection to the org
    const connection = await Connection.create({ authInfo });
    this.log(`Connected to ${flags.username} (${authInfo.getFields().orgId}) with API version ${connection.version}`);

    const metadatas = (await connection.metadata.read('ConnectedApp', flags.name)) as ConnectedAppResult;
    this.log(JSON.stringify(metadatas));

    // Use the connection to execute a SOQL query against the org
    return metadatas;
  }
}
