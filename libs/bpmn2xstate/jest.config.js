module.exports = {
  name: 'bpmn2xstate',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bpmn2xstate',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
