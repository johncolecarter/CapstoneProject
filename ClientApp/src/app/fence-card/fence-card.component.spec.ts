import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenceCardComponent } from './fence-card.component';

describe('FenceCardComponent', () => {
  let component: FenceCardComponent;
  let fixture: ComponentFixture<FenceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
