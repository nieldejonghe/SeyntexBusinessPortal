import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroodjesComponent } from './broodjes.component';

describe('BroodjesComponent', () => {
  let component: BroodjesComponent;
  let fixture: ComponentFixture<BroodjesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroodjesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroodjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
