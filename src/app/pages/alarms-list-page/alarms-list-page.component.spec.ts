import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsListPageComponent } from './alarms-list-page.component';

describe('AlarmsListPageComponent', () => {
  let component: AlarmsListPageComponent;
  let fixture: ComponentFixture<AlarmsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
