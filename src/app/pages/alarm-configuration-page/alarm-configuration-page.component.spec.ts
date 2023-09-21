import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmConfigurationPageComponent } from './alarm-configuration-page.component';

describe('AlarmConfigurationPageComponent', () => {
  let component: AlarmConfigurationPageComponent;
  let fixture: ComponentFixture<AlarmConfigurationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmConfigurationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmConfigurationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
