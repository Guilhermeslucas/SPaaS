import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcreationComponent } from './accountcreation.component';

describe('AccountcreationComponent', () => {
  let component: AccountcreationComponent;
  let fixture: ComponentFixture<AccountcreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountcreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
