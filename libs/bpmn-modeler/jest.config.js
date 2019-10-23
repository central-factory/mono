module.exports = {
  name: 'bpmn-modeler',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bpmn-modeler',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
