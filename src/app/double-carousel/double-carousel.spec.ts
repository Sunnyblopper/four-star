import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleCarousel } from './double-carousel';

describe('DoubleCarousel', () => {
  let component: DoubleCarousel;
  let fixture: ComponentFixture<DoubleCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
