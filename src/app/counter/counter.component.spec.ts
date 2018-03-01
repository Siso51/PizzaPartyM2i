import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

fdescribe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a value', () => {
    const counter = new CounterComponent();
    expect(counter.value).toBe(0);
  });

  it('should have an increment method', () => {
    const counter = new CounterComponent();

    /* expect(counter.value).toBeNull();
    expect(counter.value).toBeNull(); */

    counter.increment();
    counter.decrement();
    counter.increment();

    expect(counter.value).toBe(1);
  });

  it('should increment when click on plus button', () => {
    const element = fixture.nativeElement;

    const button = element.querySelector('.btn-plus');
    expect(button).not.toBeNull("il manque le bouton plus");
    button.dispatchEvent(new Event("click"));

    fixture.detectChanges();

    const value = element.querySelector('span');
    expect(button.textContent).not.toBe(1);
  });
});
