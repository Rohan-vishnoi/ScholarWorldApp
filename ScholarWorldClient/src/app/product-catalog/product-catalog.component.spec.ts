import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCatalogComponent } from './product-catalog.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { CartService } from '../store/service/cart.service';

describe('ProductCatalogComponent', () => {
  let component: ProductCatalogComponent;
  let fixture: ComponentFixture<ProductCatalogComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCatalogComponent],
      imports: [
        StoreModule.forRoot({}),
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: CartService, useValue: { addItem: jasmine.createSpy('addItem').and.returnValue(of({})) }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatalogComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = spyOn(component['unsubscribe$'], 'next');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
