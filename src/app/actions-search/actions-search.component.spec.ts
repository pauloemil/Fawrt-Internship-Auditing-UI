import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsSearchComponent } from './actions-search.component';

describe('ActionsSearchComponent', () => {
  let component: ActionsSearchComponent;
  let fixture: ComponentFixture<ActionsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
