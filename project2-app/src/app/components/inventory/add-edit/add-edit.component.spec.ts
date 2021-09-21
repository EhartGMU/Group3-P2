import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddEditComponent } from './add-edit.component';
import { SharedModule } from '../../../shared-module/shared.module';

describe('AddEditComponent', () => {
  let component: AddEditComponent;
  let fixture: ComponentFixture<AddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule, HttpClientModule ],
      declarations: [ AddEditComponent ],
      providers: [ HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
