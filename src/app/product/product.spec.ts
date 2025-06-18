import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHead } from './single-head';

describe('SingleHead', () => {
  let component: SingleHead;
  let fixture: ComponentFixture<SingleHead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleHead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
