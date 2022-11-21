import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpGustosComponent } from './cp-gustos.component';

describe('CpGustosComponent', () => {
  let component: CpGustosComponent;
  let fixture: ComponentFixture<CpGustosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpGustosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpGustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
