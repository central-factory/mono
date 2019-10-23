export default {
  name: 'PFS',
  prefix: 'pfs',
  uri: 'http://pfs',
  xml: {
    tagAlias: 'lowerCase'
  },
  associations: [],
  types: [
    {
      name: 'BewitchedSequenceFlow',
      extends: [
        'bpmn:SequenceFlow'
      ],
      properties: [
        {
          name: 'cond',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'screens',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'actions',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'theme',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'icon',
          isAttr: true,
          type: 'String'
        },
      ]
    },
  ]
}
