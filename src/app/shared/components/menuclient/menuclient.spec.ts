import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuclient } from './menuclient';

describe('Menuclient', () => {
  let component: Menuclient;
  let fixture: ComponentFixture<Menuclient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menuclient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menuclient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
