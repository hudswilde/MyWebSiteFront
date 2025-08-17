import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logopag } from './logopag';

describe('Logopag', () => {
  let component: Logopag;
  let fixture: ComponentFixture<Logopag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logopag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logopag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
