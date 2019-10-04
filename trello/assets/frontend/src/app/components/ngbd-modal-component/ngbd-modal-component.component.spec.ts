import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalComponentComponent } from './ngbd-modal-component.component';

describe('NgbdModalComponentComponent', () => {
  let component: NgbdModalComponentComponent;
  let fixture: ComponentFixture<NgbdModalComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdModalComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
