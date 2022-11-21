import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpPrincipalComponent } from './cp-principal.component';

describe('CpPrincipalComponent', () => {
  let component: CpPrincipalComponent;
  let fixture: ComponentFixture<CpPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
