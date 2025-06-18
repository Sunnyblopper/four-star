import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexJoin } from './index-join';

describe('IndexJoin', () => {
  let component: IndexJoin;
  let fixture: ComponentFixture<IndexJoin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexJoin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexJoin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
