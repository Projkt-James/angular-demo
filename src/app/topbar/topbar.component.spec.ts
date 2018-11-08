import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as Models from '../../models';

import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });

  it(`h1 should contain the value of logo title & subtitle`, () => {
    const compiled = fixture.debugElement.nativeElement;
    const h1Contents = compiled.querySelector('h1').textContent;
    expect(h1Contents).toEqual(`${component.logo.title}${component.logo.subTitle}`);
  });


});
