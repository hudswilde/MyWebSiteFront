import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowlodgeswork } from './knowlodgeswork';

describe('Knowlodgeswork', () => {
  let component: Knowlodgeswork;
  let fixture: ComponentFixture<Knowlodgeswork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Knowlodgeswork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Knowlodgeswork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
