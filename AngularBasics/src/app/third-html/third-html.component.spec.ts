import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdHtmlComponent } from './third-html.component';

describe('ThirdHtmlComponent', () => {
  let component: ThirdHtmlComponent;
  let fixture: ComponentFixture<ThirdHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdHtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
