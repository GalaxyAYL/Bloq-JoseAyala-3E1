import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpColegiosComponent } from './cp-colegios.component';

describe('CpColegiosComponent', () => {
  let component: CpColegiosComponent;
  let fixture: ComponentFixture<CpColegiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpColegiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpColegiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
