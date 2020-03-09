import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassExpComponent } from './class-exp.component';

describe('ClassExpComponent', () => {
  let component: ClassExpComponent;
  let fixture: ComponentFixture<ClassExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
