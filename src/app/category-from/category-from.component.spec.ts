import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFromComponent } from './category-from.component';

describe('CategoryFromComponent', () => {
  let component: CategoryFromComponent;
  let fixture: ComponentFixture<CategoryFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
