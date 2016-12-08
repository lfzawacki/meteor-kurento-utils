Package.describe({
  name: 'lfzawacki:kurento-utils',
  version: '0.0.3',
  summary: "Wrapper for Kurento's kurento-utils package.",
  git: 'https://github.com/hunternet93/meteor-kurento-utils',
  documentation: 'README.md'
});

Npm.depends({
  'uuid': '2.0.1',
  'kurento-browser-extensions': '0.0.2',
  'kurento-utils': '6.6.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['cosmos:browserify@0.2.0'], 'client');
  api.addFiles(['kurento-utils.browserify.js'], 'client');
  api.export('WebRtcPeer', 'client');
});
