import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "../app/navbar/navbar.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        NavbarComponent
    ],
    styleUrls: ['./landing-page.component.css'],
    templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {


  productImageUrl = 'path/to/your/product-image.jpg'; // Replace with your image path

  constructor() { }

}
