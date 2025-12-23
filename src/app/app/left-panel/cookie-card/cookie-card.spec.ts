import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieCard } from './cookie-card';

describe('CookieCard', () => {
  let component: CookieCard;
  let fixture: ComponentFixture<CookieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
