# summary

Create an External Client Application.

# description

Creates an External Client Application in the target org via the Metadata API. Use this for OAuth 2.0 integrations with the modern ECA security model (e.g. callback URL, scopes, distribution state). Requires External Client Apps to be enabled in the org.

# examples

- <%= config.bin %> <%= command.id %> --username me@example.com --name MyECA
- <%= config.bin %> <%= command.id %> -u me@example.com -n MyECA -e admin@example.com -c "https://app.example.com/callback" -s "api,refresh_token"

# flags.name.summary

Developer name (and label) for the External Client Application.

# flags.username.summary

Username or alias of the target Salesforce org.

# flags.oauth-callback-url.summary

OAuth 2.0 redirect URI (callback URL) for the app.

# flags.email.summary

Contact email for the External Client Application.

# flags.scopes.summary

Comma-separated OAuth scopes (e.g. api, refresh_token, web).

# flags.namespace.summary

Namespace prefix for the External Client Application (e.g. for packaged apps).

# flags.distribution-state.summary

Whether the app is Local (org-only) or Packageable (deployable across orgs).

# flags.is-protected.summary

Whether the External Client Application is protected (managed package behavior).
