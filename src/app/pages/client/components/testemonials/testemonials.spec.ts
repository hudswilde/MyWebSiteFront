import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testemonials } from './testemonials';

describe('Testemonials', () => {
  let component: Testemonials;
  let fixture: ComponentFixture<Testemonials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testemonials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testemonials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
