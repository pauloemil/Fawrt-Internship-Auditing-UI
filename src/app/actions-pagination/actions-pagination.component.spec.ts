import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPaginationComponent } from './actions-pagination.component';

describe('ActionsPaginationComponent', () => {
  let component: ActionsPaginationComponent;
  let fixture: ComponentFixture<ActionsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
