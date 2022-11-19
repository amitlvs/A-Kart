import { Router } from "@angular/router";
import { SellerService } from "./../../shared/services/seller.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-seller-auth",
  templateUrl: "./seller-auth.component.html",
  styleUrls: ["./seller-auth.component.css"],
})
export class SellerAuthComponent implements OnInit {
  signUpForm!: FormGroup;
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private sellerService: SellerService,
    private router: Router,
    public toastr: ToastrService
  ) {
    this.signUpForm = this.fb.group({
      uname: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}
  signup() {
    console.warn(this.signUpForm.value);
    this.sellerService.signUpSeller(this.signUpForm.value).subscribe((res) => {
      if (res) {
        console.log(res);
        if (localStorage.getItem("userInfo")) {
          this.router.navigate(["seller-home"]);
        } else {
          alert(res.data.uname + ", You have successfully signed up.");
          this.router.navigate(["login"]);
        }
      }
    });
  }
  login() {
    console.warn(this.loginForm.value);
    this.sellerService.loginSeller(this.loginForm.value).subscribe((res) => {
      if (res) {
        this.toastr.success(`${res.message}`, "Toastr fun!");
        // alert(`${res.message}`);
        this.sellerService.isSellerLoggedIn.next(true);
        localStorage.setItem("sellerInfo", JSON.stringify(res));
        this.router.navigate(["seller-home"]);
      }
    });
  }
}
