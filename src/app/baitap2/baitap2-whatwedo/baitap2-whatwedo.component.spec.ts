import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2WhatwedoComponent } from './baitap2-whatwedo.component';

describe('Baitap2WhatwedoComponent', () => {
  let component: Baitap2WhatwedoComponent;
  let fixture: ComponentFixture<Baitap2WhatwedoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2WhatwedoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2WhatwedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
