import { async, TestBed } from '@angular/core/testing';
import { BpmnModelerModule } from './bpmn-modeler.module';

describe('BpmnModelerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BpmnModelerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BpmnModelerModule).toBeDefined();
  });
});
