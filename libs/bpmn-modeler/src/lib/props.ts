import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';


export default function(group, element) {

  // Only return an entry, if the currently selected
  // element is a start event.
  const options = [
    {
      id : 'cond',
      description : 'Determines if a transition can occur given the state and the event',
      label : 'Guards (pfs:cond)',
      modelProperty : 'cond'
    },
    {
      id : 'screens',
      // tslint:disable-next-line: max-line-length
      description : 'Screens to show. Useful for retrieving context or asking confirmation',
      label : 'Screens (pfs:screens)',
      modelProperty : 'screens'
    },
    {
      id : 'actions',
      // tslint:disable-next-line: max-line-length
      description : 'Actions are fire-and-forget "side effects". For a machine to be useful in a real-world application, side effects need to occur to make things happen in the real world, such as rendering to a screen.',
      label : 'Actions (pfs:actions)',
      modelProperty : 'actions'
    },
    {
      id : 'theme',
      description : 'Determines the color of the transition for drawing purposes',
      label : 'Theme (pfs:theme)',
      modelProperty : 'theme'
    },
    {
      id : 'icon',
      description : 'Determines the icon of the transition for drawing purposes',
      label : 'Icon (pfs:icon)',
      modelProperty : 'icon'
    },
  ];

  if (is(element, 'bpmn:SequenceFlow')) {
    options.forEach(
      option => group.entries.push(entryFactory.textField(option))
    )
  }
}
