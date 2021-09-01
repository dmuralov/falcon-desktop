declare const require: any;

export const environment = {
  production: false,
  releasesUrl: 'https://api.github.com/repos/falcon/falcon-desktop/releases/latest',
  version: require('../../package.json').version,
  envName: 'docker2',
  falconHost: 'localhost',
  falconPort: 53935,
  marketVersion: 'UNKNOWN',
  marketHost: 'localhost',
  marketPort: 3200,
  isTesting: false
};
