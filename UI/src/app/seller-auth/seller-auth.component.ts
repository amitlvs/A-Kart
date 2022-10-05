import { Router } from "@angular/router";
import { SellerService } from "./../../shared/services/seller.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-seller-auth",
  templateUrl: "./seller-auth.component.html",
  styleUrls: ["./seller-auth.component.css"],
})
export class SellerAuthComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private sellerService: SellerService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      uname: ["", [Validators.required]],
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
        alert(res.data.uname + ", You have successfully logged in");
        this.router.navigate(["login"]);
      }
    });
  }
}
