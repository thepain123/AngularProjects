import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayBidingComponent } from './twoway-biding.component';

describe('TwowayBidingComponent', () => {
  let component: TwowayBidingComponent;
  let fixture: ComponentFixture<TwowayBidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowayBidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
