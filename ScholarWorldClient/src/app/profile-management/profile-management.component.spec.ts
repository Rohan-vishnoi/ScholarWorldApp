import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileManagementComponent } from './profile-management.component';
import {NavbarComponent} from "../navbar/navbar.component";
import {StoreModule} from "@ngrx/store";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatFormFieldControl, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ProfileManagementComponent', () => {
  let component: ProfileManagementComponent;
  let fixture: ComponentFixture<ProfileManagementComponent>;

  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      declarations: [ ProfileManagementComponent,    NavbarComponent],
      imports: [
        StoreModule.forRoot({}),
        HttpClientModule,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatToolbar,
        MatIcon,
        MatFormField,
        MatLabel,
        FormsModule,
        MatInput,
        BrowserAnimationsModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize userName and userEmail on ngOnInit', () => {
    expect(component.userName).toBe('John Doe');
    expect(component.userEmail).toBe('john.doe@example.com');
  });

});
