import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { SidecheckoutComponent } from './sidecheckout.component';


describe('SidecheckoutComponent', () => {
  let component: SidecheckoutComponent;
  let fixture: ComponentFixture<SidecheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidecheckoutComponent ],
      providers: [ {provide:HttpClient, useValue: { get: () => null }} ]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidecheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
