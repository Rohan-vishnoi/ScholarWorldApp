import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterTestingModule} from "@angular/router/testing";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductCatalogComponent} from "../product-catalog/product-catalog.component";

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[LandingPageComponent,NavbarComponent,ProductCatalogComponent],
      imports: [  RouterTestingModule,
        StoreModule.forRoot({}),
        HttpClientModule,
        MatToolbarModule,
        MatIconModule,
        MatFormField,
        MatLabel,
        FormsModule,
        MatInput,
        BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
