import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPasswordPageComponent } from './user-password-page.component';

describe('UserPasswordPageComponent', () => {
  let component: UserPasswordPageComponent;
  let fixture: ComponentFixture<UserPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPasswordPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
