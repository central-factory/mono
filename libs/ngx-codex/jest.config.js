module.exports = {
  name: 'ngx-codex',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-codex',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
