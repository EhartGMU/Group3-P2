import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let fakeSvc = {
    ListOrders(): Observable<any[]> {
      return of([]);
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ CommonModule, ReactiveFormsModule, FormsModule  ],
      providers: [ {provide:HttpClient, useValue: { get: () => null }}, { provide: SharedService, useValue: fakeSvc } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
