import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from '../store/service/cart.service';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let cartService: CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        HttpClientModule,
        MatToolbarModule,
        MatIconModule,
        MatFormField,
        MatLabel,
        FormsModule,
        MatInput,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: CartService, useValue: { } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home screen', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.navigateToHomeScreen();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });

  it('should navigate to login page', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.showLoginPageView();
    expect(navigateSpy).toHaveBeenCalledWith(['/Login']);
  });

  it('should navigate to profile management', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.showProfileManagementView();
    expect(navigateSpy).toHaveBeenCalledWith(['/ProfileManagement']);
  });

  it('should navigate to registration page', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.showRegistrationPageView();
    expect(navigateSpy).toHaveBeenCalledWith(['/Registration']);
  });

  it('should navigate to cart view', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.showCartView();
    expect(navigateSpy).toHaveBeenCalledWith(['/cart']);
  });

  it('should dispatch logout action', () => {
    const dispatchSpy = spyOn(component['store'], 'dispatch');
    component.logout();
    expect(dispatchSpy).toHaveBeenCalledWith(jasmine.any(Object));
  });
});
