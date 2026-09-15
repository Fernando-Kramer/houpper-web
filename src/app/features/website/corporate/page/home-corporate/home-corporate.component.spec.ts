import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCorporateComponent } from './home-corporate.component';

describe('HomeCorporateComponent', () => {
  let component: HomeCorporateComponent;
  let fixture: ComponentFixture<HomeCorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCorporateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCorporateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
