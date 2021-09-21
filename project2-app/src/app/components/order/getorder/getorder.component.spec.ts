import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetorderComponent } from './getorder.component';

describe('GetorderComponent', () => {
  let component: GetorderComponent;
  let fixture: ComponentFixture<GetorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetorderComponent ],
      imports: [ CommonModule ],
      providers: [ {provide:HttpClient, useValue: { get: () => null }} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
