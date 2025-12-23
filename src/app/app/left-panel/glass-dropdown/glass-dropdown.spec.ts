import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassDropdown } from './glass-dropdown';

describe('GlassDropdown', () => {
  let component: GlassDropdown;
  let fixture: ComponentFixture<GlassDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
