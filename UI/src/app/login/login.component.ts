import { Router } from "@angular/router";
import { SellerService } from "./../../shared/services/seller.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private sellerService: SellerService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}
  login() {
    console.warn(this.loginForm.value);
    this.sellerService.loginSeller(this.loginForm.value).subscribe((res) => {
      if (res) {
        alert(`${res.message}`);
        this.router.navigate([""]);
      }
    });
  }
}
