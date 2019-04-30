import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeBoxComponent } from './awesome-box.component';

describe('AwesomeBoxComponent', () => {
  let component: AwesomeBoxComponent;
  let fixture: ComponentFixture<AwesomeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
