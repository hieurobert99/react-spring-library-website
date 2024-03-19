export const oktaConfig = {
    clientId: '0oafvj6v89XiMXPxG5d7',
    issuer: 'https://dev-36978487.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}