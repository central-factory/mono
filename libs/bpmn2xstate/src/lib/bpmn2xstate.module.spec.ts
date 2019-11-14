import { async, TestBed } from '@angular/core/testing';
import { Bpmn2XStateModule } from './bpmn2xstate.module';

describe('Bpmn2XStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Bpmn2XStateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Bpmn2XStateModule).toBeDefined();
  });
});
