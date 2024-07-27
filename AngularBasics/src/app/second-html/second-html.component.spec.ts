import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondHTMLComponent } from './second-html.component';

describe('SecondHTMLComponent', () => {
  let component: SecondHTMLComponent;
  let fixture: ComponentFixture<SecondHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondHTMLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
