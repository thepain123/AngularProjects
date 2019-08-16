import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapBidingComponent } from './baitap-biding.component';

describe('BaitapBidingComponent', () => {
  let component: BaitapBidingComponent;
  let fixture: ComponentFixture<BaitapBidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapBidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
