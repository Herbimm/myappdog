import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { LoginPageComponent } from "./pages/account/login-page/login-page.component";
import { PetsPageComponent } from "./pages/account/pets-page/pets-page.component";
import { ResetPasswordPageComponent } from "./pages/account/reset-password-page/reset-password-page.component";
import { SignUpPageComponent } from "./pages/account/sign-up-page/sign-up-page.component";
import { FramePageComponent } from "./pages/master/frame-page/frame-page.component";
import { CartPageComponent } from "./pages/store/cart-page/cart-page.component";
import { ProductsPageComponent } from "./pages/store/products-page/products-page.component";
import {HttpClientModule} from "@angular/common/http"
import { DataService } from "./services/data.service";
import { ProductCardComponent } from './components/store/productcard/product-card.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignUpPageComponent,    
    ProductsPageComponent,
    PetsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
