/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuestClientComponent } from './guest-client.component';

describe('GuestClientComponent', () => {
  let component: GuestClientComponent;
  let fixture: ComponentFixture<GuestClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
