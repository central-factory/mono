module.exports = {
  name: 'nest-auth',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/nest-auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
