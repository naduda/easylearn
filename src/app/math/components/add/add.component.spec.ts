import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check', () => {
    component.exCount = 2;
    component.items = [
      {
        a: 5,
        b: 3,
        r: 8,
        expected: 8,
      },
      {
        a: 2,
        b: 3,
        r: 8,
        expected: 5,
      }
    ];

    component.showEx();

    expect(1).toEqual(component.positive);
    expect(1).toEqual(component.negative);
    expect(component.best).toBeFalse();
  });
});
