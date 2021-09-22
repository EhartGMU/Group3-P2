import { ComponentFixture, TestBed } from '@angular/core/testing';


import { SidecheckoutComponent } from './sidecheckout.component';


describe('SidecheckoutComponent', () => {
  let component: SidecheckoutComponent;
  let fixture: ComponentFixture<SidecheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidecheckoutComponent ]
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
