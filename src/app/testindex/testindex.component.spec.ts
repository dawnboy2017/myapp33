import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTabBarBasicComponent } from './testindex.component';

describe('TestindexComponent', () => {
  let component: DemoTabBarBasicComponent;
  let fixture: ComponentFixture<DemoTabBarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTabBarBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTabBarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
