import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeBarComponent } from './awesome-bar.component';

describe('AwesomeBarComponent', () => {
  let component: AwesomeBarComponent;
  let fixture: ComponentFixture<AwesomeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
