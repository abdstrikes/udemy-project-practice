import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirectivesDemoComponent } from './struct-directives-demo.component';

describe('StructDirectivesDemoComponent', () => {
  let component: StructDirectivesDemoComponent;
  let fixture: ComponentFixture<StructDirectivesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructDirectivesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructDirectivesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
