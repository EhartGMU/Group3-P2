import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InventoryComponent } from './inventory.component';
import { SharedModule } from '../../shared-module/shared.module';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule, HttpClientModule ],
      declarations: [ InventoryComponent ],
      providers: [ HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
