import inherits from 'inherits';

import PropertiesActivator from 'bpmn-js-properties-panel/lib/PropertiesActivator';

// Require all properties you need from existing providers.
// In this case all available bpmn relevant properties without camunda extensions.
import processProps from 'bpmn-js-properties-panel/lib/provider/bpmn/parts/ProcessProps';
import eventProps from 'bpmn-js-properties-panel/lib/provider/bpmn/parts/EventProps';
import linkProps from 'bpmn-js-properties-panel/lib/provider/bpmn/parts/LinkProps';
import documentationProps from 'bpmn-js-properties-panel/lib/provider/bpmn/parts/DocumentationProps';
import idProps from 'bpmn-js-properties-panel/lib/provider/bpmn/parts/IdProps';
import nameProps from 'bpmn-js-properties-panel/lib/provider/bpmn/parts/NameProps';


// Require your custom property entries.
import loadProps from './loader';


// The general tab contains all bpmn relevant properties.
// The properties are organized in groups.
function createGeneralTabGroups(element, bpmnFactory, canvas, elementRegistry, translate) {

  const generalGroup = {
    id: 'general',
    label: 'General',
    entries: []
  };
  idProps(generalGroup, element, translate);
  nameProps(generalGroup, element, bpmnFactory, canvas, translate);
  processProps(generalGroup, element, translate);

  const detailsGroup = {
    id: 'details',
    label: 'Details',
    entries: []
  };
  linkProps(detailsGroup, element, translate);
  eventProps(detailsGroup, element, bpmnFactory, elementRegistry, translate);

  const documentationGroup = {
    id: 'documentation',
    label: 'Documentation',
    entries: []
  };

  documentationProps(documentationGroup, element, bpmnFactory, translate);

  return[
    generalGroup,
    detailsGroup,
    documentationGroup
  ];
}

// Create the custom tab
function createCustomTabGroups(element) {

  // Create a group called "PFS".
  const customGroup = {
    id: 'pfs',
    label: 'PFS',
    entries: []
  };

  // Add the spell props to the custom group.
  loadProps(customGroup, element);

  return [
    customGroup
  ];
}

export default function CustomPropertiesProvider(
    eventBus, bpmnFactory, canvas,
    elementRegistry, translate) {

  PropertiesActivator.call(this, eventBus);

  this.getTabs = function(element) {

    const generalTab = {
      id: 'general',
      label: 'General',
      groups: createGeneralTabGroups(element, bpmnFactory, canvas, elementRegistry, translate)
    };

    // The custom tab
    const customTab = {
      id: 'pfs',
      label: 'PFS',
      groups: createCustomTabGroups(element)
    };

    // Show general + custom tab
    return [
      generalTab,
      customTab
    ];
  };
}

inherits(CustomPropertiesProvider, PropertiesActivator);
