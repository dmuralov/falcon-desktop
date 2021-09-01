declare const require: any;

export const environment = {
  production: true,
  version: require('../../package.json').version,
  releasesUrl: 'https://api.github.com/repos/falcon/falcon-desktop/releases/latest',
  envName: 'prod',
  marketVersion: require('../../node_modules/falcon-marketplace/package.json').version,
  falconHost: 'localhost',
  falconPort: 51935,
  marketHost: 'localhost',
  marketPort: 3000,
  isTesting: false
};
