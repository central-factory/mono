
import { xml2js } from 'xml-js';

export const bpmn2xstate = (
  content: string
) => {
  const {
    'bpmn:definitions': definitions
  } = xml2js(content, {
    compact: true
  }) as any;

  const machine = definitions['bpmn:process'];

  const machineAttributes = machine._attributes;
  const startEvent = machine['bpmn:startEvent'];
  const machineNodes = machine['bpmn:intermediateThrowEvent'].map(node => node._attributes );
  const machineTransitions = machine['bpmn:sequenceFlow'].map(trans => trans._attributes );

  const getNode = (nameOrId: string) => {
    const nodeRes = machineNodes.find(
      node => node.id === nameOrId || node.name === nameOrId
    );

    return {
      name: nodeRes.name || nodeRes.id,
      id: nodeRes.id
    }
  }

  const transitionsFromNode = (node) => {
    return machineTransitions.filter(
      transition => transition.sourceRef === node
    ).reduce(
      (result, transition) => {

        const transitionResult: any =  {
          target: getNode(transition.targetRef).name,
        };

        if (transition['xstate:actions']) {
          transitionResult.actions = transition['xstate:actions'].split(',')
        }

        if (transition['xstate:condType']) {
          const condConfig = transition['xstate:condConfig'] ? JSON.parse(transition['xstate:condConfig']) : {};

          transitionResult.cond = {
            type: transition['xstate:condType'],
            ...condConfig
          }
        }

        return {
          [transition.name || transition.id]: transitionResult,
          ...result
        }
      }, {}
    )
  }

  const machineInitialState = getNode(machineTransitions.find(
    transition => transition.id === startEvent['bpmn:outgoing']._text
  ).targetRef);

  const machineConfig = {
    id: machineAttributes.id,
    initial: machineInitialState.name,
    context: JSON.parse(machineAttributes['xstate:context']),
    states: machineNodes.reduce(
      (result, node) => {

        const nodeTransitions = transitionsFromNode(node.id);

        const nodeResult: any = {};

        if (node['xstate:entry']) {
          nodeResult.entry = node['xstate:entry'].split(',');
        }

        if (node['xstate:exit']) {
          nodeResult.exit = node['xstate:exit'].split(',');
        }

        if (node['xstate:activities']) {
          nodeResult.activities = node['xstate:activities'].split(',');
        }

        if (node['xstate:invoke']) {
          nodeResult.invoke =  JSON.parse(node['xstate:invoke']);
        }

        if (Object.keys(nodeTransitions).length > 0 ){
          nodeResult.on = nodeTransitions;
        }

        return {
          [node.name || node.id]: nodeResult,
          ...result
        };
      }, {}
    )
  }

  return machineConfig;
}
