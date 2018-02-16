import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeNewComponent } from './trade-new.component';

describe('TradeNewComponent', () => {
  let component: TradeNewComponent;
  let fixture: ComponentFixture<TradeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
