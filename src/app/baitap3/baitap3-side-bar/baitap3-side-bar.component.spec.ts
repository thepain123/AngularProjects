import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap3SideBarComponent } from './baitap3-side-bar.component';

describe('Baitap3SideBarComponent', () => {
  let component: Baitap3SideBarComponent;
  let fixture: ComponentFixture<Baitap3SideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap3SideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap3SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
