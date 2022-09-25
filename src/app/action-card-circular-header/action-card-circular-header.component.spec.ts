import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCardCircularHeaderComponent } from './action-card-circular-header.component';

describe('ActionCardCircularHeaderComponent', () => {
  let component: ActionCardCircularHeaderComponent;
  let fixture: ComponentFixture<ActionCardCircularHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCardCircularHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionCardCircularHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
