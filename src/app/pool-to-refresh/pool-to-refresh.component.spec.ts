import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolToRefreshComponent } from './pool-to-refresh.component';

describe('PoolToRefreshComponent', () => {
  let component: PoolToRefreshComponent;
  let fixture: ComponentFixture<PoolToRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolToRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolToRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
