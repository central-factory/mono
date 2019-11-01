
import Delimiter from '@editorjs/delimiter';
import Attaches from '@editorjs/attaches';
import Header from '@editorjs/header';
import Warning from '@editorjs/warning';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';
import Image from '@editorjs/image';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Code from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import Paragraph from '@editorjs/paragraph';
import Raw from '@editorjs/raw';

import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { BPMNModelerComponent } from '@central-factory/ngx-bpmn-modeler';
import customPropertiesDescriptor from './properties-descriptor';

import { BPMNTool } from './bpmn.tool';


export const getCodexTools = (
  factoryResolver: ComponentFactoryResolver,
  viewContainerRef: ViewContainerRef,
) => ({
  bpmn: {
    class: BPMNTool,
    config: {
      getFactoryResolver: () => factoryResolver,
      getContainerRef: () => viewContainerRef,
      component: BPMNModelerComponent,
      inputs: {
        propertiesDescriptor: customPropertiesDescriptor,
        wrapperClass: 'bpmn-wrapper',
        containerClass: 'bpmn-container',
        propertiesClass: 'bpmn-properties'
      }
    }
  },
  raw: {
    class: Raw
  },
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  delimiter: {
    class: Delimiter
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+W',
    config: {
      titlePlaceholder: 'Title',
      messagePlaceholder: 'Message',
    },
  },
  code: {
    class: Code,
  },
  attaches: {
    class: Attaches,
    config: {
      endpoint: 'http://localhost:8008/uploadFile'
    }
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  inlineCode: {
    class: InlineCode,
    shortcut: 'CMD+SHIFT+C',
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+O',
    config: {
      quotePlaceholder: 'Enter a quote',
      captionPlaceholder: 'Quote\'s author',
    },
  },
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  embed: {
    class: Embed,
    config: {
      services: {
        imgur: true,
        codepen: true,
        gfycat: true,
        'twitch-channel': true,
        'twitch-video': true,
        vimeo: true,
        youtube: true,
        coub: true
      }
    }
  },
  simpleImage: {
    class: SimpleImage
  },
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
        byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
      }
    }
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  marker: {
    class: Marker,
    shortcut: 'CMD+SHIFT+M',
  },
  header: {
    class: Header,
    shortcut: 'CMD+SHIFT+H',
    config: {
      placeholder: 'Enter a header'
    }
  }
});
