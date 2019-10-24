import entryFactory from 'bpmn-js-properties-panel/lib/factory/EntryFactory';

import {
  is
} from 'bpmn-js/lib/util/ModelUtil';

export function loadPropertiesFromDescriptor(group, element, descriptor) {
  descriptor.types.forEach(
    (description) => {
      const types = [].concat(description.extends, descriptor.name);

      const options = description.properties.map(
        prop => ({
          id: prop.name,
          description: prop.description,
          label: prop.label,
          modelProperty: prop.name
        })
      );

      const matches = types.some(type => is(element, type));

      if (!matches) {
        return;
      }

      options.forEach(
        option => group.entries.push(entryFactory.textField(option))
      );
    }
  );
}
