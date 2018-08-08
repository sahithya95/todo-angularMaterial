import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneContainerComponent } from './done-container.component';

describe('DoneContainerComponent', () => {
  let component: DoneContainerComponent;
  let fixture: ComponentFixture<DoneContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
