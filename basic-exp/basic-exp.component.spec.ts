import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExpComponent } from './basic-exp.component';

describe('BasicExpComponent', () => {
  let component: BasicExpComponent;
  let fixture: ComponentFixture<BasicExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
