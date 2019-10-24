export default {
  id: 'pfs',
  name: 'PFS',
  label: 'PFS',
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
          description: 'Determines if a transition can occur given the state and the event',
          label : 'Guards (pfs:cond)',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'screens',
          description : 'Screens to show. Useful for retrieving context or asking confirmation',
          label : 'Screens (pfs:screens)',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'actions',
          description : 'Actions are fire-and-forget "side effects". For a machine to be useful in a real-world application, side effects need to occur to make things happen in the real world, such as rendering to a screen.',
          label : 'Actions (pfs:actions)',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'theme',
          description : 'Determines the color of the transition for drawing purposes',
          label : 'Theme (pfs:theme)',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'icon',
          description : 'Determines the icon of the transition for drawing purposes',
          label : 'Icon (pfs:icon)',
          isAttr: true,
          type: 'String'
        },
      ]
    },
  ]
}
