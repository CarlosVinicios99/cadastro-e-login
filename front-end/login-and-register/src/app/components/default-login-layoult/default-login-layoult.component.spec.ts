import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginLayoultComponent } from './default-login-layoult.component';

describe('DefaultLoginLayoultComponent', () => {
  let component: DefaultLoginLayoultComponent;
  let fixture: ComponentFixture<DefaultLoginLayoultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLoginLayoultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultLoginLayoultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
