export const XStatePropertiesDescriptor = {
  id: 'xstate',
  name: 'XState',
  label: 'XState',
  prefix: 'xstate',
  uri: 'https://xstate.js.org/',
  xml: {
    tagAlias: 'lowerCase'
  },
  associations: [],
  types: [
    {
      name: 'XStateMachine',
      extends: [
        'bpmn:Process'
      ],
      properties: [
        {
          name: 'context',
          description: 'The initial context (extended state) of the statechart',
          label : 'Initial Context',
          isAttr: true,
          type: 'String'
        },
      ]
    },
    {
      name: 'XStateNode',
      extends: [
        'bpmn:IntermediateThrowEvent'
      ],
      properties: [
        {
          name: 'entry',
          description: 'Entry actions (CSV)',
          label: 'Entry Actions',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'exit',
          description: 'Exit actions (CSV)',
          label: 'Exit Actions',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'activities',
          description: 'An activity is an action that occurs over time, and can be started and stopped (CSV)',
          label: 'Activities',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'invoke',
          description: 'An invocation is defined in a state nodes configuration with the invoke property',
          label: 'Invoke',
          isAttr: true,
          type: 'String'
        }
      ]
    },
    {
      name: 'XStateTransition',
      extends: [
        'bpmn:SequenceFlow'
      ],
      properties: [
        // {
        //   name: 'internal',
        //   description: 'An internal transition is one that does not exit its state node.',
        //   label: 'is Internal?',
        //   isAttr: true,
        //   type: 'Boolean'
        // },
        {
          name: 'actions',
          description: 'Actions are fire-and-forget "side effects". For a machine to be useful in a real-world application, side effects need to occur to make things happen in the real world, such as rendering to a screen. (CSV)',
          label : 'Actions',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'condType',
          description: 'Determines if a transition can occur given the state and the event',
          label : 'Guard',
          isAttr: true,
          type: 'String'
        },
        {
          name: 'condConfig',
          description: 'Sometimes, it is preferable to not only serialize state transitions in JSON, but guard logic as well',
          label : 'Guard Config',
          isAttr: true,
          type: 'String'
        },
      ]
    },
  ]
}
