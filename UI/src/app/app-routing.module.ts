import { SellerProductListComponent } from "./seller-product-list/seller-product-list.component";
import { SellerAddProductComponent } from "./seller-add-product/seller-add-product.component";
import { SellerHomeComponent } from "./seller-home/seller-home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./error404/error404.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SellerAuthComponent } from "./seller-auth/seller-auth.component";
import { AuthGuard } from "src/shared/auth-gaurd/auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "seller-auth",
    component: SellerAuthComponent,
  },
  { path: "login", component: LoginComponent },
  {
    path: "seller-home",
    component: SellerHomeComponent,
  },
  { path: "seller-add-product", component: SellerAddProductComponent },
  { path: "seller-product-list", component: SellerProductListComponent },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
