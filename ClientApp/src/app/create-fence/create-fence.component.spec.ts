import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFenceComponent } from './create-fence.component';

describe('CreateFenceComponent', () => {
  let component: CreateFenceComponent;
  let fixture: ComponentFixture<CreateFenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
