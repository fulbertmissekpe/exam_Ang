import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRvComponent } from './form-rv.component';

describe('FormRvComponent', () => {
  let component: FormRvComponent;
  let fixture: ComponentFixture<FormRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
