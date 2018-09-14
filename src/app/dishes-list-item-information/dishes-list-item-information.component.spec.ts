import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesListItemInformationComponent } from './dishes-list-item-information.component';

describe('DishesListItemInformationComponent', () => {
  let component: DishesListItemInformationComponent;
  let fixture: ComponentFixture<DishesListItemInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesListItemInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesListItemInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
