import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayBidingComponent } from './oneway-biding.component';

describe('OnewayBidingComponent', () => {
  let component: OnewayBidingComponent;
  let fixture: ComponentFixture<OnewayBidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewayBidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewayBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
