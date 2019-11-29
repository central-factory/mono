module.exports = {
  name: 'ngx-bpmn-modeler',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ngx-bpmn-modeler',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
