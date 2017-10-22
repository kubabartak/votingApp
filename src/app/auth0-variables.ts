interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'jL33MaN2viNluCu57QTEWJyCx7rcX5G7',
  CLIENT_DOMAIN: 'voting.eu.auth0.com',
  AUDIENCE: 'https://voting.eu.auth0.com/api/v2/',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid profile'
};