import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  // component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // model is available
  it("should have output property with 'demo'", () => {
    let result = component.output;
    expect(result).toEqual('demo');
  });

  it('should populate todos array', () => {
    const todoLength = component.todos.length;
    expect(todoLength).not.toEqual(0);
  });

  // template is created
  it('should render output on the heading element - I', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const text = compiled.querySelector('h1')?.textContent;

    expect(text).toContain('demo');
  });

  it('should render output on the heading element - II', () => {
    const h1Element = de.query(By.css('h1')).nativeElement as HTMLElement;

    expect(h1Element.textContent).toContain('demo');
  });
});
