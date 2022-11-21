import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpAmanteComponent } from './cp-amante.component';

describe('CpAmanteComponent', () => {
  let component: CpAmanteComponent;
  let fixture: ComponentFixture<CpAmanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpAmanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpAmanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
