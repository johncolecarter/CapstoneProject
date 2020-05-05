import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenceComponent } from './fence.component';

describe('FenceComponent', () => {
  let component: FenceComponent;
  let fixture: ComponentFixture<FenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
