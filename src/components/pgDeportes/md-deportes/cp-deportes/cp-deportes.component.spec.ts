import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpDeportesComponent } from './cp-deportes.component';

describe('CpDeportesComponent', () => {
  let component: CpDeportesComponent;
  let fixture: ComponentFixture<CpDeportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpDeportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
